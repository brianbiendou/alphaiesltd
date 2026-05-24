import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = new URL("../public/images/", import.meta.url).pathname.replace(/^\//, "");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = await walk(ROOT);
const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

let totalBefore = 0;
let totalAfter = 0;

for (const png of pngs) {
  const webp = png.replace(/\.png$/i, ".webp");
  const before = (await stat(png)).size;
  await sharp(png)
    .webp({ quality: 82, effort: 5 })
    .toFile(webp);
  const after = (await stat(webp)).size;
  totalBefore += before;
  totalAfter += after;
  const reduction = (((before - after) / before) * 100).toFixed(0);
  console.log(
    `${png.split(/[\\\/]images[\\\/]/).pop()}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (-${reduction}%)`,
  );
  await unlink(png);
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`,
);
