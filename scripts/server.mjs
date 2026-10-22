import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.json':'application/json','.md':'text/plain; charset=utf-8','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{let urlPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(urlPath.endsWith('/'))urlPath+='index.html';const full=path.resolve(root,'.'+urlPath);if(!full.startsWith(root+path.sep)||urlPath.includes('\0')){res.writeHead(403);return res.end('Forbidden');}const info=await stat(full);if(!info.isFile())throw new Error('not file');res.writeHead(200,{'Content-Type':mime[path.extname(full)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(await readFile(full));}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Page not found');}}).listen(4173,'127.0.0.1',()=>console.log('Aureveil preview: http://localhost:4173'));
