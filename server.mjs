import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)&&file!==root)throw Error();const target=file===root?path.join(root,'index.html'):file;const body=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('SOPEX Advisory listening on port '+(process.env.PORT||3000)));
