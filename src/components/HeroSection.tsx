import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoRequestForm from "./DemoRequestForm";
import ContactForm from "./ContactForm";
import { useForms } from "@/hooks/useForms";
import mountain from "/img/mountain.jpg";

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

      <section
        className="min-h-screen relative pt-20 md:pt-24 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountain})` }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none
                  bg-gradient-to-b from-black/60 via-black/40 to-black/20
                  backdrop-blur-[1px]"
        />
        <div className="relative z-10 container mx-auto text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1
              className="pt-20 text-5xl md:text-7xl font-bold mb-6 leading-tight
                     drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
            >
              {t("hero.h1")}
            </h1>

            <h2
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            >
              {t("hero.h2")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-black hover:text-primary px-8 py-4 text-lg font-medium"
                onClick={openDemoForm}
              >
                {t("nav.request-demo")}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-black px-8 border-none text-lg font-medium hover:bg-black hover:text-primary"
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
