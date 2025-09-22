import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Baby, 
  Bike, 
  Mountain, 
  Waves, 
  Building 
} from "lucide-react";


const Segmentos = () => {
  const { t } = useLanguage();
  
  const segments = [
    {
      title: t('segmentos.large-resorts.title'),
      href: "/software-gestion-ski-resort",
      description: t('segmentos.large-resorts.description'),
      icon: Building2
    },
    {
      title: t('segmentos.medium-resorts.title'),
      href: "/software-gestion-ski-resort-mediano",
      description: t('segmentos.medium-resorts.description'),
      icon: Briefcase
    },
    {
      title: t('segmentos.ski-schools.title'),
      href: "/software-gestion-escuelas-esqui",
      description: t('segmentos.ski-schools.description'),
      icon: GraduationCap
    },
    {
      title: t('segmentos.snow-gardens.title'),
      href: "/software-gestion-jardines-nieve",
      description: t('segmentos.snow-gardens.description'),
      icon: Baby
    },
    {
      title: t('segmentos.bike-parks.title'),
      href: "/software-gestion-bike-parks",
      description: t('segmentos.bike-parks.description'),
      icon: Bike
    },
    {
      title: t('segmentos.outdoor-activities.title'),
      href: "/software-gestion-escuela-aventura",
      description: t('segmentos.outdoor-activities.description'),
      icon: Mountain
    },
    {
      title: t('segmentos.sailing-diving.title'),
      href: "/software-gestion-escuela-vela-buceo",
      description: t('segmentos.sailing-diving.description'),
      icon: Waves
    },
    {
      title: t('segmentos.museums.title'),
      href: "/software-gestion-museo",
      description: t('segmentos.museums.description'),
      icon: Building
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link> / Segmentos
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                  {t('segmentos.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-stagger-1">
                  {t('segmentos.subtitle')}
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/img/mountain-panorama.jpg" 
                  alt="Panorama de montaña" 
                  className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Segments Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => {
                const Icon = segment.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-hover border-0 shadow-lg bg-background group animate-stagger-${Math.min(index + 1, 4)}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        <Link 
                          to={segment.href} 
                          className="hover:text-primary transition-colors"
                        >
                          {segment.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {segment.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('segmentos.not-found.title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('segmentos.not-found.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-demo text-lg px-8 py-3 bg-primary text-primary-foreground hover:scale-105 transition-all duration-200 rounded-md">
                  {t('segmentos.consult-case')}
                </button>
                <button className="text-lg px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md">
                  {t('segmentos.see-modules')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Segmentos;