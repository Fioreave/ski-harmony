import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPostEditor from "./pages/AdminPostEditor";
import NotFound from "./pages/NotFound";
import Empresa from "./pages/Empresa";

// Solution pages
import Solucion from "./pages/Solucion";
import SkiSolution360 from "./pages/SkiSolution360";
import PrecioDinamicoForfaits from "./pages/PrecioDinamicoForfaits";
import ControlAccesosRfid from "./pages/ControlAccesosRfid";
import SoftwareEscuelaEsqui from "./pages/SoftwareEscuelaEsqui";
import GestionAlquilerEquipo from "./pages/GestionAlquilerEquipo";
import PuntoVentaRestauracion from "./pages/PuntoVentaRestauracion";
import BiCrmSki from "./pages/BiCrmSki";

// Segments pages
import Segmentos from "./pages/Segmentos";
import SoftwareGestionSkiResort from "./pages/SoftwareGestionSkiResort";
import SoftwareGestionSkiResortMediano from "./pages/SoftwareGestionSkiResortMediano";
import SoftwareGestionEscuelasEsqui from "./pages/SoftwareGestionEscuelasEsqui";
import SoftwareGestionJardinesNieve from "./pages/SoftwareGestionJardinesNieve";
import SoftwareGestionBikeParks from "./pages/SoftwareGestionBikeParks";
import SoftwareGestionEscuelaAventura from "./pages/SoftwareGestionEscuelaAventura";
import SoftwareGestionEscuelaVelaBuceo from "./pages/SoftwareGestionEscuelaVelaBuceo";
import SoftwareGestionMuseo from "./pages/SoftwareGestionMuseo";

// Other pages
import CasosExito from "./pages/CasosExito";
import Ebooks from "./pages/Ebooks";
import Webinars from "./pages/Webinars";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Redirect root to Spanish */}
            <Route path="/" element={<Navigate to="/es" replace />} />

            {/* Language-specific routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/cat" element={<Index />} />
            <Route path="/en" element={<Index />} />
            <Route path="/fr" element={<Index />} />

            <Route path="/es/blog" element={<Blog />} />
            <Route path="/cat/blog" element={<Blog />} />
            <Route path="/en/blog" element={<Blog />} />
            <Route path="/fr/blog" element={<Blog />} />

            <Route path="/es/blog/:slug" element={<BlogPost />} />
            <Route path="/cat/blog/:slug" element={<BlogPost />} />
            <Route path="/en/blog/:slug" element={<BlogPost />} />
            <Route path="/fr/blog/:slug" element={<BlogPost />} />

            {/* Admin routes (no language prefix) */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/posts/new" element={<AdminPostEditor />} />
            <Route path="/admin/posts/:id" element={<AdminPostEditor />} />

            <Route path="/empresa" element={<Empresa />} />

            {/* Solution pages */}
            <Route path="/solucion" element={<Solucion />} />
            <Route path="/ski-solution-360" element={<SkiSolution360 />} />
            <Route
              path="/precio-dinamico-forfaits"
              element={<PrecioDinamicoForfaits />}
            />
            <Route
              path="/control-accesos-rfid"
              element={<ControlAccesosRfid />}
            />
            <Route
              path="/software-escuela-esqui"
              element={<SoftwareEscuelaEsqui />}
            />
            <Route
              path="/gestion-alquiler-equipo"
              element={<GestionAlquilerEquipo />}
            />
            <Route
              path="/punto-venta-restauracion"
              element={<PuntoVentaRestauracion />}
            />
            <Route path="/bi-crm-ski" element={<BiCrmSki />} />

            {/* Segments pages */}
            <Route path="/segmentos" element={<Segmentos />} />
            <Route
              path="/software-gestion-ski-resort"
              element={<SoftwareGestionSkiResort />}
            />
            <Route
              path="/software-gestion-ski-resort-mediano"
              element={<SoftwareGestionSkiResortMediano />}
            />
            <Route
              path="/software-gestion-escuelas-esqui"
              element={<SoftwareGestionEscuelasEsqui />}
            />
            <Route
              path="/software-gestion-jardines-nieve"
              element={<SoftwareGestionJardinesNieve />}
            />
            <Route
              path="/software-gestion-bike-parks"
              element={<SoftwareGestionBikeParks />}
            />
            <Route
              path="/software-gestion-escuela-aventura"
              element={<SoftwareGestionEscuelaAventura />}
            />
            <Route
              path="/software-gestion-escuela-vela-buceo"
              element={<SoftwareGestionEscuelaVelaBuceo />}
            />
            <Route
              path="/software-gestion-museo"
              element={<SoftwareGestionMuseo />}
            />

            {/* Other pages */}
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/partners" element={<Partners />} />
            <Route
              path="/faq-software-gestion-estacion-esqui"
              element={<Faq />}
            />

            {/* Legacy routes redirect to Spanish */}
            <Route path="/blog" element={<Navigate to="/es/blog" replace />} />
            <Route
              path="/blog/:slug"
              element={<Navigate to="/es/blog" replace />}
            />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
