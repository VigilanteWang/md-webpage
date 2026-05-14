import { promises as fs } from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const htmlPath = path.join(distDir, "index.html");

const html = await fs.readFile(htmlPath, "utf8");

const scriptMatch = html.match(/<script type="module" crossorigin src="(.+?)"><\/script>/);
const styleMatch = html.match(/<link rel="stylesheet" crossorigin href="(.+?)">/);

if (!scriptMatch || !styleMatch) {
  throw new Error("Could not find generated script or stylesheet tags in dist/index.html.");
}

const scriptPath = path.join(distDir, scriptMatch[1].replace(/^\.\//, ""));
const stylePath = path.join(distDir, styleMatch[1].replace(/^\.\//, ""));

const [scriptContent, styleContent] = await Promise.all([
  fs.readFile(scriptPath, "utf8"),
  fs.readFile(stylePath, "utf8"),
]);

const inlinedHtml = html
  .replace(styleMatch[0], () => `<style>\n${styleContent}\n</style>`)
  .replace(scriptMatch[0], () => `<script type="module">\n${scriptContent}\n</script>`);

await fs.writeFile(htmlPath, inlinedHtml);
