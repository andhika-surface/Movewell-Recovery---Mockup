import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Penting untuk GitHub Pages
  base: "/Movewell-Recovery---Mockup/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  build: {
    outDir: "build",   // biar sesuai dengan deploy workflow
    target: "esnext",
  },

  server: {
    port: 3000,
    open: true,
  },
});
