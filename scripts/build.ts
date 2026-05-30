import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import * as sass from 'sass';

import { getMetadata } from '../src/assets/ts/templates/metadata';
import { getHeader } from '../src/assets/ts/templates/header';
import { getFooter } from '../src/assets/ts/templates/footer';
import { getOfflineStylesheets } from '../src/assets/ts/templates/offlineStylesheets';

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

// Helper to clean directory
function cleanDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// Compile a single HTML template file by resolving HTML comment includes, title, and links
function compileHtml(filePath: string): string {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Calculate relative depth prefix
  const fileDir = path.dirname(filePath);
  const relativePath = path.relative(srcDir, fileDir);
  
  let prefix = '';
  if (relativePath) {
    const depth = relativePath.split(path.sep).length;
    prefix = '../'.repeat(depth);
  }
  
  // 1. Extract Title if present from HTML comment title directive
  let title = "Kriss Design / Utvikling";
  const titleRegex = /<!--\s*title\s+["']([^"']+)["']\s*-->/i;
  const titleMatch = content.match(titleRegex);
  if (titleMatch) {
    title = titleMatch[1];
  }
  
  // Remove the title comment directive so it isn't rendered in the final document
  content = content.replace(titleRegex, '');
  
  // 2. Resolve HTML comment includes by calling the TypeScript layout template components
  const includeRegex = /<!--\s*include\s+["'](?:(?:\.\.\/)*includes\/|include-files\/)?([^"']+)["']\s*-->/gi;
  content = content.replace(includeRegex, (match, filename) => {
    const key = filename.replace(/\.inc\.(?:php|html)$/, '').replace(/\.(?:php|html)$/, '').toLowerCase();
    
    if (key === 'metadata') {
      return getMetadata(title, prefix);
    } else if (key === 'header') {
      return getHeader(prefix);
    } else if (key === 'footer') {
      return getFooter(prefix);
    } else if (key === 'offline_stylesheets') {
      return getOfflineStylesheets(prefix);
    } else {
      console.warn(`Warning: Unknown layout component referenced in include: "${filename}"`);
      return '';
    }
  });
  
  // 3. Rewrite link references from .php to .html and clean up absolute test site domains
  content = content.replace(/href=(['"])([^'"]+)\.php([^'"]*)\1/g, 'href=$1$2.html$3$1');
  content = content.replace(/action=(['"])([^'"]+)\.php([^'"]*)\1/g, 'action=$1$2.html$3$1');
  
  // Rewrite projectmedia absolute URLs to local root relative paths
  content = content.replace(/http:\/\/projectmedia\.net23\.net\/pm\/html\/([^'"]+)\.php/g, '$1.html');
  content = content.replace(/http:\/\/projectmedia\.net23\.net\/pm\/html\/([^'"]+)\.html/g, '$1.html');
  content = content.replace(/http:\/\/projectmedia\.net23\.net\/pm\/form\/form\.php/g, 'form/form.html');
  content = content.replace(/http:\/\/projectmedia\.net23\.net\/pm\/form\/form\.html/g, 'form/form.html');

  // Map news page references to the landing page (index.html)
  content = content.replace(/(href|action)=(['"])([^'"]*)\bnews\.(html|php)([^'"]*)\2/gi, '$1=$2$3index.html$5$2');

  // Strip any remaining PHP code blocks entirely to ensure output is 100% clean HTML
  content = content.replace(/<\?php[\s\S]*?\?>/g, '');

  return content;
}

// Recursively copy or compile files from src to dist
function buildDir(src: string, dest: string) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      buildDir(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.sass') {
        // Compile Sass to CSS in dist/
        const cssPath = destPath.slice(0, -5) + '.css';
        try {
          const result = sass.compile(srcPath);
          fs.writeFileSync(cssPath, result.css, 'utf8');
          console.log(`Compiled Sass: ${srcPath} -> ${cssPath}`);
        } catch (err: any) {
          console.error(`Sass Compilation Error in ${srcPath}:`, err.message);
          process.exit(1);
        }
      } else if (ext === '.ts') {
        // TypeScript files will be compiled by tsc, so skip copying them
        continue;
      } else if (ext === '.html') {
        // Compile HTML template if it is a primary page
        const isHtmlDir = srcPath.includes(path.join('src', 'form')) || srcPath.includes(path.join('src', 'ninjajs')) || path.dirname(srcPath) === srcDir;
        
        if (isHtmlDir) {
          try {
            const compiledContent = compileHtml(srcPath);
            fs.writeFileSync(destPath, compiledContent, 'utf8');
            console.log(`Compiled HTML Template: ${srcPath} -> ${destPath}`);
          } catch (err: any) {
            console.error(`HTML Compilation Error in ${srcPath}:`, err.stack);
            process.exit(1);
          }
        } else {
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied static: ${srcPath} -> ${destPath}`);
        }
      } else {
        // Copy other static files (assets)
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied static: ${srcPath} -> ${destPath}`);
      }
    }
  }
}

function run() {
  console.log('Cleaning dist directory...');
  cleanDir(distDir);
  
  console.log('Building assets, compiling Sass, and inlining HTML layouts...');
  buildDir(srcDir, distDir);
  
  console.log('Compiling TypeScript files...');
  try {
    execSync('npx tsc', { cwd: rootDir, stdio: 'inherit' });
    console.log('TypeScript compilation completed successfully!');
  } catch (err) {
    console.error('TypeScript Compilation Failed!');
    process.exit(1);
  }
  
  console.log('Build completed successfully!');
}

run();
