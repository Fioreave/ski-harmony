import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Settings, Zap, Calendar, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Settings,
    title: "Operación centralizada",
    description:
      "Gestiona todas las áreas de la estación desde un único dashboard. Evita el uso de múltiples sistemas desconectados. Unifica la experiencia de tus clientes y de tu equipo.",
  },
  {
    icon: Zap,
    title: "Integración total con ERP y CRM ",
    description:
      "Integración nativa con Odoo ERP + CRM.Conexión con sistemas líderes como Navision/Axapta. Flujo de datos automático entre ventas, inventario, contabilidad y marketing.",
  },
  {
    icon: Calendar,
    title: "Datos en tiempo real para mejores decisiones",
    description:
      "Acceso instantáneo a métricas de ventas, aforo y ocupación. Paneles personalizables para cada departamento. Informes que optimizan personal, recursos y precios.",
  },
  {
    icon: Calendar,
    title: "Escalabilidad modular",
    description:
      "Añade o quita módulos según las necesidades de tu estación. Funciona tanto para resorts grandes como para escuelas independientes.Adaptable a temporada de invierno y verano.",
  },
];

const SkiSolution360 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>{" "}
              /
              <Link
                to="/solucion"
                className="hover:text-foreground transition-colors"
              >
                {" "}
                Solución
              </Link>{" "}
              / Plataforma Core
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="#core"
          className="section-spacing bg-gradient-to-br from-background via-background to-muted/30"
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Plataforma Core
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                La Plataforma Core de Ski Solution 360 es el núcleo que conecta
                y gestiona todos los módulos de tu estación de esquí desde un
                único panel. Diseñada para ser el centro de control de tu
                operación, integra la venta online, el control de accesos, el
                alquiler de material, la escuela, la restauración, el retail y
                el CRM en una sola interfaz, con datos en tiempo real y conexión
                nativa con tu ERP.
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
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className={`card-hover border-0 shadow-lg bg-background animate-stagger-${
                      index + 1
                    }`}
                  >
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
            <div className="grid lg:grid-cols-2 gap-12 items-center ">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  ¿Cómo funciona?
                </h2>
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    La Plataforma Core centraliza todos los datos de la estación
                    y conecta los módulos, evitando silos y duplicidad de
                    información.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Preparada para todo el año. La Plataforma Core no es solo
                      para invierno.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Adapta sus funciones a bike parks, actividades de montaña,
                      escuelas de verano o deportes acuáticos, reutilizando el
                      mismo sistema y hardware.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground ">
                      Esto te permite mantener ingresos y optimizar recursos
                      durante todo el año.
                    </span>
                  </div>
                </div>
              </div>

              <div className="animate-stagger-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <Settings className="w-6 h-6 text-primary mb-2" />
                        <h3 className="text-sm font-medium pb-2">
                          Centraliza la información de todos los puntos de
                          venta:
                        </h3>
                        <p className="text-sm">
                          Taquillas, ecommerce, kioscos de autoservicio y iPOS
                          móviles.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <Zap className="w-6 h-6 text-primary mb-2" />
                        <h3 className="text-sm font-medium pb-2">
                          Sincroniza inventarios y accesos en tiempo real:
                        </h3>
                        <p className="text-sm">
                          Evitando sobreventas o colas innecesarias.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <Calendar className="w-6 h-6 text-primary mb-2" />
                        <h3 className="text-sm font-medium pb-2">
                          Genera informes automáticos para gerencia y dirección:
                        </h3>
                        <p className="text-sm">
                          Con datos precisos para la toma de decisiones.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-primary mb-2" />
                        <h3 className="text-sm font-medium pb-2">
                          Centraliza la información de todos los puntos de
                          venta:
                        </h3>
                        <p className="text-sm">
                          Taquillas, ecommerce, kioscos de autoservicio e iPOS
                          móviles.
                        </p>
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
                Unifica tu estación en un único sistema y gana control,
                eficiencia y rentabilidad.
              </h3>
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

export default SkiSolution360;
