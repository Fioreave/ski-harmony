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
  Building,
  Calendar,
  Users,
  QrCode,
  CheckCircle,
  Target,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SoftwareGestionMuseo = () => {
  const challenges = [
    "Control de aforo y entradas poco automatizado",
    "Procesos de compra y reserva poco atractivos o lentos",
    "Dificultad para gestionar grupos escolares o visitas guiadas",
    "Falta de datos para conocer hábitos de los visitantes",
    "Escasa comunicación post-visita para fidelizar al público",
  ];

  const modules = [
    {
      name: "Ticketing",
      desc: "Venta online de entradas individuales, paquetes o pases especiales.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Control de accesos",
      desc: "Validación rápida con QR, RFID o códigos de barras.",
      icon: <QrCode className="h-6 w-6" />,
    },
    {
      name: "Escuela & Clases",
      desc: "Gestión de visitas guiadas, talleres y actividades educativas.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "CRM & BI",
      desc: "Recogida de datos, segmentación y comunicación personalizada con visitantes.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación global de la operación y análisis de resultados.",
      icon: <Building className="h-6 w-6" />,
    },
  ];

  const benefits = [
    "Venta online 24/7 con pago anticipado",
    "Control de aforo en tiempo real",
    "Gestión eficiente de grupos escolares y talleres",
    "Análisis detallado del comportamiento de los visitantes",
    "Campañas de fidelización personalizadas",
    "Reducción de colas y tiempo de espera",
  ];

  const museumTypes = [
    "Museos de arte",
    "Museos de historia",
    "Museos de ciencia",
    "Centros culturales",
    "Galerías",
    "Fundaciones",
    "Espacios expositivos",
    "Centros de interpretación",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para <br />
              Museos y Centros Culturales
            </h1>
            <h2 className="text-2xl md:text-xl text-slate-900 mb-4">
              Gestiona venta de entradas, control de accesos y reservas desde
              una sola plataforma.
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Optimiza la experiencia del visitante y la operación de tu museo o
              centro cultural. Menos colas, más control y visitantes
              satisfechos.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conocemos los retos de los museos y centros culturales{" "}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Recibir público diverso y gestionar actividades simultáneas
                requiere un sistema ágil y centralizado.
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
                  src="/img/museos.jpg"
                  alt="Museos y Centros Culturales"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tecnología adaptada al sector cultural
            </h2>
            {/*<p className="text-lg text-slate-600">
              Tecnología adaptada al sector cultural
            </p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-purple-100 hover:shadow-lg transition-shadow bg-white"
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

      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                Una plataforma que conecta tu museo con tus visitantes{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Ski Solution 360 digitaliza venta de entradas, controla accesos
                y gestiona reservas de grupos y actividades desde un único
                sistema, adaptado a la operación de tu museo o centro cultural.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--ski-lime-dark))]" />
                    </div>
                    <p className="text-slate-700 font-medium">{benefit}</p>
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
            <Card className="text-center border-0 bg-white shadow-sm">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Acceso rápido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Entrada sin colas con códigos QR desde el móvil
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-sm">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Grupos escolares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestión especializada de visitas educativas y talleres
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-sm">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Experiencia cultural
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Mejora la experiencia del visitante con tecnología intuitiva
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Casos de uso específicos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Exposiciones temporales",
                desc: "Gestión de entradas con fechas limitadas",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Visitas guiadas",
                desc: "Reservas por horarios e idiomas",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Eventos culturales",
                desc: "Conciertos, conferencias y actividades especiales",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Aforo controlado",
                desc: "Límites por sala o exposición para mayor seguridad",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={
                      "bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white"
                    }
                  >
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-[hsl(var(--ski-lime-dark))]">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Digitaliza tu museo o centro cultural
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Ski Solution 360 te ayuda a mejorar la experiencia de tus visitantes
            y optimizar tu operación. Pide una demo y descubre en 20 minutos
            cómo ahorrar tiempo, ganar control y fidelizar a tu público.{" "}
          </p>
          <Button
            size="lg"
            className="bg-black text-primary hover:bg-gray-900 px-8 py-3"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionMuseo;
