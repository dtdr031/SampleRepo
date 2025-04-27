const fs = require('fs');
const path = require('path');

// Paths
const srcDir = path.join(__dirname, '../src');
const outDir = path.join(__dirname, '../out');

// Create 'out' if not exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Copy files from 'src' to 'out'
fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file);
  const outFile = path.join(outDir, file);
  fs.copyFileSync(srcFile, outFile);
});

console.log('Build completed. Files copied to out/');
