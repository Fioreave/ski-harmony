import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ControlAccesosRfid = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link> / 
              <Link to="/solucion" className="hover:text-foreground"> Solución</Link> / 
              Control de Accesos RFID
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Control de Accesos RFID
              </h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Beneficios clave</h2>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Integración con tornos RFID, QR y Mobile Pass.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Validación instantánea de accesos.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Monitorización de aforo en tiempo real.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cómo funciona</h2>
                  <p className="text-muted-foreground">
                    Compatible con hardware existente (Axess, Skidata, Suprema). Conecta con ticketing y CRM para control total.
                  </p>
                </div>

                <div className="pt-8">
                  <Button size="lg" className="btn-demo">
                    Solicita una demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ControlAccesosRfid;