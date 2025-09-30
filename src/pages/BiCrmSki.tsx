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
import { useLanguage } from "@/contexts/LanguageContext";
import DemoRequestForm from "@/components/DemoRequestForm";
import { useForms } from "@/hooks/useForms";

const BiCrmSki = () => {
  const { showDemoForm, openDemoForm, closeDemoForm } = useForms();

  const { t } = useLanguage();
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
    <div className="min-h-screen  bg-background">
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}

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
            <h1 className="text-5xl whitespace-pre-line mt-20 md:text-5xl font-bold mb-8 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {t("bicrm.hero.title")}
            </h1>
            <p className="text-lg whitespace-pre-line text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              {t("bicrm.hero.description")}
            </p>
            <Button
              className="btn-demo text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              onClick={openDemoForm}
            >
              {t("common.request-demo")}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary p-10">
        <div className="max-w-4xl mx-auto text-center p-10">
          <h2 className="text-5xl font-bold text-black mb-6">
            Convierte datos en decisiones{" "}
          </h2>
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

export default BiCrmSki;
