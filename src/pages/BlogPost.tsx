import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Mock data for blog post
const mockPost = {
  slug: 'optimizacion-precios-dinamicos-estaciones-esqui',
  title: 'Cómo la optimización de precios dinámicos revoluciona las estaciones de esquí',
  excerpt: 'Descubre cómo el pricing dinámico puede aumentar tus ingresos hasta un 25% adaptándose a la demanda en tiempo real.',
  category: 'product',
  author: 'María González',
  date: '2024-01-15',
  image: '/placeholder.svg',
  readTime: '5 min',
  content: `
    <p>Las estaciones de esquí enfrentan desafíos únicos en la gestión de precios debido a la naturaleza estacional de su negocio y las fluctuaciones constantes en la demanda. La implementación de un sistema de precios dinámicos se ha convertido en una herramienta fundamental para maximizar los ingresos y optimizar la experiencia del cliente.</p>

    <h2>¿Qué es el pricing dinámico?</h2>
    <p>El pricing dinámico es una estrategia de precios que ajusta automáticamente los costos de productos o servicios basándose en factores como la demanda actual, condiciones meteorológicas, disponibilidad de capacidad y comportamiento histórico de compra.</p>

    <h2>Beneficios para las estaciones de esquí</h2>
    <ul>
      <li><strong>Maximización de ingresos:</strong> Ajuste automático de precios según la demanda</li>
      <li><strong>Gestión de capacidad:</strong> Distribución equilibrada de visitantes</li>
      <li><strong>Experiencia mejorada:</strong> Incentivos para visitas en días de menor demanda</li>
      <li><strong>Competitividad:</strong> Respuesta rápida a cambios del mercado</li>
    </ul>

    <h2>Implementación exitosa</h2>
    <p>Para una implementación exitosa del pricing dinámico, es esencial contar con:</p>
    <ol>
      <li>Datos históricos de ventas y comportamiento</li>
      <li>Integración con sistemas meteorológicos</li>
      <li>Análisis de competencia en tiempo real</li>
      <li>Segmentación de clientes</li>
    </ol>

    <p>El futuro de las estaciones de esquí pasa por la adopción de tecnologías inteligentes que permitan una gestión más eficiente y rentable del negocio.</p>
  `,
  tableOfContents: [
    { id: 'que-es-pricing-dinamico', title: '¿Qué es el pricing dinámico?' },
    { id: 'beneficios', title: 'Beneficios para las estaciones de esquí' },
    { id: 'implementacion', title: 'Implementación exitosa' }
  ]
};

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // In a real app, you would fetch the post data based on the slug
  const post = mockPost;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Volver al blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
        {/* Back to Blog */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 mb-8">
          <div className="aspect-video md:aspect-[21/9] bg-muted rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Índice de contenidos</h3>
                    <nav className="space-y-2">
                      {post.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {/* Article Header */}
                <header className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {getCategoryLabel(post.category)}
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Separator className="mb-8" />
                </header>

                {/* Article Body */}
                <article 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA Section */}
                <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-background rounded-lg border">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      ¿Listo para revolucionar tu estación de esquí?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Descubre cómo nuestro software puede ayudarte a implementar precios dinámicos 
                      y optimizar tus ingresos de manera automática.
                    </p>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t('nav.request-demo')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;