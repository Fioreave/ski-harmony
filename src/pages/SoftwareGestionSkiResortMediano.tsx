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

const BRAND = "#BFFF00"; // lima
const BRAND_HOVER = "#A6E600"; // lima más oscuro para hover/accesibilidad

const SoftwareGestionSkiResortMediano = () => {
  const challenges = [
    "Limitaciones de personal para gestionar múltiples áreas a la vez",
    "Necesidad de modernizar sin grandes inversiones en hardware o sistemas",
    "Picos de afluencia mal gestionados que saturan las taquillas",
    "Pérdida de ingresos por no vender anticipadamente ni aplicar precios dinámicos",
    "Falta de visibilidad global para tomar decisiones rápidas y eficaces",
  ];

  const modules = [
    { name: "Plataforma Core", desc: "Gestión central desde un solo panel" },
    {
      name: "Ticketing & Dynamic Pricing",
      desc: "Venta online con tarifas ajustables según demanda",
    },
    {
      name: "Control de accesos",
      desc: "QR, tarjetas o RFID sin colas ni instalaciones complejas",
    },
    {
      name: "Alquiler & Inventario",
      desc: "Gestión simplificada del material con control de stock",
    },
    {
      name: "Escuela & Clases",
      desc: "Reservas, asignación de monitores y cobros anticipados",
    },
    {
      name: "BI & CRM",
      desc: "Visibilidad en tiempo real y segmentación de clientes",
    },
  ];

  const advantages = [
    "Mejora la experiencia del cliente sin sobredimensionar el sistema",
    "Reduce la carga operativa del equipo en taquillas, escuela y alquiler",
    "Aumenta la facturación anticipada y reduce los cuellos de botella",
    "Escalable por módulos según evolución de la estación",
    "Ahorro real al reutilizar hardware y evitar sistemas sobrediseñados",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50/40">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-lime-100 text-lime-900 px-4 py-2 border border-lime-200">
              Resorts Medianos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Software de Gestión para Resorts de Esquí Medianos
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Los centros de esquí medianos enfrentan retos específicos: tienen
              que ofrecer una experiencia moderna y profesional, pero sin los
              recursos de los grandes resorts.
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
                Desafíos típicos
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Algunos desafíos típicos incluyen:
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
                  La solución: un sistema completo, adaptable y sin excesos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Ski Solution 360 permite a estaciones medianas digitalizar sus
                  operaciones con una inversión ajustada y sin necesidad de
                  reemplazar su infraestructura. Gracias a su enfoque modular,
                  puedes implementar lo que necesitas ahora y escalar más
                  adelante.
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
              Implementa solo lo que necesitas, escala cuando quieras
            </p>
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
              Ventajas para estaciones medianas
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
              Impacto en tu operación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aumenta ingresos */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-emerald-900">
                  Aumenta ingresos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Venta anticipada y pricing dinámico para maximizar la
                  facturación
                </p>
              </CardContent>
            </Card>

            {/* Ahorra tiempo */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-emerald-900">
                  Ahorra tiempo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Automatiza procesos y reduce la carga operativa diaria
                </p>
              </CardContent>
            </Card>

            {/* Decisiones precisas */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-emerald-900">
                  Decisiones precisas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Datos en tiempo real para optimizar recursos y operaciones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 p-10">
        <div className="max-w-4xl mx-auto text-center p-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Estás preparado para dar el salto?
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Ski Solution 360 – La solución profesional que se adapta a
            estaciones como la tuya
          </p>
          <Button
            size="lg"
            className="text-slate-900 font-semibold px-8 py-3 border border-lime-300 hover:border-lime-400"
            style={{ backgroundColor: BRAND }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                BRAND_HOVER)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                BRAND)
            }
          >
            Solicita una demo adaptada a tu estación
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareGestionSkiResortMediano;
