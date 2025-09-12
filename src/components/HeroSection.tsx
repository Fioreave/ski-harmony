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

      <section className="pt-20 py-20 flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="pt-20 text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              {t("hero.h1")}
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.h2")}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
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
                className="text-lg"
                onClick={openContactForm}
              >
                Contacta con un experto
              </Button>
            </div>

            {/* Hero visual placeholder 
            <div className="relative">
              <div className="bg-muted rounded-lg w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                <video
<<<<<<< HEAD
                  src="/src/videos/Ski-solution-video_web.mp4"
=======
                  src="/src/assets/02.mov"
>>>>>>> 889f3db24c7100fd133f28a7a592416790a2987e
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>*/}

            {/* Floating elements
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm">
                ⚡ {t("hero.real-time")}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium text-sm">
                📊 {t("hero.analytics")}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
