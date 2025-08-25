import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SoftwareEscuelaEsqui = () => {
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
              Escuela & Clases
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Escuela & Clases
              </h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Beneficios clave</h2>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Reservas online de clases de esquí, snowboard o actividades de verano.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Asignación automática de monitores según disponibilidad.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Gestión de horarios y grupos centralizada.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cómo funciona</h2>
                  <p className="text-muted-foreground">
                    El cliente puede reservar forfait + clases en la misma compra. El sistema asigna monitores, genera planning y procesa el cobro.
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

export default SoftwareEscuelaEsqui;