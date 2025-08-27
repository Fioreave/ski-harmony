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
  Snowflake,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Target,
  Heart,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SoftwareGestionJardinesNieve = () => {
  const challenges = [
    "Reservas caóticas por teléfono, email o en papel",
    "Dificultad para gestionar cobros, cancelaciones y grupos",
    "Falta de control sobre la ocupación o la asignación de personal",
    "Poco seguimiento de la experiencia del cliente o historial de uso",
    "Necesidad de un sistema simple, ágil y económico",
  ];

  const modules = [
    {
      name: "Escuela & Clases (versión adaptada)",
      desc: "Para crear grupos por edad, gestionar horarios y asignar personal",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Ticketing básico",
      desc: "Para permitir la reserva y pago online de sesiones",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      name: "CRM ligero",
      desc: "Fichas de clientes con datos básicos, alertas y observaciones (alergias, necesidades especiales, etc.)",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "BI simplificado",
      desc: "Visualización de ocupación y rendimiento diario/semanal",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core modular",
      desc: "Adaptada a pequeña escala, con solo lo necesario",
      icon: <Snowflake className="h-6 w-6" />,
    },
  ];

  const advantages = [
    "Ahorro de tiempo en gestión diaria",
    "Mejora de la atención al cliente y experiencia de los padres",
    "Reducción de errores administrativos",
    "Sin curva de aprendizaje: el sistema es intuitivo y rápido",
    "Precio ajustado, ideal para negocios pequeños o independientes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-900 px-4 py-2">
              Jardines de Nieve
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Jardines de Nieve
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Digitaliza tu jardín de nieve con Ski Solution 360. Control de
              reservas, pagos y grupos desde un sistema simple, económico y
              fácil de usar.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Los jardines de nieve son una pieza clave en muchas estaciones,
              pero suelen trabajar con recursos limitados y procesos muy
              manuales.
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
                Principales desafíos
              </h2>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-0 shadow-xl">
              <CardHeader>
                <div className="bg-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Snowflake className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-900">
                  La solución: digitalización simple y adaptada a tu escala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 ofrece una versión ligera y asequible de su
                  plataforma para jardines de nieve, pensada para resolver los
                  retos operativos sin necesidad de grandes inversiones ni
                  complejidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Caso de éxito
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 border-0 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Snowflake className="h-16 w-16 mx-auto mb-4 text-cyan-200" />
                  <h3 className="text-2xl font-bold mb-4">
                    Jardín de Nieve Montaña Blanca
                  </h3>
                  <p className="text-cyan-100">
                    "Desde que implementamos Ski Solution 360, nuestros padres
                    pueden reservar online y nosotros tenemos control total de
                    los grupos y horarios."
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Resultados obtenidos:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    70%
                  </div>
                  <div className="text-sm text-green-700">
                    Menos tiempo en gestión
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-blue-700">
                    Satisfacción padres
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Módulos recomendados
            </h2>
            <p className="text-lg text-slate-600">
              Solo lo esencial para tu jardín de nieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-cyan-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-cyan-600">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ventajas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
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
            <Card className="text-center border-0 bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardHeader>
                <div className="bg-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-cyan-900">
                  Fácil y rápido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sistema intuitivo que no requiere formación compleja
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-green-900">
                  Precio ajustado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Inversión mínima para negocios pequeños e independientes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-purple-900">
                  Para los pequeños
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Control especial de alergias y necesidades de cada niño
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Tu jardín de nieve necesita orden y agilidad?
          </h2>
          <Button
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3"
          >
            Solicita una demo adaptada
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionJardinesNieve;
