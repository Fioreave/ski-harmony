import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, Users, CreditCard, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Reservas online multiactividad",
    description: "Reservas online de clases de esquí, snowboard o actividades de verano."
  },
  {
    icon: Users,
    title: "Asignación automática",
    description: "Asignación automática de monitores según disponibilidad."
  },
  {
    icon: GraduationCap,
    title: "Gestión centralizada",
    description: "Gestión de horarios y grupos centralizada."
  }
];

const SoftwareEscuelaEsqui = () => {
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
              Escuela & Clases
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Escuela & Clases
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                Gestión completa de escuela de esquí con reservas online y asignación automática de monitores.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
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

        {/* How it Works Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Cómo funciona
                </h2>
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    El cliente puede reservar forfait + clases en la misma compra. El sistema asigna monitores, genera planning y procesa el cobro.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Reserva combinada forfait + clases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Asignación automática de monitores</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Generación automática de planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Procesamiento de cobro integrado</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-stagger-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                    <div className="space-y-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-medium">Clases disponibles</span>
                        </div>
                        <span className="text-primary font-bold">15</span>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-medium">Monitores activos</span>
                        </div>
                        <span className="text-primary font-bold">8</span>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <span className="font-medium">Reservas hoy</span>
                        </div>
                        <span className="text-primary font-bold">42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                ¿Quieres optimizar tu escuela de esquí?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Automatiza la gestión de clases y maximiza la satisfacción de tus clientes.
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

export default SoftwareEscuelaEsqui;