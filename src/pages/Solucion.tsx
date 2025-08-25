import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Settings, 
  TrendingUp, 
  Shield, 
  GraduationCap, 
  Package, 
  ShoppingCart, 
  BarChart3,
  CheckCircle 
} from "lucide-react";

const benefits = [
  {
    icon: Settings,
    title: "Unificación de procesos",
    description: "Unificación de todos los procesos en un único sistema."
  },
  {
    icon: TrendingUp,
    title: "Aumento de ingresos",
    description: "Aumento de ingresos con precios dinámicos y venta anticipada online."
  },
  {
    icon: Shield,
    title: "Control total",
    description: "Control total de accesos, inventario y operaciones."
  },
  {
    icon: BarChart3,
    title: "Datos en tiempo real",
    description: "Datos en tiempo real para tomar mejores decisiones."
  }
];

const modules = [
  {
    title: "Plataforma Core",
    href: "/ski-solution-360",
    description: "Sistema modular que se adapta a tu estación con integración nativa con ERP y CRM.",
    icon: Settings
  },
  {
    title: "Ticketing & Dynamic Pricing",
    href: "/precio-dinamico-forfaits",
    description: "Ajusta precios según demanda, condiciones de nieve y fecha de compra.",
    icon: TrendingUp
  },
  {
    title: "Control de Accesos RFID",
    href: "/control-accesos-rfid",
    description: "Integración con tornos RFID, QR y Mobile Pass para validación instantánea.",
    icon: Shield
  },
  {
    title: "Escuela & Clases",
    href: "/software-escuela-esqui",
    description: "Reservas online de clases con asignación automática de monitores.",
    icon: GraduationCap
  },
  {
    title: "Alquiler & Inventario",
    href: "/gestion-alquiler-equipo",
    description: "Control de inventario en tiempo real con gestión de reservas digital.",
    icon: Package
  },
  {
    title: "F&B & Retail POS",
    href: "/punto-venta-restauracion",
    description: "Punto de venta unificado para bares, restaurantes y tiendas.",
    icon: ShoppingCart
  },
  {
    title: "BI & CRM 360",
    href: "/bi-crm-ski",
    description: "Análisis en tiempo real con segmentación avanzada de clientes.",
    icon: BarChart3
  }
];

const Solucion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link> / Solución
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                La Solución Integral para tu Estación de Esquí
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground space-y-4 animate-stagger-1">
                <p>
                  Nuestra plataforma reúne todos los módulos necesarios para gestionar tu estación de esquí de forma integral: ticketing, accesos, escuela, alquiler, restauración, retail, CRM y analítica.
                </p>
                <p>
                  Con Ski Solution 360 optimizas ingresos, eliminas fricciones en la experiencia del cliente y mejoras la operación interna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Beneficios globales
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-hover border-0 shadow-lg bg-background animate-stagger-${index + 1}`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Grid de módulos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-hover border-0 shadow-lg bg-background group animate-stagger-${Math.min(index + 1, 4)}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Link to={module.href}>
                          Pedir demo del módulo
                        </Link>
                      </Button>
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
                ¿Listo para transformar tu estación de esquí?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Descubre cómo Ski Solution 360 puede optimizar todas las operaciones de tu estación.
              </p>
              <Button size="lg" className="btn-demo text-lg px-8 py-3">
                Solicita una demo gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solucion;