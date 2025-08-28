import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Webinars = () => {
  const { t } = useLanguage();
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
                {t('webinars.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('webinars.description')}
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