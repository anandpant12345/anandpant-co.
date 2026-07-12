const fs = require('fs');

// 1. Merge app.js (Navigation & Footer)
let appJs = fs.readFileSync('app.js', 'utf8');

// Replace Navigation
const navCode = fs.readFileSync('nav_component.js', 'utf8');
const navStart = appJs.indexOf('function renderNavigation() {');
const navEnd = appJs.indexOf('\n}\n', navStart) + 3;
if (navStart > -1 && navEnd > -1) {
  appJs = appJs.substring(0, navStart) + navCode + '\n' + appJs.substring(navEnd);
}

// Replace Footer
const footerCode = fs.readFileSync('footer_component.js', 'utf8');
const footerStart = appJs.indexOf('function getFooterHTML() {');
const footerEnd = appJs.indexOf('\n}\n', footerStart) + 3;
if (footerStart > -1 && footerEnd > -1) {
  appJs = appJs.substring(0, footerStart) + footerCode + '\n' + appJs.substring(footerEnd);
} else {
  // If no getFooterHTML, just append it
  appJs += '\n' + footerCode + '\n';
}

fs.writeFileSync('app.js', appJs);

// 2. Merge home.js (Bento Box & Audience Grid)
let homeJs = fs.readFileSync('pages/home.js', 'utf8');

const bentoCode = fs.readFileSync('pages/bento_component.js', 'utf8');
const gridCode = fs.readFileSync('pages/audience_grid_component.js', 'utf8');

// Extract strings
const bentoBoxMatch = bentoCode.match(/export const bentoBoxHTML = \([\s\S]*?)\;/);
const carouselMatch = bentoCode.match(/export const carouselHTML = \([\s\S]*?)\;/);
const audienceGridMatch = gridCode.match(/return \([\s\S]*?)\;/);

if (audienceGridMatch && bentoBoxMatch && carouselMatch) {
  // Replace generic services with Audience Grid and Bento Box
  const startServices = homeJs.indexOf('<!-- ===== 3. SERVICES ===== -->');
  const endServices = homeJs.indexOf('<!-- ===== 4. TOOLS TEASER ===== -->');
  
  if (startServices > -1 && endServices > -1) {
    const newContent = '<!-- ===== 3. AUDIENCE PERSONAS & EXPERTISE ===== -->\n' 
                       + audienceGridMatch[1] 
                       + '\n' 
                       + bentoBoxMatch[1] 
                       + '\n'
                       + carouselMatch[1]
                       + '\n';
    homeJs = homeJs.substring(0, startServices) + newContent + homeJs.substring(endServices);
  }
}

fs.writeFileSync('pages/home.js', homeJs);
console.log('Merged successfully.');
