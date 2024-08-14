import * as esbuild from "esbuild";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// load all .mjs files from './resources/extensions/hermosa-floors-theme-blocks'
const assetDir = path.join(
  __dirname,
  "resources",
  "extensions",
  "hermosa-floors-theme-blocks"
);
const files = fs.readdirSync(assetDir).filter((file) => file.endsWith(".mjs"));
const entryPoints = files.map((file) => path.join(assetDir, file));

const outputDir = path.join(
  __dirname,
  "extensions/hermosa-floors-theme-blocks/assets/"
);

await esbuild.build({
  entryPoints: [...entryPoints],
  bundle: true,
  outdir: outputDir,
  minify: true,
  sourcemap: "inline",
});
