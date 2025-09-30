import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Calendar,
  Users,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { useForms } from "@/hooks/useForms";
import DemoRequestForm from "@/components/DemoRequestForm";

const benefits = [
  {
    icon: Calendar,
    title: "Reservas online multiactividad",
    description: [
      "Compra de clases directamente desde la web o app de la estación.",
      "Integración con taquillas, kioscos de autoservicio e iPOS móviles",
      "Confirmación y ticket digital al momento.",
    ],
  },
  {
    icon: Users,
    title: "Asignación inteligente de monitores",
    description: [
      "Algoritmo que asigna automáticamente instructores según disponibilidad, nivel y tipo de actividad.",
      "Vista de agenda para control de horarios y sustituciones.",
      "Evita sobrecargas y optimiza recursos humanos.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Gestión de grupos y niveles",
    description: [
      "Creación de grupos por edad, nivel o modalidad (esquí, snowboard, e‐bike, etc.).",
      "Control de aforo y ajuste automático de plazas.",
      "Reasignación sencilla de alumnos si cambian las condiciones.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Cobro y facturación integrados",
    description: [
      "Pagos online seguros y registro automático en el ERP/CRM.",
      "Emisión de facturas y gestión de abonos o cancelaciones.",
    ],
  },
];

const SoftwareEscuelaEsqui = () => {
  const { showDemoForm, openDemoForm, closeDemoForm } = useForms();

  return (
    <div className="min-h-screen bg-background">
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Escuela & Clases - <br /> Gestión integral de actividades
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                Organiza y optimiza tu escuela de esquí o actividades outdoor
                con el módulo Escuela G Clases de Ski Solution 360. Reservas
                online, asignación automática de monitores y cobros integrados.
                El módulo Escuela G Clases de Ski Solution 360 te permite
                gestionar toda la oferta formativa de tu estación o centro
                deportivo, desde clases de esquí y snowboard hasta cursos de
                verano como bike parks o vela.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
                Beneficios clave
              </h2>
              <p className="px-5 mb-6">
                Con un sistema unificado podrás recibir reservas online, asignar
                monitores de forma automática, controlar aforos y procesar pagos
                anticipados, todo desde un único panel.
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
                      <CardTitle className="text-xl pb-6 font-semibold">
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
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Cómo funciona
                </h2>
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    El cliente puede reservar forfait + clases en la misma
                    compra. El sistema asigna monitores, genera planning y
                    procesa el cobro.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      El cliente reserva su clase desde cualquier canal de
                      venta.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      El sistema asigna automáticamente un monitor y envía la
                      confirmación.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      La dirección visualiza la ocupación de clases y
                      rendimiento de monitores en tiempo real.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      La dirección visualiza la ocupación de clases y
                      rendimiento de monitores en tiempo real.
                    </span>
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
                          <span className="font-medium">
                            Clases disponibles
                          </span>
                        </div>
                        <span className="text-primary font-bold">15</span>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-medium">
                            Planifica, organiza y gestiona cada actividad como
                            nunca antes.
                          </span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary p-10">
          <div className="max-w-4xl mx-auto text-center p-10">
            <h2 className="text-5xl font-bold text-black mb-6">
              Planifica, organiza y gestiona
            </h2>
            <p className="text-2xl mb-6 text-black/80 mb-4">
              Planifica, organiza y gestiona cada actividad como nunca antes
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-black text-primary hover:bg-gray-900 px-8 py-4 text-lg font-medium"
              onClick={openDemoForm}
            >
              Solicita una demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoftwareEscuelaEsqui;
