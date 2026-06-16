// Generates a circular favicon from the MinLabs logo.
// Run: node scripts/make-favicon.js
const sharp = require("sharp");
const fs = require("fs");

const SIZE = 256;
const SRC = "public/logo-minlabs.png";
const OUT = "app/icon.png";

(async () => {
  // White background behind the logo so transparent logos still read on a circle.
  const logo = await sharp(SRC)
    .resize(SIZE, SIZE, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer();

  // Circular mask
  const circle = Buffer.from(
    `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`,
  );

  await sharp(logo)
    .composite([{ input: circle, blend: "dest-in" }])
    .png()
    .toFile(OUT);

  console.log(`Circular favicon written to ${OUT} (${fs.statSync(OUT).size} bytes)`);
})();
