import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            El Software todo en uno para tu{' '}
            <span className="text-primary">estación de esquí</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Gestiona reservas, forfaits, alquiler, escuela, restauración y mucho más desde un único panel conectado a tu ERP. 
            Optimiza tus ingresos con precios dinámicos y datos en tiempo real.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium">
              Solicita una demo
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Ver vídeo demo
            </Button>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative">
            <div className="bg-muted rounded-lg h-64 md:h-96 flex items-center justify-center border-2 border-dashed border-border">
              <p className="text-muted-foreground text-lg">Dashboard Preview / Hero Image</p>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm">
              ⚡ Tiempo real
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium text-sm">
              📊 Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;