import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Settings,
  Zap,
  Calendar,
  CheckCircle2,
  DollarSign,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Reserva y pago online",
    description: [
      "Alquiler anticipado desde la web o app de la estación.",
      "Confirmación inmediata y ticket digital.",
      "Reducción de colas y saturación en tienda.",
    ],
  },
  {
    icon: Clock,
    title: "Stock en tiempo real",
    description: [
      "Registro de entradas y salidas con escaneo de código de barras o RFID.",
      "Visualización instantánea de disponibilidad por talla, modelo o categoría.",
      "Mayor vida útil del material y menos incidencias en pista.",
    ],
  },
  {
    icon: Settings,
    title: "Mantenimiento preventivo",
    description: [
      "Alertas automáticas cuando un equipo necesita revisión o reparación.",
      "Historial de uso y estado de cada artículo.",
      "Estadísticas de entradas y salidas en tiempo real.",
    ],
  },
  {
    icon: Zap,
    title: "Integración de la operación",
    description: [
      "Conexión directa con el módulo de Ticketing y CRM.",
      "Posibilidad de incluir el alquiler como parte de un paquete de venta (forfait + equipo + clase).",
      "Sincronización con el ERP para facturación y control contable.",
    ],
  },
];

const GestionAlquilerEquipo = () => {
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
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Alquiler & Inventario
              </h1>
              <p className="">
                Gestiona todo tu inventario de esquís, snowboards y accesorios
                con el módulo Alquiler G Inventario de Ski Solution 360.
                Reservas online, control de stock y mantenimiento integrado.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
                Beneficios clave
              </h2>
              <p className="mb-12 pb-6 text-center animate-fade-in-up">
                El módulo Alquiler G Inventario de Ski Solution 360 está
                diseñado para que puedas controlar todo tu equipamiento de forma
                eficiente, desde la reserva hasta la devolución. Se adapta tanto
                a material de invierno (esquís, snowboards, botas, cascos) como
                a equipos de verano (bicicletas, protecciones, tablas de surf),
                permitiendo trazabilidad, mantenimiento preventivo y una
                experiencia de alquiler fluida para el cliente.
              </p>
            </div>
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
                      <ul className="text-muted-foreground text-sm text-left leading-relaxed list-disc list-inside space-y-1">
                        {benefit.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="flex flex-col items-center">
          <div className="container-custom">
            <div className=" items-center">
              <div className="animate-fade-in-up">
                <div className="prose prose-lg text-center mx-6">
                  <h2 className="text-3xl md:text-4xl font-bold m-8">
                    ¿Cómo funciona?
                  </h2>
                </div>
                <div className="mt-8 mb-6 space-y-4 pb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      El cliente reserva el material online o en punto físico.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      El personal registra la entrega escaneando el equipo.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      El sistema actualiza el stock y el historial de uso en
                      tiempo real.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      A la devolución, se registra el estado y, si es necesario,
                      se programa mantenimiento.
                    </span>
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
                Mantén tu operación siempre equipada, controlada y rentable.
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

export default GestionAlquilerEquipo;
