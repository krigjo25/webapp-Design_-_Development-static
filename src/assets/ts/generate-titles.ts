/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';
import { FileMetadata } from '../../types/generator';

declare const __dirname: string;
const srcDir = path.resolve(__dirname, '../../../src');

function titleFromFile(fileName: string): string {
  const base = path.basename(fileName, '.html');
  if (base === 'index') return 'Home';
  // capitalize first letter
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function processFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const title = titleFromFile(path.basename(filePath));
  
  const metadata: FileMetadata = { path: filePath, title };
  const titleTag = `<title>K – design | ${metadata.title}</title>`;
  
  // If a <title> already exists, replace it; otherwise insert before </head>
  let newContent: string;
  if (content.includes('<title>')) {
    newContent = content.replace(/<title>.*?<\/title>/s, titleTag);
  } else if (content.includes('</head>')) {
    newContent = content.replace('</head>', `  ${titleTag}\n</head>`);
  } else {
    // fallback: prepend title at start
    newContent = `${titleTag}\n${content}`;
  }
  fs.writeFileSync(metadata.path, newContent, 'utf8');
  console.log(`Updated title for ${path.basename(metadata.path)}`);
}

fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.html')) {
    processFile(path.join(srcDir, file));
  }
});
