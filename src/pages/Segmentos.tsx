import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Baby, 
  Bike, 
  Mountain, 
  Waves, 
  Building 
} from "lucide-react";

const segments = [
  {
    title: "Grandes Resorts",
    href: "/software-gestion-ski-resort",
    description: "Soluciones integrales para grandes estaciones de esquí con miles de visitantes diarios.",
    icon: Building2
  },
  {
    title: "Resorts Medianos",
    href: "/software-gestion-ski-resort-mediano",
    description: "Optimización de recursos y competitividad para estaciones medianas.",
    icon: Briefcase
  },
  {
    title: "Escuelas de Esquí",
    href: "/software-gestion-escuelas-esqui",
    description: "Gestión especializada de clases, monitores y horarios para escuelas de esquí.",
    icon: GraduationCap
  },
  {
    title: "Jardines de Nieve",
    href: "/software-gestion-jardines-nieve",
    description: "Soluciones específicas para la gestión segura de niños pequeños.",
    icon: Baby
  },
  {
    title: "Bike Parks",
    href: "/software-gestion-bike-parks",
    description: "Gestión estival de actividades de ciclismo de montaña y alquiler.",
    icon: Bike
  },
  {
    title: "Actividades Outdoor",
    href: "/software-gestion-escuela-aventura",
    description: "Multiactividad outdoor: tirolinas, escalada, rutas y aventura.",
    icon: Mountain
  },
  {
    title: "Escuela de Vela y Buceo",
    href: "/software-gestion-escuela-vela-buceo",
    description: "Gestión de actividades acuáticas y material específico de agua.",
    icon: Waves
  },
  {
    title: "Museos",
    href: "/software-gestion-museo",
    description: "Control de entradas, aforos y experiencias digitales culturales.",
    icon: Building
  }
];

const Segmentos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link> / Segmentos
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Segmentos a los que ayudamos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                Cada estación tiene retos únicos. Ski Solution 360 adapta sus módulos para resolver las necesidades de cada segmento, desde grandes resorts hasta museos.
              </p>
            </div>
          </div>
        </section>

        {/* Segments Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => {
                const Icon = segment.icon;
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
                        <Link 
                          to={segment.href} 
                          className="hover:text-primary transition-colors"
                        >
                          {segment.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {segment.description}
                      </CardDescription>
                    </CardHeader>
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
                ¿No encuentras tu segmento?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro sistema es modular y se adapta a cualquier tipo de actividad y negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-demo text-lg px-8 py-3 bg-primary text-primary-foreground hover:scale-105 transition-all duration-200 rounded-md">
                  Consulta tu caso
                </button>
                <button className="text-lg px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md">
                  Ver todos los módulos
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Segmentos;