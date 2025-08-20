import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet';
import { PlusCircle, Edit, Trash2, Eye, LogOut, FileText, Image, Tags, Folder } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  slug: string;
  title_es: string;
  title_cat: string;
  title_en: string;
  title_fr: string;
  published: boolean;
  created_at: string;
  category_id?: string;
}

interface Category {
  id: string;
  slug: string;
  name_es: string;
  name_cat: string;
  name_en: string;
  name_fr: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch posts
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('name_es');

      if (categoriesError) throw categoriesError;

      setPosts(postsData || []);
      setCategories(categoriesData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_username');
    toast.success('Sesión cerrada');
    navigate('/admin');
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Post eliminado correctamente');
      fetchData();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Error al eliminar el post');
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast.success(currentStatus ? 'Post ocultado' : 'Post publicado');
      fetchData();
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Error al actualizar el post');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Cargando panel de administración...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard Admin - Ski Solution 360</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestión de contenido y SEO</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="posts" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Posts
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Categorías
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Imágenes
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex items-center gap-2">
                <Tags className="h-4 w-4" />
                SEO
              </TabsTrigger>
            </TabsList>

            {/* Posts Tab */}
            <TabsContent value="posts" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Gestión de Posts</h2>
                  <p className="text-muted-foreground">Crea, edita y gestiona los artículos del blog</p>
                </div>
                <Button onClick={() => navigate('/admin/posts/new')}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nuevo Post
                </Button>
              </div>

              <div className="grid gap-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{post.title_es}</h3>
                            <Badge variant={post.published ? "default" : "secondary"}>
                              {post.published ? 'Publicado' : 'Borrador'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Creado: {new Date(post.created_at).toLocaleDateString('es-ES')}
                          </p>
                          <p className="text-xs text-muted-foreground">Slug: /{post.slug}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/admin/posts/${post.id}`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant={post.published ? "secondary" : "default"}
                            size="sm"
                            onClick={() => togglePublished(post.id, post.published)}
                          >
                            {post.published ? 'Ocultar' : 'Publicar'}
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {posts.length === 0 && (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-semibold mb-2">No hay posts aún</h3>
                      <p className="text-muted-foreground mb-4">
                        Comienza creando tu primer artículo del blog
                      </p>
                      <Button onClick={() => navigate('/admin/posts/new')}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Crear primer post
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Categories Tab */}
            <TabsContent value="categories" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Categorías</h2>
                  <p className="text-muted-foreground">Gestiona las categorías del blog</p>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nueva Categoría
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {categories.map((category) => (
                  <Card key={category.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{category.name_es}</h3>
                          <p className="text-sm text-muted-foreground">/{category.slug}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Media Tab */}
            <TabsContent value="media" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Imágenes</CardTitle>
                  <CardDescription>
                    Sube y organiza las imágenes para tus posts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Image className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Subir imágenes</h3>
                    <p className="text-muted-foreground mb-4">
                      Arrastra y suelta archivos o haz clic para seleccionar
                    </p>
                    <Button>Seleccionar archivos</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración SEO</CardTitle>
                  <CardDescription>
                    Gestiona metaetiquetas, títulos y configuración SEO global
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Tags className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Herramientas SEO</h3>
                    <p className="text-muted-foreground">
                      Próximamente: configuración avanzada de SEO
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;