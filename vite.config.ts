import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    base: isProd ? "/kingbull-insight-hub/" : "/", // QUAN TRỌNG: tên repo
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    server: { host: "::", port: 8080 },
    preview: { port: 8080 },
    build: { outDir: "docs", sourcemap: false } // build thẳng vào docs/
  };
});