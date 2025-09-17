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
  Waves,
  Anchor,
  Users,
  Package,
  CheckCircle,
  Target,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SoftwareGestionEscuelasVelaBuceo = () => {
  const challenges = [
    "Reservas desorganizadas entre múltiples canales",
    "Dificultad para asignar instructores y embarcaciones de forma óptima",
    "Falta de control sobre el alquiler y mantenimiento del material",
    "Cobros tardíos o problemas con la gestión de anticipos",
    "Escasa comunicación y seguimiento post-curso con los clientes",
  ];

  const modules = [
    {
      name: "Escuela & Clases",
      desc: "Gestión de cursos, horarios, embarcaciones y monitores",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Alquiler e Inventario",
      desc: "Control de tablas, trajes, equipos de buceo o embarcaciones con mantenimiento preventivo.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      name: "Ticketing",
      desc: "Venta online de experiencias, salidas o paquetes combinados.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "CRM & BI",
      desc: "Seguimiento de alumnos, segmentación y campañas de fidelización",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación centralizada de toda la operación",
      icon: <Waves className="h-6 w-6" />,
    },
  ];

  const advantages = [
    "Gestión diaria y reservas simplificadas.",
    "Asignación eficiente de instructores y embarcaciones.",
    "Control de inventario y mantenimiento preventivo del material.",
    "Mayor conversión con venta anticipada online.",
    "Escalable a múltiples sedes o actividades.",
  ];

  const sports = [
    "Vela",
    "Buceo",
    "Surf",
    "Kitesurf",
    "Paddle Surf",
    "Windsurf",
    "Kayak",
    "Motonáutica",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Escuelas de Vela y Buceo
            </h1>
            <h2 className="text-2xl md:text-xl text-slate-900 mb-4">
              Gestiona reservas, cursos, monitores y alquiler de material desde
              una sola plataforma.{" "}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Centraliza vela, buceo, surf, kitesurf y más. Menos caos, más
              control y una experiencia fluida para tus alumnos.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conocemos los retos de las escuelas náuticas y de buceo{" "}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Coordinar cursos, alquiler de material y experiencias turísticas
                puede ser complicado si no se tiene un sistema centralizado y
                adaptado al entorno acuático.
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

            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Waves className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Una plataforma que organiza tu escuela acuática{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 centraliza toda la operación: reservas
                  online, asignación de instructores y embarcaciones, alquiler
                  de material y análisis de ocupación y ventas. Todo en un solo
                  lugar, modular y adaptable a tu escuela.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Todo lo que necesitas para tu escuela náutica{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-blue-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-lime-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-[hsl(var(--ski-lime-dark))]">
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

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Simplifica tu gestión, optimiza recursos y mejora la experiencia
              de tus alumnos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-primary/5 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Features Highlight 
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Anchor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Embarcaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Control y asignación inteligente de embarcaciones e
                  instructores
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Equipamiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestión completa de material acuático y mantenimiento
                  preventivo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Cursos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestión de cursos por niveles y seguimiento de progreso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Funcionalidades específicas para deportes acuáticos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Waves className="h-8 w-8" />,
                title: "Condiciones marítimas",
                desc: "Integración con meteorología marina",
                color: "bg-lime-600",
              },
              {
                icon: <Anchor className="h-8 w-8" />,
                title: "Títulos náuticos",
                desc: "Control de certificaciones y niveles",
                color: "bg-lime-700",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Mareas y vientos",
                desc: "Planificación según condiciones",
                color: "bg-lime-800",
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Material específico",
                desc: "Trajes, equipos de buceo, embarcaciones",
                color: "bg-lime-900",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Quieres que tu escuela sea más ágil y rentable?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Ski Solution 360 te acompaña para centralizar reservas, cursos y
            alquiler de material. Pide una demo y descubre en 20 minutos cómo
            ganar tiempo, control y satisfacción de tus alumnos.{" "}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary hover:bg-blue-700 text-slate-950 px-8 py-3"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionEscuelasVelaBuceo;
