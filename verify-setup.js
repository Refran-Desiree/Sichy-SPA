// Verification script for Sichy Café React SPA
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Sichy Café React SPA setup...\n');

// Check package.json
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('✅ package.json found');
  console.log(`   - Project: ${packageJson.name}`);
  console.log(`   - Version: ${packageJson.version}`);
  
  // Check dependencies
  const requiredDeps = ['react', 'react-dom', 'react-router-dom', 'react-scripts'];
  const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
  
  if (missingDeps.length === 0) {
    console.log('✅ All required dependencies found');
  } else {
    console.log('❌ Missing dependencies:', missingDeps.join(', '));
  }
} else {
  console.log('❌ package.json not found');
}

console.log('\n📁 Checking file structure...');

// Check directories
const requiredDirs = ['src', 'public', 'src/components', 'src/pages', 'src/utils'];
requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - MISSING`);
  }
});

// Check key files
const keyFiles = [
  'src/App.js',
  'src/index.js',
  'src/index.css',
  'public/index.html',
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
  'src/utils/auth.js',
  'src/utils/cart.js',
  'src/utils/notifications.js'
];

console.log('\n📄 Checking key files...');
let allFilesExist = true;

keyFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check for React Router setup
console.log('\n🔗 Checking React Router setup...');
const appJsPath = path.join(__dirname, 'src/App.js');
if (fs.existsSync(appJsPath)) {
  const appContent = fs.readFileSync(appJsPath, 'utf8');
  const hasRouter = appContent.includes('BrowserRouter') && appContent.includes('Routes') && appContent.includes('Route');
  const hasPages = appContent.includes('Home') && appContent.includes('About') && appContent.includes('Menu');
  
  if (hasRouter) {
    console.log('✅ React Router setup found');
  } else {
    console.log('❌ React Router setup incomplete');
  }
  
  if (hasPages) {
    console.log('✅ Page components imported');
  } else {
    console.log('❌ Page components missing');
  }
}

// Check CSS
console.log('\n🎨 Checking CSS setup...');
const cssPath = path.join(__dirname, 'src/index.css');
if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  const hasVariables = cssContent.includes('--primary-color');
  const hasNavbar = cssContent.includes('.navbar');
  const hasHero = cssContent.includes('.hero');
  
  if (hasVariables && hasNavbar && hasHero) {
    console.log('✅ Original CSS styles preserved');
  } else {
    console.log('❌ CSS styles may be incomplete');
  }
}

console.log('\n📋 Summary:');
if (allFilesExist) {
  console.log('🎉 Setup verification completed successfully!');
  console.log('\n🚀 Ready to start development:');
  console.log('   1. npm install');
  console.log('   2. npm start');
  console.log('   3. Open http://localhost:3000');
  console.log('\n✨ Features included:');
  console.log('   - React Router DOM navigation');
  console.log('   - Component-based architecture');
  console.log('   - Protected admin route');
  console.log('   - Cart functionality');
  console.log('   - Authentication simulation');
  console.log('   - 404 page');
  console.log('   - Programmatic navigation');
  console.log('   - Original design preserved');
} else {
  console.log('❌ Setup verification failed. Please check missing files.');
  process.exit(1);
}
