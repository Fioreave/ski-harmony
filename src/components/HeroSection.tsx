import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoRequestForm from "./DemoRequestForm";
import ContactForm from "./ContactForm";
import { useForms } from "@/hooks/useForms";

const HeroSection = () => {
  const {
    showDemoForm,
    showContactForm,
    openDemoForm,
    closeDemoForm,
    openContactForm,
    closeContactForm,
  } = useForms();
  const { t } = useLanguage();

  return (
    <>
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}
      {showContactForm && <ContactForm onClose={closeContactForm} />}

      <section className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              {t("hero.h1")}
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.h2")}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
                onClick={openDemoForm}
              >
                {t("nav.request-demo")}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={openContactForm}
              >
                Contacta con un experto
              </Button>
            </div>

            {/* Hero visual placeholder */}
            <div className="relative">
              <div className="bg-muted rounded-lg h-64 md:h-96 flex items-center justify-center border-2 border-dashed border-border">
                {/*<p className="text-muted-foreground text-lg">
                  {t("hero.dashboard-preview")}
                </p>*/}
                <video
                  src="./02.mov"
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm">
                ⚡ {t("hero.real-time")}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium text-sm">
                📊 {t("hero.analytics")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
