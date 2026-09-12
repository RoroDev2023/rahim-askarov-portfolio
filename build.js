const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
// Remove the obsolete training game from earlier static exports too.
fs.rmSync(path.join(output, 'ml.js'), { force: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'terminal.js', 'favicon.svg', 'rahim-portrait.jpg', 'Rahim_Askarov_Resume.pdf']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(output, file));
}
fs.cpSync(path.join(__dirname, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Static website built in dist/');
