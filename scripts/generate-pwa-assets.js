const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(process.cwd(), 'public', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Base SVG for the icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" fill="#facc15"/>
    <circle cx="256" cy="256" r="192" fill="white"/>
    <path d="M256 128C256 128 192 192 192 256C192 320 256 384 256 384" stroke="#facc15" stroke-width="32"/>
    <path d="M256 128C256 128 320 192 320 256C320 320 256 384 256 384" stroke="#facc15" stroke-width="32"/>
</svg>
`;

// Save the SVG to a temporary file
const tempSvgPath = path.join(ICONS_DIR, 'temp.svg');
fs.writeFileSync(tempSvgPath, svgIcon);

// Generate icons in different sizes
const sizes = [192, 512];

Promise.all(
    sizes.map(size => {
        return sharp(tempSvgPath)
            .resize(size, size)
            .png()
            .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
    })
).then(() => {
    // Clean up temporary SVG file
    fs.unlinkSync(tempSvgPath);
    console.log('PWA icons generated successfully!');
}).catch(err => {
    console.error('Error generating PWA icons:', err);
}); 