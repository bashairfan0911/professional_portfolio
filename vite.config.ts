import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL for GitHub Pages (must match your repo name)
  base: "/Modern_portfolio/",


  // Dev server configuration
  server: {
    host: "::",
    port: 8080,
  },

  // Plugins
  plugins: [
    react(),                     // React support
    mode === "development" && componentTagger(), // Component tagging in dev
  ].filter(Boolean),

  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Optional build settings
  build: {
    outDir: "dist",   // Output folder (gh-pages will deploy this)
    sourcemap: false, // Disable sourcemaps for production
  },
}));
