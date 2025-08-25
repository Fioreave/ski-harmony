import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, DollarSign, Clock, Smartphone, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Aumento de ingresos",
    description: "Aumento de ingresos por gestión dinámica de tarifas."
  },
  {
    icon: Clock,
    title: "Reducción de colas",
    description: "Reducción de colas en taquillas."
  },
  {
    icon: Smartphone,
    title: "Integración móvil",
    description: "Integración con accesos RFID y apps móviles."
  }
];

const PrecioDinamicoForfaits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link> / 
              <Link to="/solucion" className="hover:text-foreground transition-colors"> Solución</Link> / 
              Ticketing & Dynamic Pricing
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Ticketing & Dynamic Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                Optimiza tus ingresos con precios inteligentes que se adaptan en tiempo real.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Cómo funciona el Dynamic Pricing
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ajusta el precio del forfait según demanda, condiciones de nieve, previsión meteorológica y fecha de compra.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Facilita la venta anticipada online y aumenta la ocupación en días valle.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Análisis de demanda en tiempo real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Precios basados en condiciones meteorológicas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Optimización de ingresos automática</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-stagger-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                    <div className="space-y-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Día soleado</span>
                          <span className="text-primary font-bold">€45</span>
                        </div>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Día nublado</span>
                          <span className="text-primary font-bold">€35</span>
                        </div>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Anticipada</span>
                          <span className="text-primary font-bold">€25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Beneficios clave
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className={`card-hover border-0 shadow-lg bg-background animate-stagger-${index + 1}`}>
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                ¿Quieres maximizar tus ingresos?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Descubre cómo el pricing dinámico puede transformar tu facturación.
              </p>
              <Button size="lg" className="btn-demo text-lg px-8 py-3">
                Solicita una demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrecioDinamicoForfaits;