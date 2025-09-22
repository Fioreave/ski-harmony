import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Shield,
  Bike,
  GraduationCap,
  Utensils,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const ModulesSection = () => {
  const { t } = useLanguage();
  
  const modules = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: t('homepage.ticketing.title'),
      description: t('homepage.ticketing.description'),
      href: '/precio-dinamico-forfaits',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('homepage.access.title'),
      description: t('homepage.access.description'),
      href: '/control-accesos-rfid',
    },
    {
      icon: <Bike className="h-8 w-8 text-primary" />,
      title: t('homepage.rental.title'),
      description: t('homepage.rental.description'),
      href: '/gestion-alquiler-equipo',
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: t('homepage.school.title'),
      description: t('homepage.school.description'),
      href: '/software-escuela-esqui',
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t('homepage.restaurant.title'),
      description: t('homepage.restaurant.description'),
      href: '/punto-venta-restauracion',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('homepage.crm.title'),
      description: t('homepage.crm.description'),
      href: '/bi-crm-ski',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('modules.section.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('modules.section.subtitle')}
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
                <p className="text-muted-foreground text-center mb-6">
                  {module.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Link 
                    to={module.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Ver más
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
