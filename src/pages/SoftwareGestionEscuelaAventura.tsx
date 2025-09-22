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
  Mountain,
  Calendar,
  Users,
  Package,
  CheckCircle,
  Target,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SoftwareGestionEscuelaAventura = () => {
  const challenges = [
    "Reservas dispersas entre teléfono, email y redes sociales",
    "Gestión manual de grupos, guias y horarios",
    "Falta de control sobre material y equipamiento",
    "Cobros tardíos o problemas con cancelaciones",
    "Poco seguimiento de clientes para fidelización",
  ];

  const modules = [
    {
      name: "Escuela & Clases",
      desc: "Organiza grupos, guías y horarios por cada actividad.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Ticketing",
      desc: "Venta anticipada online de entradas, rutas y experiencias.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Alquiler & Inventario",
      desc: "Control de material como arneses, chalecos, remos y más.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      name: "CRM & BI",
      desc: "Segmentación de clientes, análisis de ocupación y campañas de fidelización.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación de todos los procesos desde un único panel.",
      icon: <Mountain className="h-6 w-6" />,
    },
  ];

  const advantages = [
    "Centralización de todas las reservas y pagos",
    "Optimización del uso de guías y monitores",
    "Control de material y reducción de pérdidas",
    "Mayor satisfacción del cliente con un proceso simple y online",
    "Escalable a cualquier tipo de actividad o temporada",
  ];

  const activities = [
    "Rafting",
    "Escalada",
    "Senderismo",
    "Kayak",
    "Barranquismo",
    "Tirolinas",
    "Vías ferratas",
    "Multiaventura",
    "Espeleología",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-white sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para <br /> Actividades de Aventura y Outdoor
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-4">
              Gestiona reservas, grupos, alquiler y pagos desde una sola
              plataforma.
            </p>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Centraliza rafting, escalada, senderismo, kayak y más. Menos caos,
              más control y experiencias memorables para tus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Retos comunes en empresas de aventura
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Coordinar múltiples actividades y recursos limitados puede ser
                complicado, sobre todo en temporadas altas o con reservas
                dispersas.
              </p>
              {/*<p className="text-lg text-slate-600 mb-8">
                Entre los desafíos más frecuentes encontramos:
              </p>*/}
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
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
                  src="/img/act-outdoor.jpg"
                  alt="Actividades de Aventura y Outdoor"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Caso de éxito
            </h2>
          </div>

          <Card className="bg-gradient-to-r from-lime-500 to-primary border-0 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="h-8 w-8 text-lime-200 flex-shrink-0" />
                    <blockquote className="text-xl md:text-2xl font-medium">
                      "Antes teníamos actividades de rafting, escalada y
                      senderismo gestionadas por separado. Ahora todo está
                      centralizado y nuestros clientes pueden reservar cualquier
                      actividad desde la misma web."
                    </blockquote>
                  </div>
                  <p className="text-lime-100">
                    Aventura Total - Centro Multiaventura
                  </p>
                </div>
                <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">80%</div>
                    <div className="text-sm text-lime-100">
                      Menos tiempo gestión
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold mb-2">45%</div>
                    <div className="text-sm text-lime-100">
                      Más reservas online
                    </div>
                  </div>
                </div>
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
              Todo lo que necesitas para gestionar tu centro de aventura
            </p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-emerald-100 hover:shadow-lg transition-shadow bg-white"
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[hsl(var(--ski-lime-dark))]">
                Una plataforma que organiza tu centro de aventura{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Ski Solution 360 centraliza todas tus actividades en un solo
                lugar: reservas online, asignación de guías y control de
                inventario de equipo, adaptándose a la estacionalidad de tu
                negocio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Ventajas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-md hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-lime-400" />
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
            <Card className="text-center border-0  bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Multiaventura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestiona múltiples actividades desde una sola plataforma
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0  bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Estacional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adaptado a la alta estacionalidad del sector outdoor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md">
              <CardHeader>
                <div className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[hsl(var(--ski-lime-dark))]">
                  Escalable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Crece con tu negocio añadiendo nuevas actividades
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para vivir tu temporada más organizada?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Centraliza tus actividades, reservas y pagos con Ski Solution 360.
            Pide una demo y descubre en 20 minutos cómo ganar tiempo, control y
            satisfacción de tus clientes.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-br from-[hsl(var(--ski-lime-dark))] to-primary hover:bg-emerald-700 text-black px-8 py-3"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionEscuelaAventura;
