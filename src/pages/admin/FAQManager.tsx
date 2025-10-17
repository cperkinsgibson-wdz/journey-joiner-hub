import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { faqSchema } from '@/lib/validations/admin';

type FAQ = {
  id: string;
  question: string;
  answer_markdown: string;
  category_id: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  is_featured: boolean;
  sort_order: number;
  slug: string;
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

const FAQManager = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    question: string;
    answer_markdown: string;
    category_id: string;
    status: 'draft' | 'published' | 'archived';
    tags: string;
    is_featured: boolean;
    slug: string;
  }>({
    question: '',
    answer_markdown: '',
    category_id: '',
    status: 'draft',
    tags: '',
    is_featured: false,
    slug: '',
  });

  const { data: faqs, isLoading: loadingFAQs } = useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      return data as FAQ[];
    },
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('faq_categories')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      return data as Category[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (newFAQ: typeof formData) => {
      const { error } = await supabase.from('faqs').insert([{
        ...newFAQ,
        tags: newFAQ.tags ? newFAQ.tags.split(',').map(t => t.trim()) : [],
        created_by: user?.id,
        updated_by: user?.id,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      resetForm();
      toast({ title: 'FAQ created successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to create FAQ', description: error.message, variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase
        .from('faqs')
        .update({
          ...data,
          tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
          updated_by: user?.id,
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      resetForm();
      toast({ title: 'FAQ updated successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to update FAQ', description: error.message, variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('faqs').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      toast({ title: 'FAQ deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Failed to delete FAQ', description: error.message, variant: 'destructive' });
    },
  });

  const generateSlug = (question: string) => {
    return question
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .substring(0, 50);
  };

  const resetForm = () => {
    setFormData({
      question: '',
      answer_markdown: '',
      category_id: '',
      status: 'draft',
      tags: '',
      is_featured: false,
      slug: '',
    });
    setEditingId(null);
  };

  const handleEdit = (faq: FAQ) => {
    setEditingId(faq.id);
    setFormData({
      question: faq.question,
      answer_markdown: faq.answer_markdown,
      category_id: faq.category_id,
      status: faq.status,
      tags: faq.tags?.join(', ') || '',
      is_featured: faq.is_featured,
      slug: faq.slug,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = faqSchema.parse(formData) as typeof formData;
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

  if (loadingFAQs) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">FAQ Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Edit FAQ' : 'Create New FAQ'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                    slug: formData.slug || generateSlug(question)
                  });
                }}
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">URL Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                placeholder="how-to-book-travel"
              />
            </div>

            <div>
              <Label htmlFor="answer">Answer (Markdown)</Label>
              <Textarea
                id="answer"
                value={formData.answer_markdown}
                onChange={(e) => setFormData({ ...formData, answer_markdown: e.target.value })}
                rows={6}
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category_id}
                onValueChange={(value) => setFormData({ ...formData, category_id: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="travel, booking, cancellation"
              />
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: 'draft' | 'published' | 'archived') => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.is_featured}
                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                className="rounded"
              />
              <Label htmlFor="featured">Featured FAQ</Label>
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
        <h2 className="text-2xl font-semibold">Existing FAQs</h2>
        {faqs?.map((faq) => (
          <Card key={faq.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {faq.answer_markdown}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant={faq.status === 'published' ? 'default' : 'secondary'}>
                      {faq.status}
                    </Badge>
                    {faq.is_featured && <Badge variant="outline">Featured</Badge>}
                    {faq.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(faq)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this FAQ?')) {
                        deleteMutation.mutate(faq.id);
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
  );
};

export default FAQManager;
