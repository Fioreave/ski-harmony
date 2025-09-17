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
  Building2,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SoftwareGestionSkiResort = () => {
  const challenges = [
    "Sistemas que no siempre están conectados entre venta, accesos, alquiler y escuela.",
    "Colas puntuales en taquillas y pocas opciones de autoservicio en horas de mayor afluencia.",
    "Anticipar picos de visitantes y ajustar precios a tiempo no siempre resulta sencillo.",
    "Los turnos y recursos pueden planificarse mejor según la demanda real.",
    "No siempre se dispone de una visión en tiempo real de lo que ocurre en pista, tienda o escuela.",
  ];

  const results = [
    "Reducción de colas y mejora de la experiencia de cliente",
    "Aumento de ingresos por pricing dinámico y ventas cruzadas",
    "Optimización de personal según demanda real",
    "Unificación de sistemas y reducción de errores administrativos",
    "Datos fiables para tomar decisiones rápidas y con impacto",
    "Todo medido en tiempo real para decidir con rapidez",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Grandes Resorts de Esquí
            </h1>
            <h2 className="text-2xl font-medium text-slate-900 mt-4">
              Gestiona todo tu resort desde una sola plataforma
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Digitaliza venta, accesos, alquiler, escuela, restauración y
              análisis en un único sistema. Menos colas, más ingresos y
              visibilidad en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conocemos los retos habituales en los grandes resorts{" "}
              </h2>
              <p>
                Es normal que aparezcan cuando la actividad crece y hay muchos
                sistemas en juego.
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

            <Card className="bg-gradient-to-br from-primary/5 to-indigo-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary/70">
                  Una sola plataforma para toda la operación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">
                  Ski Solution 360 conecta cada área del resort en un mismo
                  lugar. Funciona con tu sistema actual y puede integrarse con
                  el software que ya usas.
                </p>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow" />
                  <span className="font-semibold text-slate-900">
                    Todo 100% conectado
                  </span>
                </div>
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
              Descubre el caso de éxito Granvalira{" "}
            </h2>
            <h3 className="text-xl text-slate-900 mt-4">
              Así cambió su día a día tras implantar Ski Solution 360:
            </h3>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <blockquote className="text-xl text-black md:text-2xl font-medium mb-6">
                  "Desde que integramos Ski Solution 360, reducimos un 40% el
                  tiempo medio en taquillas y aumentamos un 25% la venta
                  anticipada online. Ahora tenemos visibilidad total de cada
                  área del resort en tiempo real."
                </blockquote>
                <p className="text-gray-600">
                  Resultado directo de aplicar Ski Solution 360
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl text-black font-bold mb-2">40%</div>
                  <div className="text-sm text-gray-600">
                    Reducción tiempo taquillas
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-4xl text-black font-bold mb-2">25%</div>
                  <div className="text-sm text-gray-600">
                    Aumento venta online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar{" "}
            </h2>
            <p className="text-lg text-slate-600">
              Un impacto directo en la experiencia del visitante y en la
              rentabilidad de tu resort.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Todo lo que necesitas, en un solo lugar{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart3 className="text-primary h-8 w-8" />,
                title: "Venta online y precios dinámicos",
                desc: "Vende con antelación y ajusta precios según la demanda.",
              },
              {
                icon: <Users className="text-primary h-8 w-8" />,
                title: "Control de Accesos",
                desc: "Gestiona remontes y validaciones sin colas.",
              },
              {
                icon: <Building2 className="text-primary h-8 w-8" />,
                title: "Alquiler e inventario",
                desc: "Material localizado y trazable, siempre disponible.",
              },
              {
                icon: <TrendingUp className="text-primary h-8 w-8" />,
                title: "Análisis y Clientes",
                desc: "Entiende a tus visitantes y mejora la relación con ellos.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-md hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/15 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-slate-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Lo vemos funcionando?{" "}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Te preparamos una demostración con tus necesidades. Verás en 20
            minutos cómo reducir colas y ganar visibilidad.
          </p>
          <Button
            size="lg"
            className="bg-primary rounded-lg hover:bg-none  hover:border-primary text-black px-8 py-3"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionSkiResort;
