import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Category {
  id: string;
  slug: string;
  name_es: string;
}

interface PostData {
  slug: string;
  title_es: string;
  title_cat: string;
  title_en: string;
  title_fr: string;
  excerpt_es: string;
  excerpt_cat: string;
  excerpt_en: string;
  excerpt_fr: string;
  content_es: string;
  content_cat: string;
  content_en: string;
  content_fr: string;
  meta_title_es: string;
  meta_title_cat: string;
  meta_title_en: string;
  meta_title_fr: string;
  meta_description_es: string;
  meta_description_cat: string;
  meta_description_en: string;
  meta_description_fr: string;
  category_id: string;
  featured_image_url: string;
  published: boolean;
}

const AdminPostEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = id !== 'new';
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [postData, setPostData] = useState<PostData>({
    slug: '',
    title_es: '',
    title_cat: '',
    title_en: '',
    title_fr: '',
    excerpt_es: '',
    excerpt_cat: '',
    excerpt_en: '',
    excerpt_fr: '',
    content_es: '',
    content_cat: '',
    content_en: '',
    content_fr: '',
    meta_title_es: '',
    meta_title_cat: '',
    meta_title_en: '',
    meta_title_fr: '',
    meta_description_es: '',
    meta_description_cat: '',
    meta_description_en: '',
    meta_description_fr: '',
    category_id: '',
    featured_image_url: '',
    published: false,
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    fetchCategories();
    if (isEdit) {
      fetchPost();
    }
  }, [id, isEdit, navigate]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, slug, name_es')
        .order('name_es');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Error al cargar las categorías');
    }
  };

  const fetchPost = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setPostData(data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Error al cargar el post');
      navigate('/admin/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[áàäâã]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöôõ]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/[ñ]/g, 'n')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleInputChange = (field: keyof PostData, value: string | boolean) => {
    setPostData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Auto-generate slug from Spanish title
      if (field === 'title_es' && typeof value === 'string') {
        newData.slug = generateSlug(value);
      }
      
      return newData;
    });
  };

  const handleSave = async (publish = false) => {
    setSaving(true);
    
    try {
      const dataToSave = {
        ...postData,
        published: publish || postData.published
      };

      if (isEdit) {
        const { error } = await supabase
          .from('blog_posts')
          .update(dataToSave)
          .eq('id', id);

        if (error) throw error;
        toast.success('Post actualizado correctamente');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([dataToSave]);

        if (error) throw error;
        toast.success('Post creado correctamente');
      }

      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Error al guardar el post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isEdit ? 'Editar' : 'Nuevo'} Post - Admin - Ski Solution 360</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver
                </Button>
                <div>
                  <h1 className="text-2xl font-bold">
                    {isEdit ? 'Editar Post' : 'Nuevo Post'}
                  </h1>
                  <p className="text-muted-foreground">
                    {isEdit ? 'Modifica el contenido existente' : 'Crea un nuevo artículo del blog'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => handleSave(false)} disabled={saving}>
                  <Save className="mr-2 h-4 w-4" />
                  {saving ? 'Guardando...' : 'Guardar Borrador'}
                </Button>
                <Button onClick={() => handleSave(true)} disabled={saving}>
                  <Eye className="mr-2 h-4 w-4" />
                  {saving ? 'Publicando...' : 'Publicar'}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="es" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="es">Español</TabsTrigger>
                  <TabsTrigger value="cat">Català</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="fr">Français</TabsTrigger>
                </TabsList>
                
                {/* Spanish Content */}
                <TabsContent value="es" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contenido en Español</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title_es">Título</Label>
                        <Input
                          id="title_es"
                          value={postData.title_es}
                          onChange={(e) => handleInputChange('title_es', e.target.value)}
                          placeholder="Título del post en español"
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt_es">Extracto</Label>
                        <Textarea
                          id="excerpt_es"
                          value={postData.excerpt_es}
                          onChange={(e) => handleInputChange('excerpt_es', e.target.value)}
                          placeholder="Breve descripción del post"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="content_es">Contenido</Label>
                        <Textarea
                          id="content_es"
                          value={postData.content_es}
                          onChange={(e) => handleInputChange('content_es', e.target.value)}
                          placeholder="Contenido completo del post en español"
                          rows={10}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Catalan Content */}
                <TabsContent value="cat" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contingut en Català</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title_cat">Títol</Label>
                        <Input
                          id="title_cat"
                          value={postData.title_cat}
                          onChange={(e) => handleInputChange('title_cat', e.target.value)}
                          placeholder="Títol del post en català"
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt_cat">Extracte</Label>
                        <Textarea
                          id="excerpt_cat"
                          value={postData.excerpt_cat}
                          onChange={(e) => handleInputChange('excerpt_cat', e.target.value)}
                          placeholder="Breu descripció del post"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="content_cat">Contingut</Label>
                        <Textarea
                          id="content_cat"
                          value={postData.content_cat}
                          onChange={(e) => handleInputChange('content_cat', e.target.value)}
                          placeholder="Contingut complet del post en català"
                          rows={10}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* English Content */}
                <TabsContent value="en" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>English Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title_en">Title</Label>
                        <Input
                          id="title_en"
                          value={postData.title_en}
                          onChange={(e) => handleInputChange('title_en', e.target.value)}
                          placeholder="Post title in English"
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt_en">Excerpt</Label>
                        <Textarea
                          id="excerpt_en"
                          value={postData.excerpt_en}
                          onChange={(e) => handleInputChange('excerpt_en', e.target.value)}
                          placeholder="Brief description of the post"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="content_en">Content</Label>
                        <Textarea
                          id="content_en"
                          value={postData.content_en}
                          onChange={(e) => handleInputChange('content_en', e.target.value)}
                          placeholder="Full post content in English"
                          rows={10}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* French Content */}
                <TabsContent value="fr" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contenu en Français</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title_fr">Titre</Label>
                        <Input
                          id="title_fr"
                          value={postData.title_fr}
                          onChange={(e) => handleInputChange('title_fr', e.target.value)}
                          placeholder="Titre du post en français"
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt_fr">Extrait</Label>
                        <Textarea
                          id="excerpt_fr"
                          value={postData.excerpt_fr}
                          onChange={(e) => handleInputChange('excerpt_fr', e.target.value)}
                          placeholder="Brève description du post"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="content_fr">Contenu</Label>
                        <Textarea
                          id="content_fr"
                          value={postData.content_fr}
                          onChange={(e) => handleInputChange('content_fr', e.target.value)}
                          placeholder="Contenu complet du post en français"
                          rows={10}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Configuración</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={postData.slug}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      placeholder="url-amigable"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Categoría</Label>
                    <Select value={postData.category_id} onValueChange={(value) => handleInputChange('category_id', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name_es}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="featured_image">Imagen destacada (URL)</Label>
                    <Input
                      id="featured_image"
                      value={postData.featured_image_url}
                      onChange={(e) => handleInputChange('featured_image_url', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={postData.published}
                      onCheckedChange={(checked) => handleInputChange('published', checked)}
                    />
                    <Label htmlFor="published">Publicado</Label>
                  </div>
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO</CardTitle>
                  <CardDescription>
                    Configura los metadatos para cada idioma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="es" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="es">ES</TabsTrigger>
                      <TabsTrigger value="cat">CAT</TabsTrigger>
                      <TabsTrigger value="en">EN</TabsTrigger>
                      <TabsTrigger value="fr">FR</TabsTrigger>
                    </TabsList>

                    {(['es', 'cat', 'en', 'fr'] as const).map((lang) => (
                      <TabsContent key={lang} value={lang} className="space-y-4">
                        <div>
                          <Label htmlFor={`meta_title_${lang}`}>Meta Title</Label>
                          <Input
                            id={`meta_title_${lang}`}
                            value={postData[`meta_title_${lang}` as keyof PostData] as string}
                            onChange={(e) => handleInputChange(`meta_title_${lang}` as keyof PostData, e.target.value)}
                            placeholder="Título para SEO"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`meta_description_${lang}`}>Meta Description</Label>
                          <Textarea
                            id={`meta_description_${lang}`}
                            value={postData[`meta_description_${lang}` as keyof PostData] as string}
                            onChange={(e) => handleInputChange(`meta_description_${lang}` as keyof PostData, e.target.value)}
                            placeholder="Descripción para SEO (max 160 caracteres)"
                            rows={3}
                          />
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPostEditor;