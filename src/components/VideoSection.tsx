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
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <video
              src="/src/assets/02.mov"
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls
            />
            
            {/* Duration overlay */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              Demo
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