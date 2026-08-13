const fs = require('fs');
const path = require('path');

const directoryPath = 'd:\\New folder\\palette';
const searchString = 'KrishiDrishti';
const replaceString = 'KrishiVision';

function replaceInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
      const newContent = content.replaceAll(searchString, replaceString);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    // Ignore read errors (e.g. for binary files or directories)
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('.supabase')) {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md') || fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
        replaceInFile(fullPath);
      }
    }
  });
}

walkDir(directoryPath);
console.log('Replacement complete.');
