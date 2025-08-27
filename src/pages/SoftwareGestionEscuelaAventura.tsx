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
    "Gestión manual de grupos y horarios",
    "Falta de control sobre material y equipamiento",
    "Cobros tardíos o problemas con cancelaciones",
    "Poco seguimiento de clientes para fidelización",
  ];

  const modules = [
    {
      name: "Escuela & Clases",
      desc: "Para organizar grupos, guías y horarios por actividad",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Ticketing",
      desc: "Venta anticipada online de entradas, rutas y experiencias",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Alquiler & Inventario",
      desc: "Control de material como arneses, chalecos, remos, etc.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      name: "CRM & BI",
      desc: "Segmentación de clientes, análisis de ocupación y campañas de fidelización",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "Plataforma Core",
      desc: "Coordinación de todos los procesos desde un único panel",
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-lime-100 text-lime-900 px-4 py-2">
              Aventura / Outdoor
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Actividades de Aventura y Outdoor
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Gestiona reservas, grupos, alquiler y pagos de tus actividades
              outdoor con Ski Solution 360. Ideal para rafting, escalada,
              senderismo, kayak o multiaventura.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {activities.map((activity, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-emerald-100 text-emerald-900 px-4 py-2"
              >
                {activity}
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
                Retos comunes en empresas de actividades outdoor
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Las empresas de aventura operan con alta estacionalidad,
                múltiples actividades y recursos limitados, lo que hace que
                coordinar todo sea un reto.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Entre los desafíos más frecuentes encontramos:
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
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-lime-900">
                  La solución: Ski Solution 360 adaptado a la aventura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Con Ski Solution 360, puedes centralizar la gestión de todas
                  tus actividades en una sola plataforma, desde la reserva
                  online hasta la asignación de guías y el control del
                  inventario de equipo.
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

          <Card className="bg-gradient-to-r from-lime-600 to-lime-700 border-0 text-white">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
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
              Módulos recomendados
            </h2>
            <p className="text-lg text-slate-600">
              Todo lo que necesitas para gestionar tu centro de aventura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-emerald-100 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-emerald-600">
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
            <Card className="text-center border-0 bg-gradient-to-br from-lime-50 to-lime-100">
              <CardHeader>
                <div className="bg-lime-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
                  Multiaventura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gestiona múltiples actividades desde una sola plataforma
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-lime-100 to-lime-200">
              <CardHeader>
                <div className="bg-lime-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
                  Estacional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adaptado a la alta estacionalidad del sector outdoor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-lime-200 to-lime-300">
              <CardHeader>
                <div className="bg-lime-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-lime-900">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para vivir tu temporada más organizada?
          </h2>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
          >
            Solicita una demo para actividades outdoor
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareGestionEscuelaAventura;
