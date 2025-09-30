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
  ShoppingCart,
  BarChart3,
  Settings,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestForm from "@/components/DemoRequestForm";
import { useForms } from "@/hooks/useForms";

const PuntoVentaRestauracion = () => {
  const { showDemoForm, openDemoForm, closeDemoForm } = useForms();

  const benefits = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Punto de venta unificado (POS)",
      features: [
        "Gestiona todos tus bares, restaurantes y tiendas desde un único panel",
        "Interfaz rápida y fácil para ventas en mostrador o autoservicio",
        "Compatible con TPVs, impresoras de tickets y pantallas de cocina (KDS)",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Stock en tiempo real",
      features: [
        "Actualización automática de inventario con cada venta",
        "Control por categoría, ubicación y proveedor",
        "Alertas de stock mínimo y generación de pedidos a proveedores",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Precios y promociones centralizadas",
      features: [
        "Cambia precios y ofertas de forma global o por punto de venta",
        "Configuración de menús, combos y packs especiales",
        "Promociones programadas para fechas y temporadas concretas",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Integración con toda la operación",
      features: [
        "Conexión con el ERP para facturación y contabilidad",
        "Posibilidad de venta cruzada con forfaits, alquiler o actividades",
        "Datos de ventas integrados en el módulo de analítica y CRM",
      ],
    },
  ];

  const steps = [
    "El cliente compra en bar, restaurante o tienda.",
    "El sistema registra la venta y actualiza el inventario.",
    "La gerencia controla ventas, stock y márgenes desde el dashboard central.",
    "Los datos se integran automáticamente con el ERP y el módulo de BI.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}

      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-muted/30"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="pt-20 container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground ">
              Ventas y stock <span className="text-accent">unificados</span>{" "}
              <br /> para tu estación
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto font-medium">
              Gestión de bares, restaurantes y tiendas en estaciones de esquí
            </p>
            {/*<p className="text-lg text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Optimiza la gestión de puntos de venta en restauración y retail
              con el módulo F&B & Retail de Ski Solution 360. Stock en tiempo
              real, integración con ERP y ventas centralizadas.
            </p>
            <Button
              onClick={openDemoForm}
              className="btn-demo text-lg px-8 py-4 shadow-lg hover:shadow-xl"
            >
              Solicita una demo
            </Button>*/}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-card via-card to-accent/5 rounded-2xl border border-accent/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
            <p className="text-xl text-muted-foreground leading-relaxed relative z-10 p-6">
              El módulo{" "}
              <span className="text-accent font-semibold">F&B & Retail</span> de
              Ski Solution 360 integra todos tus puntos de venta de restauración
              y tiendas en un único sistema conectado al ERP. Controla ventas,
              inventario y precios en tiempo real, tanto en bares y restaurantes
              como en tiendas de ropa, accesorios o material deportivo,
              garantizando una operación más ágil y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Beneficios clave
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              ¿Cómo funciona?
            </h2>
            <div className="w-48 h-1 bg-accent mx-auto rounded-full"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
            Simplifica, controla y potencia tus ventas dentro de la estación.
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

export default PuntoVentaRestauracion;
