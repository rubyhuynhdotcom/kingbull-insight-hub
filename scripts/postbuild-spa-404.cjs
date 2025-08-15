// scripts/postbuild-spa-404.cjs
const fs = require("fs");
const path = require("path");

const outDir = path.resolve("docs");
const indexFile = path.join(outDir, "index.html");
const notFoundFile = path.join(outDir, "404.html");
const noJekyll = path.join(outDir, ".nojekyll");

if (!fs.existsSync(outDir)) process.exit(0);
if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, notFoundFile);
  fs.writeFileSync(noJekyll, "");
  console.log("Created docs/404.html and docs/.nojekyll");
}