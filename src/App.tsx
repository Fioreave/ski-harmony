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
            
            {/* Legacy routes redirect to Spanish */}
            <Route path="/blog" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/:slug" element={<Navigate to="/es/blog" replace />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
