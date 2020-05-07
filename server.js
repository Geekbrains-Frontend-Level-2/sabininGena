const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) =>{
    const pathFile = './public';
    const urlFile = req.url;

try {
    if (path.extname(urlFile) == '.css'){
        res.writeHead(200, {'Cotent-Type': 'text/css'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    } else if (path.extname(urlFile) == '.js'){
        res.writeHead(200, {'Cotent-Type': 'text/js'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    } else if (path.extname(urlFile) == '.jpg'){
        res.writeHead(200, {'Cotent-Type': 'image/jpeg'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`));
    } else {
        res.writeHead(200, {'Cotent-Type': 'text/html'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    }
} catch {
    res.writeHead(200, {'Cotent-Type': 'text/html'});
    res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    }
}).listen(process.env.PORT || 3000);