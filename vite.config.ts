import { defineConfig } from "vitest/config";
// import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // include: ["./vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
    })
  ],
  test: {
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
  // test: {
  //   include: ["./vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  // }
});
