import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import skiSolutionLogo from "@/assets/ski-solution-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={skiSolutionLogo}
                alt="Ski Solution 360"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Solución con subpáginas */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/solucion">{t('nav.solution')}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-80 bg-background border border-border rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ski-solution-360"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.core.title')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/precio-dinamico-forfaits"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.ticketing.title')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-escuela-esqui"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.school.title')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/gestion-alquiler-equipo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.rental.title')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/punto-venta-restauracion"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.pos.title')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/bi-crm-ski"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('modules.crm.title')}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Segmentos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/segmentos">{t('nav.segments')}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-96 bg-background border border-border rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-ski-resort"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.large-resorts')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-ski-resort-mediano"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.medium-resorts')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuelas-esqui"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.ski-schools')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-jardines-nieve"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.snow-gardens')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-bike-parks"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.bike-parks')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuela-aventura"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.outdoor-activities')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuela-vela-buceo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.sailing-diving')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-museo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('segments.museums')}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Casos de éxito */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/casos-exito">{t('nav.success-stories')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Recursos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('nav.resources')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="https://blog.skisolution360.com/"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('nav.blog')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ebooks"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('nav.ebooks')}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/webinars"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t('nav.webinars')}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Otros */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/partners">{t('nav.partners')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/empresa">{t('nav.company')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/faq-software-gestion-estacion-esqui">{t('nav.faq')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex items-center space-x-2 text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                  {language.toUpperCase()}
                </span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("es")}
                  className="font-medium"
                >
                  {t("lang.es")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("cat")}>
                  {t("lang.cat")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
                  {t("lang.fr")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  {t("lang.en")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              {t('nav.request-demo')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
