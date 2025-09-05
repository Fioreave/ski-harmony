import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import skiSolutionLogo from "@/assets/ski-solution-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const handleLogoTripleClick = () => {
    let clickCount = 0;
    return () => {
      clickCount++;
      if (clickCount === 3) {
        window.location.href = "/admin";
        clickCount = 0;
      }
      setTimeout(() => {
        clickCount = 0;
      }, 1000);
    };
  };

  const logoClickHandler = handleLogoTripleClick();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "s") {
        e.preventDefault();
        // Check for double Alt+S
        const timestamp = Date.now();
        const lastKeyPress = localStorage.getItem("altSPress");

        if (lastKeyPress && timestamp - parseInt(lastKeyPress) < 500) {
          window.location.href = "/admin";
          localStorage.removeItem("altSPress");
        } else {
          localStorage.setItem("altSPress", timestamp.toString());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Compañía</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compañía
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">Soluciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Segmentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Casos de éxito
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">{t("nav.resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("nav.ebooks")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("nav.webinars")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner logos placeholder */}
        {/*<div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center mb-8 opacity-60">
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 1
          </div>
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 2
          </div>
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 3
          </div>
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 4
          </div>
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 5
          </div>
          <div className="h-12 bg-muted rounded flex items-center justify-center text-xs">
            Partner 6
          </div>
        </div>*/}

        {/* Bottom section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo with triple click handler */}
          <img
            src="/src/assets/ski-solution-logo-negativo.png"
            alt="Ski Solution 360"
            className="h-8 w-auto cursor-pointer mb-4 md:mb-0"
            onClick={logoClickHandler}
          />
          {/* Brand claim */}
          <div className="text-center">
            <p className="text-lg font-medium">
              Tu estación, más rentable, más ágil, mejor preparada para el
              futuro.
            </p>
          </div>

          {/* Language selector and legal links */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/*  <LanguageSelector variant="footer" />*/}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Aviso legal
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
