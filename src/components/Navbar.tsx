import React, { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Globe, Menu, Router } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import skiSolutionLogo from "@/assets/ski-solution-logo.png";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Solución con subpáginas */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/solucion">{t("nav.solution")}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-80 bg-background rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ski-solution-360"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.core.title")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/precio-dinamico-forfaits"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.ticketing.title")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-escuela-esqui"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.school.title")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/gestion-alquiler-equipo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.rental.title")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/punto-venta-restauracion"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.pos.title")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/bi-crm-ski"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("modules.crm.title")}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Segmentos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/segmentos">{t("nav.segments")}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-96 bg-background border border-border rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-ski-resort"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.large-resorts")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-ski-resort-mediano"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.medium-resorts")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuelas-esqui"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.ski-schools")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-jardines-nieve"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.snow-gardens")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-bike-parks"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.bike-parks")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuela-aventura"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.outdoor-activities")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-escuela-vela-buceo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.sailing-diving")}
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/software-gestion-museo"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("segments.museums")}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Casos de éxito 
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-5 py-2 w-max items-center justify-center rounded-md bg-background text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <Link to="/casos-exito">{t("nav.success-stories")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>*/}

              {/* Recursos */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-5 py-2 w-max items-center justify-center rounded-md bg-background text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <Link to="/blog" reloadDocument>
                    {t("nav.blog")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Recursos 
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.resources")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blog"
                        className="block p-3 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {t("nav.blog")}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>*/}

              {/* Otros */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-5 py-2 w-max items-center justify-center rounded-md bg-background text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <Link to="/partners">{t("nav.partners")}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-5 py-2 w-max items-center justify-center rounded-md bg-background text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <Link to="/empresa">Sobre Nosotros</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-5 py-2 w-max items-center justify-center rounded-md bg-background text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <Link to="/faq-software-gestion-estacion-esqui">
                    {t("nav.faq")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>*/}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <SheetHeader>
                <SheetTitle className="text-left">{t("nav.menu")}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {/* Solución */}
                  <AccordionItem value="solution">
                    <AccordionTrigger className="text-left">
                      <Link to="/solucion" onClick={closeMobileMenu}>
                        {t("nav.solution")}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          to="/ski-solution-360"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.core.title")}
                        </Link>
                        <Link
                          to="/precio-dinamico-forfaits"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.ticketing.title")}
                        </Link>
                        <Link
                          to="/software-escuela-esqui"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.school.title")}
                        </Link>
                        <Link
                          to="/gestion-alquiler-equipo"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.rental.title")}
                        </Link>
                        <Link
                          to="/punto-venta-restauracion"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.pos.title")}
                        </Link>
                        <Link
                          to="/bi-crm-ski"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("modules.crm.title")}
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Segmentos */}
                  <AccordionItem value="segments">
                    <AccordionTrigger className="text-left">
                      <Link to="/segmentos" onClick={closeMobileMenu}>
                        {t("nav.segments")}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          to="/software-gestion-ski-resort"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.large-resorts")}
                        </Link>
                        <Link
                          to="/software-gestion-ski-resort-mediano"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.medium-resorts")}
                        </Link>
                        <Link
                          to="/software-gestion-escuelas-esqui"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.ski-schools")}
                        </Link>
                        <Link
                          to="/software-gestion-jardines-nieve"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.snow-gardens")}
                        </Link>
                        <Link
                          to="/software-gestion-bike-parks"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.bike-parks")}
                        </Link>
                        <Link
                          to="/software-gestion-escuela-aventura"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.outdoor-activities")}
                        </Link>
                        <Link
                          to="/software-gestion-escuela-vela-buceo"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.sailing-diving")}
                        </Link>
                        <Link
                          to="/software-gestion-museo"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("segments.museums")}
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Recursos */}
                  {/* <AccordionItem value="resources">
                    <AccordionTrigger className="text-left">
                      {t("nav.resources")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        <Link
                          to="/blog"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("nav.blog")}
                        </Link>
                        <Link
                          to="/ebooks"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("nav.ebooks")}
                        </Link>
                        <Link
                          to="/webinars"
                          className="block py-2 text-sm hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {t("nav.webinars")}
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>*/}
                </Accordion>

                {/* Simple Links */}
                <div className="space-y-4">
                  <Link
                    to="/blog"
                    reloadDocument
                    className="block py-2 hover:text-primary font-medium"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.blog")}
                  </Link>

                  {/*<Link
                    to="/casos-exito"
                    className="block py-2 hover:text-primary font-medium"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.success-stories")}
                  </Link>*/}
                  <Link
                    to="/partners"
                    className="block py-2 hover:text-primary font-medium"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.partners")}
                  </Link>
                  <Link
                    to="/empresa"
                    className="block py-2 hover:text-primary font-medium"
                    onClick={closeMobileMenu}
                  >
                    Sobre Nosotros
                  </Link>
                  {/*<Link
                    to="/faq-software-gestion-estacion-esqui"
                    className="block py-2 hover:text-primary font-medium"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.faq")}
                  </Link>*/}
                </div>

                {/* Language selector in mobile 
                <div className="pt-4 border-t">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {t("nav.language")}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={language === "es" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        handleLanguageChange("es");
                        closeMobileMenu();
                      }}
                    >
                      {t("lang.es")}
                    </Button>
                    <Button
                      variant={language === "cat" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        handleLanguageChange("cat");
                        closeMobileMenu();
                      }}
                    >
                      {t("lang.cat")}
                    </Button>
                    <Button
                      variant={language === "fr" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        handleLanguageChange("fr");
                        closeMobileMenu();
                      }}
                    >
                      {t("lang.fr")}
                    </Button>
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        handleLanguageChange("en");
                        closeMobileMenu();
                      }}
                    >
                      {t("lang.en")}
                    </Button>
                  </div>
                </div>*/}

                {/* CTA Button in mobile */}
                <div className="pt-4">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                    asChild
                  >
                    <Link to="/contacto">Contáctanos</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Right side actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language selector */}
            {/*<DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Globe className="h-4 w-4" />
                <span className="font-medium">{language.toUpperCase()}</span>
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
            </DropdownMenu>*/}

            {/* CTA Button */}
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              asChild
            >
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
