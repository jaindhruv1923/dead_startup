import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Bundle CSS
const cssFiles = [
  'src/styles/variables.css',
  'src/styles/base.css',
  'src/styles/components.css',
  'src/styles/marketplace.css',
  'src/styles/autopsy.css',
  'src/styles/handover-studio.css',
  'src/styles/escrow.css',
  'src/styles/valuation.css',
  'src/styles/presentation.css'
];

let combinedCss = '/* DeadStartup Platform Consolidated Stylesheet */\n';
cssFiles.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    combinedCss += `\n/* === ${file} === */\n` + fs.readFileSync(p, 'utf-8') + '\n';
  }
});

fs.writeFileSync(path.join(__dirname, 'styles.css'), combinedCss, 'utf-8');
console.log('✅ styles.css bundled successfully!');
