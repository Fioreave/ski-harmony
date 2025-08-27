import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShoppingCart,
  Shield,
  Bike,
  GraduationCap,
  Utensils,
  BarChart3,
} from "lucide-react";

const ModulesSection = () => {
  const modules = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Venta online y precios dinámicos",
      description:
        "Sistema de reservas y venta anticipada con motor de pricing inteligente que optimiza ingresos según demanda y ocupación.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Control de accesos",
      description:
        "Gestión completa de forfaits, pases de temporada y control de accesos en tiempo real con integración a tornos y barreras.",
    },
    {
      icon: <Bike className="h-8 w-8 text-primary" />,
      title: "Alquiler de material",
      description:
        "Gestión integral del alquiler de esquís, tablas, botas y equipamiento con trazabilidad completa y mantenimiento predictivo.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Escuela y actividades",
      description:
        "Reserva de clases, gestión de instructores, planificación de actividades y seguimiento del progreso de alumnos.",
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Restauración y tiendas (F&B + Retail)",
      description:
        "TPV integrado, gestión de stock, cartas digitales y análisis de consumo para maximizar ingresos en servicios complementarios.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "CRM y analítica en tiempo real",
      description:
        "Dashboard ejecutivo con KPIs en vivo, segmentación de clientes y herramientas de marketing automatizado.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Módulos principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solución modular completa para cada área de tu estación de esquí
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {module.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center text-card-foreground">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
