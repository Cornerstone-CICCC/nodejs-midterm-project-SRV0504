import fs from 'fs';
import path from 'path';

const projectFolder = './src';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Quitar import incorrecto con User e Item desde App
  content = content.replace(
    /import\s*\{[^}]*User[^}]*\}\s*from\s*['"].*App['"];?/g,
    ''
  );

  // Quitar import incorrecto con Item desde App
  content = content.replace(
    /import\s*\{[^}]*Item[^}]*\}\s*from\s*['"].*App['"];?/g,
    ''
  );

  // Agregar los TYPES si no existen
  if (!content.includes('type UserType')) {
    content =
      `type UserType = { id: string; name: string; email: string; };\n\n` +
      content;
  }

  if (!content.includes('type Item')) {
    content =
      `type Item = { id: number; title: string; description: string; };\n\n` +
      content;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

function scanFolder(folder) {
  fs.readdirSync(folder).forEach((file) => {
    const fullPath = path.join(folder, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanFolder(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      console.log('Fixing:', fullPath);
      fixFile(fullPath);
    }
  });
}

scanFolder(projectFolder);
