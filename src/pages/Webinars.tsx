import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Webinars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link> / 
              <Link to="/recursos" className="hover:text-foreground"> Recursos</Link> / 
              Webinars
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Webinars
              </h1>
              <p className="text-lg text-muted-foreground">
                Participa en nuestras sesiones online sobre las últimas tendencias en gestión de estaciones de esquí.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Webinars;