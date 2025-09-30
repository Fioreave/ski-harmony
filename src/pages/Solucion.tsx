import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Settings,
  TrendingUp,
  Shield,
  GraduationCap,
  Package,
  ShoppingCart,
  BarChart3,
  CheckCircle,
  Calendar,
} from "lucide-react";

const Solucion = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Settings,
      title: t("solucion.benefits.centralized.title"),
      description: t("solucion.benefits.centralized.description"),
    },
    {
      icon: TrendingUp,
      title: t("solucion.benefits.revenue.title"),
      description: t("solucion.benefits.revenue.description"),
    },
    {
      icon: Shield,
      title: t("solucion.benefits.experience.title"),
      description: t("solucion.benefits.experience.description"),
    },
    {
      icon: BarChart3,
      title: t("solucion.benefits.data.title"),
      description: t("solucion.benefits.data.description"),
    },
    {
      icon: Calendar,
      title: t("solucion.benefits.year-round.title"),
      description: t("solucion.benefits.year-round.description"),
    },
  ];

  const modules = [
    {
      title: t("solucion.modules.core.title"),
      href: "/ski-solution-360",
      description: t("solucion.modules.core.description"),
      icon: Settings,
    },
    {
      title: t("solucion.modules.ticketing.title"),
      href: "/precio-dinamico-forfaits",
      description: t("solucion.modules.ticketing.description"),
      icon: TrendingUp,
    },
    {
      title: t("solucion.modules.school.title"),
      href: "/software-escuela-esqui",
      description: t("solucion.modules.school.description"),
      icon: GraduationCap,
    },
    {
      title: t("solucion.modules.rental.title"),
      href: "/gestion-alquiler-equipo",
      description: t("solucion.modules.rental.description"),
      icon: Package,
    },
    {
      title: t("solucion.modules.pos.title"),
      href: "/punto-venta-restauracion",
      description: t("solucion.modules.pos.description"),
      icon: ShoppingCart,
    },
    {
      title: t("solucion.modules.bi-crm.title"),
      href: "/bi-crm-ski",
      description: t("solucion.modules.bi-crm.description"),
      icon: BarChart3,
    },
  ];

  {
    /*{
      title: t("solucion.modules.access-control.title"),
      href: "/control-accesos-rfid",
      description: t("solucion.modules.access-control.description"),
      icon: Shield,
    },*/
  }
  return (
    <div className="bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          {/* Background gradient */}
          <div className="absolute z-index bg-gradient-to-br from-accent/20 via-background to-muted/30"></div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                {t("solucion.title")}
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground space-y-4 animate-stagger-1">
                <p>{t("solucion.description.2")}</p>
                <p>{t("solucion.description.1")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Mejora la gestión de tu estación
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className={`card-hover border-0 shadow-lg bg-card bg-background animate-stagger-${
                      index + 1
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-primary via-primary to-primary/30">
          <div className="container-custom text-center">
            <div className="max-w-xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {t("solucion.cta.title")}
              </h3>
              <p className="text-2xl text-black-foreground ">
                {t("solucion.cta.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="section-spacing">
          <div className="container-custom" id="core">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Plataforma Core
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card
                    key={index}
                    className={`card-hover border-0 shadow-lg bg-background group bg-card animate-stagger-${Math.min(
                      index + 1,
                      4
                    )}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Link
                          to={module.href}
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          {t("modules.sabermas-cta")}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solucion;
