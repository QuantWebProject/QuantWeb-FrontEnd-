import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "http://ec2-43-203-37-134.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      include: "**/*.svg?react"
    })
  ]
});
