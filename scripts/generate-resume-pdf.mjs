import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../public/resume.html');
const pdfPath  = path.resolve(__dirname, '../public/resume.pdf');

const browser = await puppeteer.launch({ headless: true });
const page    = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

// Hide the interactive print bar — not needed in the PDF
await page.addStyleTag({ content: '.print-bar { display: none !important; }' });

await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '10mm', right: '12mm', bottom: '10mm', left: '12mm' },
});

await browser.close();
console.log(`✓ Resume PDF saved to: ${pdfPath}`);
