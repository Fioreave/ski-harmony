import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="py-4 px-4">
          <div className="container-custom">
            <span className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link> / Partners
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent animate-fade-in">
                {t('partners.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-200">
                {t('partners.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Sistemas de Accesos */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.access-systems')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>AXESS</strong> (incluida BLE)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>Homologación DTA <strong>SKIDATA</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Biostar Suprema</strong></span>
                  </div>
                </div>
              </div>

              {/* Medios de Pago */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-100 group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.payment-methods')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Clearone</strong> • <strong>REDSYS</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>CECA</strong> • <strong>Paytrail</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Macro</strong> • <strong>Magnet</strong></span>
                  </div>
                </div>
              </div>

              {/* Plataformas Online */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-200 group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.online-platforms')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>"Dispongo"</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Webdreams</strong></span>
                  </div>
                </div>
              </div>

              {/* ERP y Contabilidad */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-300 group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.erp-accounting')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>AXAPTA</strong> • <strong>NAVISION</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>Integración nativa <strong>ODOO</strong></span>
                  </div>
                </div>
              </div>

              {/* Servicios Especializados */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-400 group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.specialized-services')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>SkiCase</strong> (consignas y guarda esquíes)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Golfmanager</strong> (actividades de Golf)</span>
                  </div>
                </div>
              </div>

              {/* Mobile Wallets */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-500 group border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t('partners.mobile-wallets')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Google Wallet</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span><strong>Apple Wallet</strong></span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Para pases, clases de esquí/vela y entradas en el móvil
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partners Logos Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Clientes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-80">
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente1.png" alt="Cliente 1" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente2.png" alt="Cliente 2" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente3.png" alt="Cliente 3" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente4.png" alt="Cliente 4" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente5.png" alt="Cliente 5" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/clientes/cliente6.png" alt="Cliente 6" className="max-h-16 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-background to-primary/5">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('partners.need-integration')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('partners.integration-description')}
              </p>
              <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
                Solicita una demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;