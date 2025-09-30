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
import DemoRequestForm from "@/components/DemoRequestForm";
import { useForms } from "@/hooks/useForms";

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
  const { showDemoForm, openDemoForm, closeDemoForm } = useForms();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-20">
              Software de Gestión para <br /> Grandes Resorts de Esquí
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
              Casos de éxito reales
            </h2>
            <h3 className="text-xl text-slate-900 mt-4">
              Descubre cómo nuestros clientes han transformado sus operaciones:
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 - Resort */}
            <div className="bg-gradient-to-l from-[hsl(var(--primary))] via-[hsl(var(--ski-lime-dark))] to-[hsl(var(--ski-lime-dark))] border-0 text-white rounded-2xl p-8">
              <blockquote className="text-lg font-medium mb-4">
                "Para un resort del tamaño de Grandvalira RESORTS, necesitábamos
                una solución robusta y escalable. Ski Solution 360 se ha
                adaptado perfectamente a nuestras necesidades y al volumen de
                visitantes que recibimos cada temporada."
              </blockquote>
              <p className="text-white/80 text-sm">- Resort de gran tamaño</p>
            </div>

            {/* Testimonial 2 - Candanchú */}
            <div className="bg-gradient-to-l from-[hsl(var(--primary))] via-[hsl(var(--ski-lime-dark))] to-[hsl(var(--ski-lime-dark))] border-0 text-white rounded-2xl p-8">
              <blockquote className="text-lg font-medium mb-4">
                "Nos sorprendió la facilidad de personalizar el sistema a
                nuestras particularidades. Candanchú tiene características
                únicas y Ski Solution 360 se adaptó perfectamente, sin necesidad
                de procesos largos ni complicados."
              </blockquote>
              <p className="text-white/80 text-sm">- Candanchú</p>
            </div>

            {/* Testimonial 3 - Escuela de Esquí */}
            <div className="bg-gradient-to-l from-[hsl(var(--primary))] via-[hsl(var(--ski-lime-dark))] to-[hsl(var(--ski-lime-dark))] border-0 text-white rounded-2xl p-8">
              <blockquote className="text-lg font-medium mb-4">
                "Para una escuela de esquí, contar con una herramienta digital
                como Ski Solution 360 nos ha ayudado a dar un salto de calidad.
                La imagen de profesionalidad que transmitimos es mucho más
                sólida y moderna."
              </blockquote>
              <p className="text-white/80 text-sm">- Escuela Formigal</p>
            </div>

            {/* Testimonial 4 - Lago Hermoso */}
            <div className="bg-gradient-to-l from-[hsl(var(--primary))] via-[hsl(var(--ski-lime-dark))] to-[hsl(var(--ski-lime-dark))] border-0 text-white rounded-2xl p-8">
              <blockquote className="text-lg font-medium mb-4">
                "En Lago Hermoso estamos en plena fase de expansión y
                necesitábamos una herramienta que nos acompañara en ese
                crecimiento. Con Ski Solution 360 tenemos un sistema que
                gestiona tanto entradas como reservas de actividades, todo en
                una sola plataforma."
              </blockquote>
              <p className="text-white/80 text-sm">- Lago Hermoso</p>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary p-10">
        <div className="max-w-4xl mx-auto text-center p-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
            ¿Lo vemos funcionando?{" "}
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Te preparamos una demostración con tus necesidades. <br />
            Verás en 20 minutos cómo reducir colas y ganar visibilidad.
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

export default SoftwareGestionSkiResort;
