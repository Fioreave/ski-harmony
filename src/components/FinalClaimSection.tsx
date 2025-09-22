import React from "react";
import { Button } from "@/components/ui/button";
import DemoRequestForm from "./DemoRequestForm";
import ContactForm from "./ContactForm";
import { useForms } from "@/hooks/useForms";

const FinalClaimSection = () => {
  const { showDemoForm, showContactForm, openDemoForm, closeDemoForm, openContactForm, closeContactForm } = useForms();

  return (
    <>
      {showDemoForm && <DemoRequestForm onClose={closeDemoForm} />}
      {showContactForm && <ContactForm onClose={closeContactForm} />}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Tu estación, más rentable, más ágil, mejor preparada para el futuro.
          </h2>

          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a las +35 estaciones que ya han transformado su operación con
            Ski Solution 360
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-medium"
              onClick={openDemoForm}
            >
              Solicita una demo gratuita
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
              onClick={openContactForm}
            >
              Contacta con nosotros
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            ✓ Sin compromiso ✓ Demo personalizada ✓ Respuesta en 24h
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FinalClaimSection;
