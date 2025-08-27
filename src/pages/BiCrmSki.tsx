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
  CheckCircle,
  BarChart3,
  Users,
  Database,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BiCrmSki = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analítica en tiempo real (BI)",
      features: [
        "Paneles interactivos con datos actualizados al minuto",
        "Informes de ventas, aforo, ocupación y rendimiento de cada módulo",
        "Detección de tendencias y picos de demanda para ajustar operaciones",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestión avanzada de clientes (CRM)",
      features: [
        "Fichas completas con historial de compras, alquileres y participación en actividades",
        "Segmentación por comportamiento, tipo de cliente o gasto medio",
        "Herramientas para ventas cruzadas y programas de fidelización",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Integración total con la operación",
      features: [
        "Datos procedentes de ticketing, alquiler, escuela, retail y F&B",
        "Sincronización con Odoo ERP + CRM y otros sistemas líderes",
        "Unificación de la experiencia del cliente en todos los puntos de contacto",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Decisiones basadas en datos",
      features: [
        "Planificación de personal según afluencia real y prevista",
        "Optimización de precios con el motor de dynamic pricing",
        "Análisis de campañas y retorno de inversión (ROI) en marketing",
      ],
    },
  ];

  const steps = [
    "El sistema recopila datos de todos los módulos de Ski Solution 360",
    "Los centraliza en paneles fáciles de interpretar y personalizar",
    "Permite actuar en tiempo real sobre precios, recursos y promociones",
    "Registra interacciones y resultados para optimizar futuras acciones",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-muted/30"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-accent text-accent bg-accent/10 font-semibold px-4 py-2"
            >
              BI & CRM
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Datos que impulsan <span className="text-accent">decisiones</span>{" "}
              y fidelizan clientes
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Toma decisiones basadas en datos y fideliza a tus clientes con el
              módulo BI & CRM de Ski Solution 360. Informes en tiempo real,
              segmentación y campañas personalizadas.
            </p>
            <Button className="btn-demo text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Solicita una demo
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-card via-card to-accent/5 p-10 rounded-2xl border border-accent/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 -translate-x-16"></div>
            <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
              El módulo{" "}
              <span className="text-accent font-semibold">BI & CRM</span> de Ski
              Solution 360 combina el poder de la analítica en tiempo real con
              una gestión avanzada de clientes. Obtén una visión 360º de tu
              operación, identifica patrones de consumo, optimiza la asignación
              de recursos y crea campañas personalizadas que incrementen la
              recurrencia y el gasto medio por cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Beneficios <span className="text-accent">clave</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="h-full group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Cómo <span className="text-accent">funciona</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40 relative"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-foreground via-foreground to-foreground/95 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            <span className="text-accent">Convierte datos</span> en decisiones
          </h2>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Solicita una demo
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BiCrmSki;
