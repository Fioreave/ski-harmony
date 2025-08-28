import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users2,
  Target,
  Lightbulb,
  Zap,
  Heart,
  TrendingUp,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Empresa = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('empresa.values.specialization.title'),
      description: t('empresa.values.specialization.description'),
    },
    {
      icon: Lightbulb,
      title: t('empresa.values.innovation.title'),
      description: t('empresa.values.innovation.description'),
    },
    {
      icon: Zap,
      title: t('empresa.values.efficiency.title'),
      description: t('empresa.values.efficiency.description'),
    },
    {
      icon: Heart,
      title: t('empresa.values.commitment.title'),
      description: t('empresa.values.commitment.description'),
    },
  ];

  const teamMembers = [
    {
      name: "Carlos Ski",
      position: "CEO & Fundador",
      experience: "27 años",
      speciality: "Estrategia y visión de producto",
      image: "CS",
    },
    {
      name: "María González",
      position: "CTO",
      experience: "15 años",
      speciality: "Arquitectura tecnológica",
      image: "MG",
    },
    {
      name: "Ana Martín",
      position: "Head of Product",
      experience: "12 años",
      speciality: "UX/UI y experiencia de usuario",
      image: "AM",
    },
    {
      name: "Pedro Almansa",
      position: "VP Sales",
      experience: "18 años",
      speciality: "Desarrollo de negocio",
      image: "PA",
    },
    {
      name: "Laura Ski",
      position: "Customer Success",
      experience: "8 años",
      speciality: "Implementación y soporte",
      image: "LS",
    },
    {
      name: "Javier Tech",
      position: "Lead Developer",
      experience: "10 años",
      speciality: "Desarrollo backend",
      image: "JT",
    },
  ];

  const milestones = [
    { year: "1997", event: "Fundación de BDR Informática" },
    { year: "2003", event: "Primera versión de software para estaciones" },
    { year: "2010", event: "Expansión internacional" },
    { year: "2018", event: "Lanzamiento de Ski Solution 360" },
    { year: "2022", event: "Integración con principales partners" },
    { year: "2024", event: "50+ estaciones digitalizadas" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />;{/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-background to-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('empresa.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('empresa.hero.subtitle')}
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">27+</div>
                <p className="text-sm text-muted-foreground">
                  {t('empresa.years-experience')}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">
                  {t('empresa.resorts-transformed')}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15</div>
                <p className="text-sm text-muted-foreground">{t('empresa.countries')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* History & Mission */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('empresa.history.title')}</h2>
              <p className="text-muted-foreground mb-6">
                {t('empresa.history.paragraph1')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('empresa.history.paragraph2')}
              </p>

              <div className="bg-accent/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Target className="w-5 h-5 text-accent mr-2" />
                  {t('empresa.mission.title')}
                </h3>
                <p className="text-sm">
                  {t('empresa.mission.description')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">{t('empresa.milestones.title')}</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 h-8 bg-accent text-accent-foreground rounded-lg flex items-center justify-center text-sm font-bold">
                      {milestone.year}
                    </div>
                    <p className="text-sm">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('empresa.values.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('empresa.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Team 
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados con décadas de experiencia en tecnología y turismo de montaña
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">{member.image}</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-accent font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experiencia:</span>
                      <span className="font-semibold">{member.experience}</span>
                    </div>
                    <p className="text-muted-foreground mt-3">{member.speciality}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}
      {/* BDR Matrix */}
      <section className="section-spacing bg-gradient-to-br from-background to-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-primary">
              {t('empresa.matrix.title')}
            </h2>
            <p className="text-slay-800 mb-8">
              {t('empresa.matrix.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-lg">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">{t('empresa.matrix.financial-stability')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('empresa.matrix.financial-description')}
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <Users2 className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">{t('empresa.matrix.experienced-team')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('empresa.matrix.team-description')}
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <Award className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">{t('empresa.matrix.recognition')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('empresa.matrix.recognition-description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="section-spacing">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('empresa.contact.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('empresa.contact.description')}
          </p>
          <Button
            className="btn-demo text-lg px-8 py-4"
            onClick={() => (window.location.href = "/contacto")}
          >
            {t('empresa.contact.button')}
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Empresa;
