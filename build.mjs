import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','app.js','style.css'])await copyFile(file,`dist/${file}`);
await cp('public','dist/public',{recursive:true});
console.log('Static website built in dist/');
