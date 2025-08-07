// scripts/convert-webp.mjs
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

// Carpeta de origen (ajusta según tu estructura)
const SRC = "public/images";
const OUT = "public/images/webp";

// Asegura carpeta destino
await fs.mkdir(OUT, { recursive: true });

const files = await fs.readdir(SRC);

// procesa solo JPG / PNG
const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const img of images) {
  const inputPath = path.join(SRC, img);
  const outputPath = path.join(OUT, path.parse(img).name + ".webp");

  await sharp(inputPath)
    .resize({ width: 1280 })
    .webp({ quality: 70 })
    .toFile(outputPath);

  console.log(`✓ ${img} → ${path.basename(outputPath)}`);
}
