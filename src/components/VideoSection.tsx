import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Ve Ski Solution 360 en acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestro software puede transformar la gestión de tu estación en solo 30 segundos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-muted rounded-xl overflow-hidden aspect-video border-2 border-dashed border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="outline" className="bg-background/90 backdrop-blur-sm">
                <PlayCircle className="mr-2 h-8 w-8" />
                <span className="text-lg">Reproducir demo (30s)</span>
              </Button>
            </div>
            
            {/* Video thumbnail placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-30"></div>
            
            {/* Play button overlay */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              30s
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Sin registro requerido · Ver casos reales · Solicita una demo personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;