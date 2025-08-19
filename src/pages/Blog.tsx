import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Mock data for blog posts
const mockPosts = [
  {
    id: 1,
    slug: 'optimizacion-precios-dinamicos-estaciones-esqui',
    title: 'Cómo la optimización de precios dinámicos revoluciona las estaciones de esquí',
    excerpt: 'Descubre cómo el pricing dinámico puede aumentar tus ingresos hasta un 25% adaptándose a la demanda en tiempo real.',
    category: 'product',
    author: 'María González',
    date: '2024-01-15',
    image: '/placeholder.svg',
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'caso-exito-estacion-baqueira-beret',
    title: 'Caso de éxito: Estación Baqueira Beret incrementa ventas online un 40%',
    excerpt: 'Conoce cómo esta prestigiosa estación implementó nuestro sistema y transformó su operación.',
    category: 'success-stories',
    author: 'Carlos Rodríguez',
    date: '2024-01-10',
    image: '/placeholder.svg',
    readTime: '7 min'
  },
  {
    id: 3,
    slug: 'tendencias-tecnologia-estaciones-esqui-2024',
    title: 'Tendencias en tecnología para estaciones de esquí en 2024',
    excerpt: 'Las últimas innovaciones que están transformando la industria del esquí.',
    category: 'news',
    author: 'Ana Martín',
    date: '2024-01-05',
    image: '/placeholder.svg',
    readTime: '6 min'
  }
];

const Blog = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'news': return t('blog.categories.news');
      case 'success-stories': return t('blog.categories.success-stories');
      case 'product': return t('blog.categories.product');
      case 'events': return t('blog.categories.events');
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news': return 'bg-blue-100 text-blue-800';
      case 'success-stories': return 'bg-green-100 text-green-800';
      case 'product': return 'bg-purple-100 text-purple-800';
      case 'events': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Descubre las últimas tendencias, casos de éxito y novedades en tecnología para estaciones de esquí
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={t('blog.search.placeholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('blog.categories.all')}</SelectItem>
                    <SelectItem value="news">{t('blog.categories.news')}</SelectItem>
                    <SelectItem value="success-stories">{t('blog.categories.success-stories')}</SelectItem>
                    <SelectItem value="product">{t('blog.categories.product')}</SelectItem>
                    <SelectItem value="events">{t('blog.categories.events')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(post.category)}>
                        {getCategoryLabel(post.category)}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="text-sm text-muted-foreground">
                        <span>{post.author}</span> • <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:underline text-sm font-medium">
                        {t('blog.read-more')}
                      </Link>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          {t('blog.view-full-article')}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No se encontraron artículos que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;