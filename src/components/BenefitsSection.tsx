import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, TrendingUp, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Todo en uno",
      description: "Un único sistema modular, sin cambiar tu hardware."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Más ingresos",
      description: "Motor de pricing dinámico y venta anticipada online."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Operación sin fricciones",
      description: "Acceso rápido, autoservicio y control total."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Por qué elegir Ski Solution 360
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La plataforma integral que revoluciona la gestión de estaciones de esquí
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;