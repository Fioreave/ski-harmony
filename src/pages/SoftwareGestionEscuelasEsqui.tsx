import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import escuelaSki from "@/assets/img/escuela-ski.jpg";
import { useForms } from "@/hooks/useForms";
import DemoRequestForm from "@/components/DemoRequestForm";

const SoftwareGestionEscuelasEsqui = () => {
  const { showDemoForm, openDemoForm, closeDemoForm } = useForms();

  const challenges = [
    "Las reservas, asignaciones y horarios no siempre están coordinados.",
    "Cobros por adelantado y cancelaciones pueden ser complicados de gestionar.",
    "No siempre se sabe qué monitor tiene qué grupo.",
    "Es difícil controlar nivel, edad o necesidades especiales de cada alumno.",
    "Los clientes a veces no encuentran un camino fácil para reservar.",
  ];

  const modules = [
    {
      name: "Escuela & Clases",
      desc: "Agenda, asignaciones y reservas online para que cada clase esté bajo control.",
      icon: (
        <GraduationCap className="h-6 w-6 text-[hsl(var(--ski-lime-dark))]" />
      ),
    },
    {
      name: "Ticketing",
      desc: "Integra forfaits combinados si tu escuela forma parte de un resort.",
      icon: <CreditCard className="h-6 w-6 text-[hsl(var(--ski-lime-dark))]" />,
    },
    {
      name: "Alquiler & Inventario",
      desc: "Gestiona material y equipo sin problemas de stock ni pérdidas.",
      icon: <Users className="h-6 w-6 text-[hsl(var(--ski-lime-dark))]" />,
    },
    {
      name: "CRM & BI",
      desc: "Sigue a tus alumnos, historial de clases y estadísticas por curso.",
      icon: <Calendar className="h-6 w-6 text-[hsl(var(--ski-lime-dark))]" />,
    },
    {
      name: "Plataforma Core",
      desc: "Centraliza todo y escala con tu escuela con el tiempo.",
      icon: <Star className="h-6 w-6 text-[hsl(var(--ski-lime-dark))]" />,
    },
  ];

  const advantages = [
    "Automatiza reservas y reduce llamadas, errores y duplicidades.",
    "Asigna monitores por disponibilidad, nivel y grupo automáticamente.",
    "Facilita el pago online y adelanta cobros sin complicaciones.",
    "Visualiza en tiempo real la ocupación, ingresos y grupos activos.",
    "Escalable: ideal para escuelas independientes o como módulo dentro de estaciónes grandes.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}

      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-20">
              Gestiona reservas, clases, monitores y pagos desde una sola
              plataforma{" "}
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Digitaliza reservas, asignaciones, pagos y comunicación con
              alumnos en un único sistema. Menos errores, más control y una
              experiencia más fluida para tus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conocemos los retos habituales en las escuelas de esquí{" "}
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
                Sabemos que manejar cientos de alumnos y coordinar monitores
                puede ser un caos cuando se usan varios sistemas o procesos
                manuales.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--ski-lime-dark))] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-0 shadow-xl">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Una plataforma que organiza tu escuela{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 centraliza reservas, asignaciones, pagos y
                  seguimiento de alumnos. Funciona con tu sistema actual y se
                  adapta al tamaño de tu escuela
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna de texto */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conocemos los retos habituales en las escuelas de esquí{" "}
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
                Sabemos que manejar cientos de alumnos y coordinar monitores
                puede ser un caos cuando se usan varios sistemas o procesos
                manuales.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--ski-lime-dark))] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna imagen + card */}
            <div className="space-y-6">
              {/* Imagen (cámbiala por la que prefieras) */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <img
                  src={escuelaSki}
                  alt="Clase de esquí para niños con monitor"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--ski-lime-dark))] mb-4">
              Caso de éxito
            </h2>
          </div>

          <Card
            className="bg-gradient-to-l
             from-[hsl(var(--primary))]
             via-[hsl(var(--ski-lime-dark))]
             to-[hsl(var(--ski-lime-dark))]
             border-0 text-white"
          >
            <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
              <p className="text-gray font-medium">
                Así transformamos la Escuela de Esquí Valle Blanco{" "}
              </p>
            </CardTitle>{" "}
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-8 w-8 text-white flex-shrink-0" />
                <blockquote className="text-xl md:text-2xl font-medium">
                  "Antes llevábamos las reservas por WhatsApp y papel. Ahora
                  todo entra por la web, los pagos se hacen antes de subir a
                  pistas, y los monitores reciben sus grupos directamente en la
                  app."
                </blockquote>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-gray font-medium">
                  Escuela de Esquí Valle Blanco
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Todo lo que necesitas, en un solo lugar{" "}
            </h2>
            {/*<p className="text-lg text-slate-600">
              Todo lo que necesitas para gestionar tu escuela de esquí
            </p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-green-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-green-600">
                    {module.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {module.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {" "}
          <Card className="bg-primary/5 border-0 shadow-xl">
            <CardHeader>
              <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                Una plataforma que organiza tu escuela{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Ski Solution 360 centraliza reservas, asignaciones, pagos y
                seguimiento de alumnos. Funciona con tu sistema actual y se
                adapta al tamaño de tu escuela
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar{" "}
            </h2>
            <p className="text-lg text-slate-600">
              Mejora la experiencia de tus alumnos y simplifica la gestión
              diaria de tu escuela.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-green-50 to-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--ski-lime-dark))]" />
                    </div>
                    <p className="text-slate-700 font-medium">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md ">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))]  w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Gestión automática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Asignación inteligente de monitores según disponibilidad y
                  nivel
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Pagos anticipados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Cobra online antes de las clases y evita problemas de
                  tesorería
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Control total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Visibilidad completa de grupos, horarios y ocupación en tiempo
                  real
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary p-10">
        <div className="max-w-4xl mx-auto text-center p-10">
          <h2 className="text-4xl md:text-4xl font-bold mb-8 text-black">
            ¿Listos para dar clase sin perder el control?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Tu escuela organizada, conectada y lista para crecer. Pide una demo
            y descubre en 20 minutos cómo simplificar la gestión y mejorar la
            experiencia de tus alumnos.{" "}
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
      <Footer />
    </div>
  );
};

export default SoftwareGestionEscuelasEsqui;
