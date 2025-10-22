// Setup script for Sichy Café React SPA
console.log('🚀 Setting up Sichy Café React SPA...');

// Check if package.json exists
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const srcPath = path.join(__dirname, 'src');
const publicPath = path.join(__dirname, 'public');

console.log('📁 Checking project structure...');

// Verify required directories exist
if (!fs.existsSync(srcPath)) {
  console.log('❌ src/ directory not found');
  process.exit(1);
}

if (!fs.existsSync(publicPath)) {
  console.log('❌ public/ directory not found');
  process.exit(1);
}

console.log('✅ Project structure verified');

// Check for required files
const requiredFiles = [
  'src/App.js',
  'src/index.js',
  'src/index.css',
  'src/components/Header.js',
  'src/components/Footer.js',
  'src/components/ProtectedRoute.js',
  'src/pages/Home.js',
  'src/pages/About.js',
  'src/pages/Menu.js',
  'src/pages/Gallery.js',
  'src/pages/Contact.js',
  'src/pages/Admin.js',
  'src/pages/NotFound.js',
  'public/index.html',
  'package.json'
];

console.log('📋 Checking required files...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n🎉 All files are in place!');
  console.log('\n📝 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm start');
  console.log('3. Open http://localhost:3000 in your browser');
  console.log('\n🔧 Available scripts:');
  console.log('- npm start: Start development server');
  console.log('- npm run build: Build for production');
  console.log('- npm test: Run tests');
} else {
  console.log('\n❌ Some files are missing. Please check the project structure.');
  process.exit(1);
}
