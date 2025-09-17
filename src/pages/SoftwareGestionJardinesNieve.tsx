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
    "Las reservas se gestionan por teléfono, email o papel y generan confusión.",
    "Cobros, cancelaciones y grupos son difíciles de controlar.",
    "Falta visibilidad sobre la ocupación y la asignación de personal.",
    "Poco seguimiento del historial de cada niño y la experiencia de los padres.",
    "Se necesita un sistema simple, ágil y económico que se adapte a tu escala.",
  ];

  const modules = [
    {
      name: "Escuela & Clases",
      desc: "Crea grupos por edad, gestiona horarios y asigna personal sin complicaciones.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Ticketing básico",
      desc: "Permite reserva y pago online de sesiones de forma sencilla.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      name: "CRM ligero",
      desc: "Fichas de niños con alertas, observaciones y necesidades especiales.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "BI simplificado",
      desc: "Visualización de ocupación y rendimiento diario/semanal.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core modular",
      desc: "Todo lo necesario centralizado y adaptado a pequeña escala.",
      icon: <Snowflake className="h-6 w-6" />,
    },
  ];

  const advantages = [
    "Ahorro de tiempo en la gestión diaria.",
    "Mejora de la atención al cliente y experiencia de los padres.",
    "Reducción de errores administrativos.",
    "Sistema intuitivo, sin curva de aprendizaje.",
    "Precio ajustado, ideal para jardines pequeños o independientes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-[hsl(var(--ski-lime-dark))] bg-primary/10 px-4 py-2">
              Jardines de Nieve
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Jardines de Nieve
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Digitaliza reservas, pagos y grupos desde una sola plataforma.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un sistema simple, económico y fácil de usar que organiza tu
              jardín de nieve. Menos caos, más control y padres felices.
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
                Conocemos los retos habituales en jardines de nieve{" "}
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
                Gestionar grupos de niños, reservas y pagos puede ser un reto
                cuando todo se hace de manera manual o con varios sistemas
                desconectados.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Snowflake className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Una plataforma ligera que organiza tu jardín de nieve{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 ofrece una versión adaptada para jardines de
                  nieve, que digitaliza reservas, grupos y pagos sin
                  complicaciones ni grandes inversiones.
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
            <Card className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Snowflake className="h-16 w-16 mx-auto mb-4 text-lime-200" />
                  <h3 className="text-2xl text-white font-bold mb-4">
                    Así mejoró la gestión del Jardín de Nieve Montaña Blanca{" "}
                  </h3>
                  <p className="text-white font-medium">
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
                <div className="bg-lime-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-2">
                    70%
                  </div>
                  <div className="text-sm text-green-700">
                    Menos tiempo en gestión
                  </div>
                </div>
                <div className="bg-lime-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-lime-700">
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
              Todo lo esencial para tu jardín de nieve{" "}
            </h2>
            {/*<p className="text-lg text-slate-600">
              Solo lo esencial para tu jardín de nieve
            </p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-lime-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-lime-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-lime-600">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-lime-50 to-lime-100 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-lime-600" />
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
            <Card className="text-center border-0 bg-primary/10">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Fácil y rápido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sistema intuitivo que no requiere formación compleja
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-primary/10">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Precio ajustado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Inversión mínima para negocios pequeños e independientes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-primary/10">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
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
          <p className="text-xl text-slate-300 mb-8">
            Organiza tus grupos, reservas y pagos en minutos. Pide una demo y
            descubre en 20 minutos cómo ganar tiempo y control sin
            complicaciones.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary text-white px-8 py-3"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionJardinesNieve;
