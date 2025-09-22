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
  Bike,
  Calendar,
  Users,
  BarChart3,
  CheckCircle,
  Sun,
  Quote,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SoftwareGestionBikeParks = () => {
  const challenges = [
    "Control de accesos usando remontes de invierno sin generar colas.",
    "Gestión del alquiler de bicicletas, cascos y protecciones con alta rotación.",
    "Reserva y cobro de clases o clinics de MTB de forma sencilla.",
    "Evitar saturaciones en los momentos punta.",
    "Falta de visibilidad sobre el uso de pistas y afluencia diaria",
  ];

  const modules = [
    {
      name: "Ticketing & Dynamic Pricing",
      desc: "Venta online de bike passes por día, medio día o packs, con precios flexibles.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Control de accesos RFID/QR",
      desc: "Usa los mismos tornos de invierno para entradas rápidas y sin colas.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      name: "Alquiler & Inventario",
      desc: "Gestiona bicicletas, tallas, cascos y protecciones con trazabilidad completa.",
      icon: <Bike className="h-6 w-6" />,
    },
    {
      name: "Escuela & Clases",
      desc: "Reservas online de clinics, rutas guiadas o formación técnica.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "BI & CRM",
      desc: "Datos de afluencia, segmentación y comunicación con clientes",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación central de todas las áreas desde un único panel.",
      icon: <Sun className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mt-20 font-bold text-slate-900 mb-6">
              Software de Gestión para Bike Parks
            </h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto mb-2">
              Accesos, alquiler y actividades desde una sola plataforma.
            </p>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
              Optimiza ventas, control de aforo y operaciones en verano. <br />{" "}
              Menos colas, más ingresos y todo bajo control.
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
                Conocemos los retos de los bike parks{" "}
              </h2>
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
                  src="/img/bike-park.jpg"
                  alt="Clase de esquí para niños con monitor"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                  loading="lazy"
                  width="600"
                  height="420"
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
              Todo lo que necesitas, en un solo lugar{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-orange-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-[hsl(var(--ski-lime-dark))]">
                    {module.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate">
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

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Caso de éxito
            </h2>
          </div>

          <Card
            className="bg-gradient-to-l 
from-[hsl(var(--primary)/3)] 
via-[hsl(var(--ski-lime-dark)/3)] 
to-[hsl(var(--ski-lime-dark)/3)]
             border-0 text-white"
          >
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="h-8 w-8 text-white flex-shrink-0" />
                    <blockquote className="text-xl md:text-2xl text-white font-bold">
                      "Convertimos nuestra estación en un bike park rentable.
                      Los mismos accesos de invierno ahora controlan las
                      bicicletas, y el alquiler funciona perfectamente con el
                      sistema integrado."
                    </blockquote>
                  </div>
                  <p className="text-white font-medium">
                    Bike Park Montaña Verde
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl text-white font-bold mb-2">
                      300%
                    </div>
                    <div className="text-sm text-white">
                      Aumento ingresos verano
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold mb-2 text-white">
                      60%
                    </div>
                    <div className="text-sm text-white">
                      Menos tiempo gestión
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados que puedes esperar{" "}
            </h2>
            <p className="text-lg text-slate-600">
              Más ingresos, menos gestión y operaciones más fluidas durante toda
              la temporada estival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Bike className="h-8 w-8" />,
                title: "Reutilización",
                desc: "Aprovecha infraestructura existente",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Ingresos extra",
                desc: "Facturación en temporada baja",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Control total",
                desc: "Gestión integrada de todos los servicios",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Analítica completa",
                desc: "Analítica para tomar decisiones rápidas",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 text-[hsl(var(--ski-lime-dark))]`}
                  >
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                Una plataforma que convierte tu estación en bike park{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Ski Solution 360 adapta tus módulos de invierno para el verano,
                centralizando accesos, alquiler, reservas y análisis para
                maximizar recursos y facturación estival.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Temporada completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Extiende tu temporada y maximiza la rentabilidad anual
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Fácil transición
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Cambio fluido de esquí a bike park sin complicaciones
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-[hsl(var(--ski-lime-dark))] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Control integrado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Una sola plataforma para gestionar ambas temporadas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            ¿Quieres que tu estación siga generando ingresos todo el año?{" "}
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Ski Solution 360 hace que tu verano sea tan rentable como el
            invierno. Pide una demo y descubre en 20 minutos cómo mejorar
            control, ventas y experiencia de tus clientes.
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

export default SoftwareGestionBikeParks;
