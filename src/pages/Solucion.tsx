import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    title: "Plataforma Core",
    href: "/ski-solution-360",
    description: "Sistema modular que se adapta a tu estación con integración nativa con ERP y CRM."
  },
  {
    title: "Ticketing & Dynamic Pricing",
    href: "/precio-dinamico-forfaits",
    description: "Ajusta precios según demanda, condiciones de nieve y fecha de compra."
  },
  {
    title: "Control de Accesos RFID",
    href: "/control-accesos-rfid",
    description: "Integración con tornos RFID, QR y Mobile Pass para validación instantánea."
  },
  {
    title: "Escuela & Clases",
    href: "/software-escuela-esqui",
    description: "Reservas online de clases con asignación automática de monitores."
  },
  {
    title: "Alquiler & Inventario",
    href: "/gestion-alquiler-equipo",
    description: "Control de inventario en tiempo real con gestión de reservas digital."
  },
  {
    title: "F&B & Retail POS",
    href: "/punto-venta-restauracion",
    description: "Punto de venta unificado para bares, restaurantes y tiendas."
  },
  {
    title: "BI & CRM 360",
    href: "/bi-crm-ski",
    description: "Análisis en tiempo real con segmentación avanzada de clientes."
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
            <span className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link> / Solución
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                La Solución Integral para tu Estación de Esquí
              </h1>
              <div className="text-lg text-muted-foreground space-y-4">
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
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Beneficios globales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Unificación de todos los procesos en un único sistema.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Aumento de ingresos con precios dinámicos y venta anticipada online.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Control total de accesos, inventario y operaciones.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Datos en tiempo real para tomar mejores decisiones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Grid de módulos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={module.href}>Pedir demo del módulo</Link>
                    </Button>
                  </CardContent>
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

export default Solucion;