import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cors from "cors"; // for 'cors' package

// https://vitejs.dev/config/
// const corsOptions = {
//   origin: "http://localhost:4000", // Replace with your frontend's origin
//   credentials: true, // Set to true if your API requires cookies
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
// };
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // Corrected the syntax
      },
    },
  },
  plugins: [react()],
});
