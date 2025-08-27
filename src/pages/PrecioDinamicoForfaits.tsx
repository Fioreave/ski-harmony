import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Smartphone,
  CheckCircle2,
  PersonStandingIcon,
  PersonStanding,
  UserCheck,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Venta multicanal sin fricciones",
    description: [
      "Ecommerce integrado para compra anticipada.",
      "Taquillas físicas, kioscos de autoservicio y puntos de venta móviles (iPOS).",
      "Tickets digitales con QR o mobile pass para acceso rápido.",
    ],
  },
  {
    icon: Clock,
    title: "Precios dinámicos conectados a datos reales",
    description: [
      "Ajusta las tarifas según la ocupación, la fecha, la previsión meteorológica o la demanda.",
      "Conecta el motor de pricing a inventario y aforo en tiempo real.",
      "Incrementa la venta anticipada y suaviza los picos de afluencia.",
    ],
  },
  {
    icon: Smartphone,
    title: "Control de accesos inteligente",
    description: [
      "Integración con tornos RFID, lectores QR y NFC.",
      "Validación instantánea para evitar colas y fraudes.",
      "Estadísticas de entradas y salidas en tiempo real.",
    ],
  },
  {
    icon: UserCheck,
    title: "Experiencia mejorada para el cliente",
    description: [
      "Compra en pocos clics desde cualquier dispositivo.",
      "Acceso directo a pistas sin pasar por taquilla.",
      "Ofertas y upgrades personalizados basados en su historial.",
    ],
  },
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
              / Ticketing & Dynamic Pricing
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Ticketing & Dynamic Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                Aumenta ingresos y mejora la experiencia de tus clientes con el
                sistema de ticketing y precios dinámicos de Ski Solution 360.
                Venta online, control de accesos y tarifas inteligentes en un
                único sistema.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-t from-primary via-primary to-primary/1">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <p className="text-lg text-muted-foreground mt-6 text-black text-italic">
                "El módulo de Ticketing G Dynamic Pricing de Ski Solution 360 te
                permite vender forfaits y entradas de forma unificada en todos
                los canales —online, taquillas, kioscos y iPOS— y optimizar los
                precios en función de la demanda, la temporada y las
                condiciones. Con un motor de precios dinámicos conectado a tu
                inventario y CRM, podrás maximizar la facturación, evitar
                saturaciones y ofrecer una experiencia fluida a tus clientes."
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-700/5">
          <div className="container-custom">
            {/* How it Works Section <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Cómo funciona el Dynamic Pricing
            </h2>
            <div className="gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Definición de reglas: establece franjas de precios según
                      fecha, tipo de cliente, hora del día o previsión de
                      afluencia.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Precios basados en condiciones meteorológicas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Optimización de ingresos automática
                    </span>
                  </div>
                </div>
               </div> */}

            <div className="animate-stagger-2">
              <div className="relative">
                <div className="">
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up `">
                    Cómo funciona el Dynamic Pricing
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <h3 className="font-medium">Definición de reglas:</h3>
                        <p className="pl-2">
                          Establece franjas de precios según fecha, tipo de
                          cliente, hora del día o previsión de afluencia.
                        </p>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium">
                            Monitorización continua:
                          </h3>
                          <p className="pl-2">
                            El sistema ajusta automáticamente los precios según
                            los datos de ventas y aforo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium">
                            Actualización instantánea:
                          </h3>
                          <p className="pl-2">
                            Cambios reflejados al momento en todos los canales
                            de venta.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium">Reportes de impacto:</h3>
                          <p className="pl-2">
                            Análisis de ventas y rendimiento por segmento de
                            tarifa.
                          </p>
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
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Beneficios clave
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className={`card-hover border-0 w-full shadow-lg bg-background mx-6 animate-stagger-${
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                ¿Quieres maximizar tus ingresos?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                La combinación perfecta para vender más y mejor.
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
