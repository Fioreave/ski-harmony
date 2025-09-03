import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/blog-api": {
        // si el SSL del subdominio falla, cambia a "http://..." y secure:false
        target: "https://blog.skisolution360.com/wp-json",
        changeOrigin: true,
        secure: true, // <-- pon false si ves errores TLS/SSL en consola
        rewrite: (p) => p.replace(/^\/blog-api/, ""),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
