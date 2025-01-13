import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    include: ["bson"],
    esbuildOptions: {
      supported: {
        "top-level-await": true,
      },
    },
  },
  plugins: [react()],
});
