const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
}

// Create a simple bread roll logo
async function generateLogo() {
    const size = 1024;
    const padding = size * 0.2;
    const circle = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${(size - padding * 2) / 2}" fill="#8B4513"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${(size - padding * 2) / 2 - 10}" fill="#F5DEB3"/>
    </svg>
  `);

    // Generate logo
    await sharp(circle)
        .resize(200, 200)
        .toFile(path.join(PUBLIC_DIR, 'logo.png'));

    // Generate favicon.ico
    await sharp(circle)
        .resize(32, 32)
        .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));

    // Generate PWA icons
    await sharp(circle)
        .resize(192, 192)
        .toFile(path.join(PUBLIC_DIR, 'icon.png'));

    await sharp(circle)
        .resize(512, 512)
        .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));

    // Generate Apple touch icon
    await sharp(circle)
        .resize(180, 180)
        .toFile(path.join(PUBLIC_DIR, 'apple-icon.png'));

    console.log('✅ Generated all icons successfully!');
}

generateLogo().catch(console.error); 