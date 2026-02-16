import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { qaClusterSchema } from '@/lib/validations/admin';
import { getSafeErrorMessage } from '@/lib/error-utils';

type QACluster = {
  id: string;
  cluster_number: number;
  theme: string;
  sort_order: number;
};

const QAClusterManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cluster_number: 1,
    theme: '',
    sort_order: 0,
  });

  const { data: clusters, isLoading } = useQuery({
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

  const createMutation = useMutation({
    mutationFn: async (newCluster: typeof formData) => {
      const { error } = await supabase.from('qa_clusters').insert([newCluster]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-clusters'] });
      resetForm();
      toast({ title: 'Cluster created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to create cluster', description: getSafeErrorMessage(error), variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase
        .from('qa_clusters')
        .update(data)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-clusters'] });
      resetForm();
      toast({ title: 'Cluster updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to update cluster', description: getSafeErrorMessage(error), variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('qa_clusters').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-clusters'] });
      toast({ title: 'Cluster deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to delete cluster', description: getSafeErrorMessage(error), variant: 'destructive' });
    },
  });

  const resetForm = () => {
    setFormData({ cluster_number: 1, theme: '', sort_order: 0 });
    setEditingId(null);
  };

  const handleEdit = (cluster: QACluster) => {
    setEditingId(cluster.id);
    setFormData({
      cluster_number: cluster.cluster_number,
      theme: cluster.theme,
      sort_order: cluster.sort_order,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = qaClusterSchema.parse(formData) as typeof formData;
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

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">QA Cluster Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Cluster' : 'Create New Cluster'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="cluster_number">Cluster Number</Label>
              <Input
                id="cluster_number"
                type="number"
                value={formData.cluster_number}
                onChange={(e) => setFormData({ ...formData, cluster_number: parseInt(e.target.value) || 1 })}
                required
              />
            </div>

            <div>
              <Label htmlFor="theme">Theme</Label>
              <Input
                id="theme"
                value={formData.theme}
                onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                required
                placeholder="Getting Started Basics"
              />
            </div>

            <div>
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Lower numbers appear first
              </p>
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
        <h2 className="text-2xl font-semibold">Existing Clusters</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {clusters?.map((cluster) => (
            <Card key={cluster.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Cluster {cluster.cluster_number}</h3>
                    <p className="text-sm text-muted-foreground">{cluster.theme}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Sort order: {cluster.sort_order}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(cluster)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (confirm('Are you sure? This will delete all QA items in this cluster.')) {
                          deleteMutation.mutate(cluster.id);
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

export default QAClusterManager;
