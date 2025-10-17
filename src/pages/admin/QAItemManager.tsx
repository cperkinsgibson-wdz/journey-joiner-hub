import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { createSlug } from '@/utils/qa-utils';
import { qaItemSchema } from '@/lib/validations/admin';

type QAItem = {
  id: string;
  cluster_id: string;
  cluster_number: number;
  funnel_stage: 'TOFU' | 'MOFU' | 'BOFU';
  order_in_cluster: number;
  question: string;
  answer: string;
  slug: string;
  cta_label: string;
  cta_url: string;
};

type QACluster = {
  id: string;
  cluster_number: number;
  theme: string;
};

const QAItemManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    cluster_id: '',
    cluster_number: 1,
    funnel_stage: 'TOFU' as 'TOFU' | 'MOFU' | 'BOFU',
    order_in_cluster: 1,
    question: '',
    answer: '',
    slug: '',
    cta_label: 'Book a 15-minute clarity call',
    cta_url: 'https://calendly.com/catina-perkins',
  });

  const { data: clusters } = useQuery({
    queryKey: ['qa-clusters'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_clusters')
        .select('*')
        .order('cluster_number', { ascending: true });
      if (error) throw error;
      return data as QACluster[];
    },
  });

  const { data: items, isLoading } = useQuery({
    queryKey: ['qa-items', selectedCluster],
    queryFn: async () => {
      let query = supabase.from('qa_items').select('*');
      
      if (selectedCluster) {
        query = query.eq('cluster_number', selectedCluster);
      }
      
      const { data, error } = await query.order('cluster_number').order('order_in_cluster');
      if (error) throw error;
      return data as QAItem[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (newItem: typeof formData) => {
      const { error } = await supabase.from('qa_items').insert([newItem]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-items'] });
      resetForm();
      toast({ title: 'QA item created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to create QA item', description: error.message, variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase
        .from('qa_items')
        .update(data)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-items'] });
      resetForm();
      toast({ title: 'QA item updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to update QA item', description: error.message, variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('qa_items').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-items'] });
      toast({ title: 'QA item deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to delete QA item', description: error.message, variant: 'destructive' });
    },
  });

  const resetForm = () => {
    setFormData({
      cluster_id: '',
      cluster_number: 1,
      funnel_stage: 'TOFU',
      order_in_cluster: 1,
      question: '',
      answer: '',
      slug: '',
      cta_label: 'Book a 15-minute clarity call',
      cta_url: 'https://calendly.com/catina-perkins',
    });
    setEditingId(null);
  };

  const handleEdit = (item: QAItem) => {
    setEditingId(item.id);
    setFormData({
      cluster_id: item.cluster_id,
      cluster_number: item.cluster_number,
      funnel_stage: item.funnel_stage,
      order_in_cluster: item.order_in_cluster,
      question: item.question,
      answer: item.answer,
      slug: item.slug,
      cta_label: item.cta_label,
      cta_url: item.cta_url,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = qaItemSchema.parse(formData) as typeof formData;
      if (editingId) {
        updateMutation.mutate({ id: editingId, data: validatedData });
      } else {
        createMutation.mutate(validatedData);
      }
    } catch (error: any) {
      toast({
        title: 'Validation error',
        description: error.errors?.[0]?.message || 'Invalid input',
        variant: 'destructive'
      });
    }
  };

  const handleClusterChange = (clusterId: string) => {
    const cluster = clusters?.find(c => c.id === clusterId);
    if (cluster) {
      setFormData({
        ...formData,
        cluster_id: clusterId,
        cluster_number: cluster.cluster_number,
      });
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">QA Item Management</h1>
        <Select value={selectedCluster?.toString() || 'all'} onValueChange={(v) => setSelectedCluster(v === 'all' ? null : parseInt(v))}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by cluster" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Clusters</SelectItem>
            {clusters?.map((cluster) => (
              <SelectItem key={cluster.id} value={cluster.cluster_number.toString()}>
                Cluster {cluster.cluster_number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Edit QA Item' : 'Create New QA Item'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cluster">Cluster</Label>
                <Select value={formData.cluster_id} onValueChange={handleClusterChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cluster" />
                  </SelectTrigger>
                  <SelectContent>
                    {clusters?.map((cluster) => (
                      <SelectItem key={cluster.id} value={cluster.id}>
                        Cluster {cluster.cluster_number}: {cluster.theme}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="funnel_stage">Funnel Stage</Label>
                <Select value={formData.funnel_stage} onValueChange={(v: 'TOFU' | 'MOFU' | 'BOFU') => setFormData({ ...formData, funnel_stage: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TOFU">TOFU</SelectItem>
                    <SelectItem value="MOFU">MOFU</SelectItem>
                    <SelectItem value="BOFU">BOFU</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="order_in_cluster">Order in Cluster</Label>
              <Input
                id="order_in_cluster"
                type="number"
                value={formData.order_in_cluster}
                onChange={(e) => setFormData({ ...formData, order_in_cluster: parseInt(e.target.value) || 1 })}
                required
              />
            </div>

            <div>
              <Label htmlFor="question">Question</Label>
              <Input
                id="question"
                value={formData.question}
                onChange={(e) => {
                  const question = e.target.value;
                  setFormData({
                    ...formData,
                    question,
                    slug: formData.slug || createSlug(question),
                  });
                }}
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="answer">Answer</Label>
              <Textarea
                id="answer"
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                required
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cta_label">CTA Label</Label>
                <Input
                  id="cta_label"
                  value={formData.cta_label}
                  onChange={(e) => setFormData({ ...formData, cta_label: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="cta_url">CTA URL</Label>
                <Input
                  id="cta_url"
                  value={formData.cta_url}
                  onChange={(e) => setFormData({ ...formData, cta_url: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                <Save className="w-4 h-4 mr-2" />
                {editingId ? 'Update' : 'Create'}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Existing Items {selectedCluster && `- Cluster ${selectedCluster}`}
        </h2>
        <div className="grid gap-4">
          {items?.map((item) => (
            <Card key={item.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 rounded">
                        Cluster {item.cluster_number}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 bg-secondary rounded">
                        {item.funnel_stage}
                      </span>
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        Order: {item.order_in_cluster}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.answer}</p>
                    <p className="text-xs text-muted-foreground">/{item.slug}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this QA item?')) {
                          deleteMutation.mutate(item.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAItemManager;
