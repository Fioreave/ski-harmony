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
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import mountainPanorama from "/img/mountain-panorama.jpg";

const BRAND = "#BFFF00"; // lima
const BRAND_HOVER = "#A6E600"; // lima más oscuro para hover/accesibilidad

const SoftwareGestionSkiResortMediano = () => {
  const challenges = [
    "El personal debe atender varias tareas a la vez y cuesta mantener todo coordinado.",
    "Modernizar sin grandes compras de hardware puede ser un reto.",
    "En días de mucha afluencia, las taquillas se saturan con facilidad.",
    "Se pierden ventas por no anticipar compras ni ajustar precios a la demanda.",
    "Falta una visión global y en tiempo real para decidir con rapidez.",
  ];

  const modules = [
    {
      name: "Plataforma central",
      desc: "Gestión de todas las áreas desde un único panel.",
    },
    {
      name: "Venta en línea y precios dinámicos",
      desc: "Vende con antelación y ajusta precios según la demanda.",
    },
    {
      name: "Control de accesos",
      desc: "Validaciones rápidas (QR, tarjetas o RFID) sin obras complejas.",
    },
    {
      name: "Alquiler e Inventario",
      desc: "Material localizado, stock controlado y menos esperas.",
    },
    {
      name: "Escuela y Clases",
      desc: "Reservas, asignación de monitores y cobro por adelantado.",
    },
    {
      name: "Análisis y clientes",
      desc: "Visión en tiempo real y comunicación segmentada con tus visitantes.",
    },
  ];

  const advantages = [
    "Mejor atención al visitante sin sobredimensionar el sistema.",
    "Mejor experiencia del cliente con menos colas.",
    "Menos carga operativa en taquillas, escuela y alquiler.",
    "Más facturación anticipada y menos cuellos de botella.",
    "Escalable por módulos según vaya creciendo la estación.",
    "Ahorro real al reutilizar equipos y evitar sistemas complejos.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50/40">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl pt-6 md:text-5xl font-bold text-slate-900 mb-4">
              Software de Gestión para Resorts de Esquí
            </h1>
            <h2 className="text-2xl md:text-xl text-slate-900 mb-4">
              Gestión profesional para Estaciones de esquí, sin complicaciones
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Moderniza tu estación con inversión ajustada y sin cambiar lo que
              ya funciona. Conecta venta, accesos, alquiler, escuela y análisis
              en una sola plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* Mountain View Section */}
      <section className=" bg-white">
        <div className="w-full mx-auto">
          <div className="relative overflow-hidden mb-16">
            <img
              src={mountainPanorama}
              alt="Vista panorámica de montañas nevadas - Resort mediano"
              className="w-full h-64 object-cover"
            />
            <div className=" absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
              <div className="container text-center max-w-6xl text-white p-8">
                <h2 className="text-5xl font-bold mb-4">
                  Para resorts que buscan crecer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Entendemos los retos de tu estación{" "}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Cuando el equipo es reducido y hay que cubrir varias áreas,
                aparecen algunos retos:{" "}
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-primary"></div>
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-lime-150 to-emerald-50 border border-lime-100 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  Un sistema completo, adaptable y a tu medida{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 digitaliza tu operación con módulos que
                  puedes activar poco a poco. Aprovecha el hardware que ya
                  tienes y añade funciones cuando lo necesites.
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
              Activa solo lo que necesitas (y escala cuando quieras){" "}
            </h2>
            {/*<p className="text-lg text-slate-600">
              Implementa solo lo que necesitas, escala cuando quieras
            </p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border border-lime-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-lime-50/30"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-lime-50">
                    <CheckCircle className="h-6 w-6 text-primary" />
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
              Ventajas para tu estación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-lime to-emerald hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-slate-700 font-medium">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Lo que notarás en el día a día:{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aumenta ingresos */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  Más ingresos{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ventas anticipadas y precios ajustados a la demanda.
                </p>
              </CardContent>
            </Card>

            {/* Ahorra tiempo */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  Menos tiempo perdido{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Procesos automatizados y equipo enfocado en lo importante.{" "}
                </p>
              </CardContent>
            </Card>

            {/* Decisiones precisas */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  Decisiones con fundamento{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Datos en tiempo real para optimizar recursos y operaciones.{" "}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary p-10">
        <div className="max-w-4xl mx-auto text-center p-10">
          <h2 className="text-3xl font-bold text-black mb-6">
            ¿Lo vemos con tu caso?{" "}
          </h2>
          <p className="text-xl text-black/80 mb-4">
            Te preparamos una demostración adaptada a tu estación para que
            valores el impacto antes de decidir.
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

export default SoftwareGestionSkiResortMediano;
