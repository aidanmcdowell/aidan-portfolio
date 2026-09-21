import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 1. Run vite build
console.log('Running vite build...');
execSync('npx vite build', { stdio: 'inherit' });

// 2. Copy compiled dist/template.html to dist/index.html and root index.html
if (fs.existsSync('dist/template.html')) {
  fs.copyFileSync('dist/template.html', 'dist/index.html');
  fs.copyFileSync('dist/template.html', 'index.html');
  console.log('Synchronized index.html to dist/ and root');
}

// 3. Copy compiled assets/ to root assets/
if (fs.existsSync('dist/assets')) {
  fs.cpSync('dist/assets', 'assets', { recursive: true });
  console.log('Synchronized assets/ to root');
}

// 4. Copy public files to root if needed
const publicFiles = ['favicon.svg', 'Aidan McDowell Resume.pdf', 'pfp.jpg', 'menu_mockup.png'];
for (const file of publicFiles) {
  const publicPath = path.join('public', file);
  if (fs.existsSync(publicPath) && !fs.existsSync(file)) {
    fs.copyFileSync(publicPath, file);
  }
}

console.log('Build completed successfully.');
