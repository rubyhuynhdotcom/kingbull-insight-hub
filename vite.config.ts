import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-ignore - Node ESM import for package.json
import pkg from "./package.json" assert { type: "json" };

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  // Tự lấy tên repo từ env hoặc package.json; fallback là tên repo thật: kingbull-insight-hub
  const repo =
    (process.env.VITE_GH_PAGES_BASE || pkg?.name || "kingbull-insight-hub")
      .replace(/^\/|\/$/g, "");

  return {
    base: isProd ? `/${repo}/` : "/",
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    server: { host: "::", port: 8080 },
    preview: { port: 8080 },
    build: { outDir: "docs", sourcemap: false }
  };
});