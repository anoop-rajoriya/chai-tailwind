import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "public/lib",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.js"),
      name: "InlineTailwind",
      fileName: () => "inline-tailwind.min.js",
      formats: ["iife"],
    },
  },
});
