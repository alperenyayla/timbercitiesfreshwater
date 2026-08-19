import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/timbercitiesfreshwater/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        app: "src/main.tsx",
      },
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
