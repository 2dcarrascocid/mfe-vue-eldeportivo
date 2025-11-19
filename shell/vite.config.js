import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { sharedAliases } from "../vite.base.config.js";
import { baseConfig } from "../vite.base.config.js"

export default defineConfig({
  ...baseConfig(),  
  plugins: [vue()],
  resolve: {
    alias: {
      ...sharedAliases,
      "@": path.resolve(__dirname, "./src"),
    },
    
  },
  server: {
    port: 5000,
  },
  
});
