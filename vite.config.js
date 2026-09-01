import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VERCEL ? "/" : "/dinafurniture/",
  plugins: [
    react(),
    tailwindcss(),
  ],
});
