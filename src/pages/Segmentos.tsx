import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const segments = [
  {
    title: "Grandes Resorts",
    href: "/software-gestion-ski-resort",
    description: "Soluciones integrales para grandes estaciones de esquí con miles de visitantes diarios."
  },
  {
    title: "Resorts Medianos",
    href: "/software-gestion-ski-resort-mediano",
    description: "Optimización de recursos y competitividad para estaciones medianas."
  },
  {
    title: "Escuelas de Esquí",
    href: "/software-gestion-escuelas-esqui",
    description: "Gestión especializada de clases, monitores y horarios para escuelas de esquí."
  },
  {
    title: "Jardines de Nieve",
    href: "/software-gestion-jardines-nieve",
    description: "Soluciones específicas para la gestión segura de niños pequeños."
  },
  {
    title: "Bike Parks",
    href: "/software-gestion-bike-parks",
    description: "Gestión estival de actividades de ciclismo de montaña y alquiler."
  },
  {
    title: "Actividades Outdoor",
    href: "/software-gestion-escuela-aventura",
    description: "Multiactividad outdoor: tirolinas, escalada, rutas y aventura."
  },
  {
    title: "Escuela de Vela y Buceo",
    href: "/software-gestion-escuela-vela-buceo",
    description: "Gestión de actividades acuáticas y material específico de agua."
  },
  {
    title: "Museos",
    href: "/software-gestion-museo",
    description: "Control de entradas, aforos y experiencias digitales culturales."
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
            <span className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link> / Segmentos
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Segmentos a los que ayudamos
              </h1>
              <p className="text-lg text-muted-foreground">
                Cada estación tiene retos únicos. Ski Solution 360 adapta sus módulos para resolver las necesidades de cada segmento, desde grandes resorts hasta museos.
              </p>
            </div>
          </div>
        </section>

        {/* Segments Grid */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      <Link to={segment.href} className="hover:text-primary transition-colors">
                        {segment.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{segment.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Segmentos;