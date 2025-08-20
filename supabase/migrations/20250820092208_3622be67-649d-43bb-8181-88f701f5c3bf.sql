-- Create users table for admin authentication
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email TEXT,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_es TEXT NOT NULL,
  name_cat TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_fr TEXT NOT NULL,
  description_es TEXT,
  description_cat TEXT,
  description_en TEXT,
  description_fr TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_es TEXT NOT NULL,
  name_cat TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_fr TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table with multilingual support
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  
  -- Spanish content
  title_es TEXT NOT NULL,
  excerpt_es TEXT,
  content_es TEXT NOT NULL,
  meta_title_es TEXT,
  meta_description_es TEXT,
  
  -- Catalan content
  title_cat TEXT NOT NULL,
  excerpt_cat TEXT,
  content_cat TEXT NOT NULL,
  meta_title_cat TEXT,
  meta_description_cat TEXT,
  
  -- English content
  title_en TEXT NOT NULL,
  excerpt_en TEXT,
  content_en TEXT NOT NULL,
  meta_title_en TEXT,
  meta_description_en TEXT,
  
  -- French content
  title_fr TEXT NOT NULL,
  excerpt_fr TEXT,
  content_fr TEXT NOT NULL,
  meta_title_fr TEXT,
  meta_description_fr TEXT,
  
  -- Common fields
  category_id UUID REFERENCES public.categories(id),
  author TEXT NOT NULL DEFAULT 'Admin',
  featured_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  read_time INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_post_tags junction table
CREATE TABLE public.blog_post_tags (
  blog_post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, tag_id)
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to published content
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

CREATE POLICY "Anyone can view categories" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view tags" 
ON public.tags 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view blog post tags" 
ON public.blog_post_tags 
FOR SELECT 
USING (true);

-- Admin policies (will be implemented with proper auth later)
CREATE POLICY "Admins can manage all blog posts" 
ON public.blog_posts 
FOR ALL 
USING (EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage categories" 
ON public.categories 
FOR ALL 
USING (EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage tags" 
ON public.tags 
FOR ALL 
USING (EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage blog post tags" 
ON public.blog_post_tags 
FOR ALL 
USING (EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Create storage policies
CREATE POLICY "Public can view blog images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can update blog images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can delete blog images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'blog-images' AND EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'));

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default admin user (password: BDRinf!)
-- Note: In production, this should be hashed properly
INSERT INTO public.users (username, password_hash, email, role) 
VALUES ('bdrinformatica', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@skisolution360.com', 'admin');

-- Insert default categories
INSERT INTO public.categories (slug, name_es, name_cat, name_en, name_fr, description_es, description_cat, description_en, description_fr) VALUES
('noticias', 'Noticias', 'Notícies', 'News', 'Actualités', 'Últimas noticias del sector', 'Últimes notícies del sector', 'Latest industry news', 'Dernières nouvelles du secteur'),
('casos-exito', 'Casos de éxito', 'Casos d''èxit', 'Success Stories', 'Cas de succès', 'Historias de éxito de nuestros clientes', 'Històries d''èxit dels nostres clients', 'Success stories from our clients', 'Histoires de réussite de nos clients'),
('producto', 'Producto', 'Producte', 'Product', 'Produit', 'Novedades y características del producto', 'Novetats i característiques del producte', 'Product news and features', 'Actualités et fonctionnalités du produit'),
('eventos', 'Eventos', 'Esdeveniments', 'Events', 'Événements', 'Eventos y conferencias del sector', 'Esdeveniments i conferències del sector', 'Industry events and conferences', 'Événements et conférences du secteur');

-- Insert default tags
INSERT INTO public.tags (slug, name_es, name_cat, name_en, name_fr) VALUES
('innovacion', 'Innovación', 'Innovació', 'Innovation', 'Innovation'),
('tecnologia', 'Tecnología', 'Tecnologia', 'Technology', 'Technologie'),
('esqui', 'Esquí', 'Esquí', 'Skiing', 'Ski'),
('gestion', 'Gestión', 'Gestió', 'Management', 'Gestion'),
('digitalizacion', 'Digitalización', 'Digitalització', 'Digitalization', 'Numérisation');