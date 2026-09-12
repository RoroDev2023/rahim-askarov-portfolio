const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const portIndex = process.argv.indexOf('--port');
const port = Number(process.env.PORT || (portIndex > -1 && process.argv[portIndex + 1]) || 3000);
const publicFiles = new Set(['index.html', 'styles.css', 'script.js', 'terminal.js', 'favicon.svg', 'rahim-portrait.jpg', 'Rahim_Askarov_Resume.pdf']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.png': 'image/png', '.csv': 'text/csv; charset=utf-8' };
http.createServer((req, res) => {
  let file;
  try { file = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\//, '') || 'index.html'; }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  if (!publicFiles.has(file) && !/^assets\/[a-z0-9-]+\.(?:jpg|png|csv)$/.test(file)) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(root, file), (error, content) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)], 'X-Content-Type-Options': 'nosniff' });
    res.end(content);
  });
}).listen(port, '127.0.0.1', () => console.log(`Portfolio ready at http://localhost:${port}`));
