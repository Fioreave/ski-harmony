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
      desc: "Venta online de entradas individuales o paquetes",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Control de accesos",
      desc: "QR, RFID o códigos de barras para validar en segundos",
      icon: <QrCode className="h-6 w-6" />,
    },
    {
      name: "Escuela & Clases (adaptado)",
      desc: "Gestión de visitas guiadas, talleres y actividades",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "CRM & BI",
      desc: "Recogida de datos, segmentación y comunicación con visitantes",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación global de la operación y análisis de resultados",
      icon: <Building className="h-6 w-6" />,
    },
  ];

  const benefits = [
    "Venta online 24/7 con pago anticipado",
    "Control de aforo en tiempo real",
    "Gestión eficiente de grupos escolares",
    "Análisis detallado del comportamiento de visitantes",
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-lime-100 text-lime-900 px-4 py-2">
              Museos y Centros Culturales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Museos y Centros Culturales
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Gestiona venta de entradas, control de accesos y reservas de
              grupos con Ski Solution 360. Optimiza la experiencia del visitante
              y la operación de tu museo.
            </p>
          </div>

          {/* Museum Types Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {museumTypes.map((type, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-100 text-purple-900 px-4 py-2"
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Retos comunes en museos y centros culturales
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Los museos y centros culturales reciben un público variado,
                gestionan actividades puntuales y grupos organizados, y
                necesitan optimizar tanto la experiencia del visitante como la
                operación interna.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Entre los retos más habituales están:
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-0 shadow-xl">
              <CardHeader>
                <div className="bg-lime-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-lime-900">
                  La solución: Ski Solution 360 para el sector cultural
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 ofrece un sistema integral para digitalizar
                  la venta de entradas, controlar accesos y gestionar reservas
                  de grupos o actividades, todo desde una plataforma central.
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
              Módulos recomendados
            </h2>
            <p className="text-lg text-slate-600">
              Tecnología adaptada al sector cultural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-purple-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-purple-600">
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Beneficios para tu museo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-lime-50 to-lime-100">
              <CardHeader>
                <div className="bg-lime-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
                  Acceso rápido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Entrada sin colas con códigos QR desde el móvil
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-lime-100 to-lime-200">
              <CardHeader>
                <div className="bg-lime-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
                  Grupos escolares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestión especializada de visitas educativas y talleres
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-lime-200 to-lime-300">
              <CardHeader>
                <div className="bg-lime-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
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
      </section>

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
                color: "bg-lime-600",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Visitas guiadas",
                desc: "Reservas por horarios y idiomas",
                color: "bg-lime-700",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Eventos culturales",
                desc: "Conciertos, conferencias y actividades",
                color: "bg-lime-800",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Aforo controlado",
                desc: "Gestión de límites por sala o exposición",
                color: "bg-lime-900",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`${useCase.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Digitaliza tu museo o centro cultural
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Mejora la experiencia de tus visitantes y optimiza tu operación
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            Solicita una demo para tu museo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionMuseo;
