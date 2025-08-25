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
import { useTranslation } from "@/hooks/useTranslation";
import skiSolutionLogo from "@/assets/ski-solution-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang as any);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={skiSolutionLogo}
              alt="Ski Solution 360"
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Solución con subpáginas */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.solution")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-80">
                    <NavigationMenuLink asChild>
                      <Link to="/ski-solution-360">Plataforma Core</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/precio-dinamico-forfaits">
                        Ticketing & Dynamic Pricing
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/control-accesos-rfid">
                        Control de Accesos RFID
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-escuela-esqui">Escuela & Clases</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/gestion-alquiler-equipo">
                        Alquiler & Inventario
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/punto-venta-restauracion">
                        F&B & Retail POS
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/bi-crm-ski">BI & CRM 360</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Segmentos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.segments")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-96">
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-ski-resort">
                        Grandes Resorts
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-ski-resort-mediano">
                        Resorts Medianos
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-escuelas-esqui">
                        Escuelas Esquí
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-jardines-nieve">
                        Jardines de Nieve
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-bike-parks">Bike Parks</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-escuela-aventura">
                        Aventura / Outdoor
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-escuela-vela-buceo">
                        Vela & Buceo
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/software-gestion-museo">Museos</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Casos de éxito */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/casos-exito">{t("nav.success-stories")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Recursos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.resources")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-64">
                    <NavigationMenuLink asChild>
                      <Link to="/blog">{t("nav.blog")}</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/ebooks">{t("nav.ebooks")}</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/webinars">{t("nav.webinars")}</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Otros */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/partners">{t("nav.partners")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/empresa">{t("nav.company")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/soporte">{t("nav.support")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-5 py-2">
                  <Link to="/faq-software-gestion-estacion-esqui">
                    {t("nav.faq")}
                  </Link>
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
                  {currentLanguage.toUpperCase()}
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
              {t("nav.request-demo")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
