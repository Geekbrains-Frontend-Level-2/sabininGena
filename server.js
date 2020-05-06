const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) =>{
    const pathFile = './public';
    const urlFile = req.url;

    if (path.extname(urlFile) == '.css'){
        res.writeHead(200, {'Cotent-Type': 'text/css'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    } else if (path.extname(urlFile) == '.js'){
        res.writeHead(200, {'Cotent-Type': 'text/js'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
    } else if (path.extname(urlFile) == '.jpg'){
        res.writeHead(200, {'Cotent-Type': 'image/jpeg'});
        res.end(fs.readFileSync(`${pathFile}${urlFile}`));
    } else if (path.extname(urlFile) == undefined){
        res.writeHead(200, {'Cotent-Type': 'text/html'});
        res.end(fs.readFileSync(`${pathFile}/index.html`, 'utf-8'));
    } else {
        res.writeHead(200, {'Cotent-Type': 'text/html'});
        res.end(fs.readFileSync(`${pathFile}/index.html`, 'utf-8'));
    }

     /*switch (path.extname(urlFile)){
        case '.css':
            res.writeHead(200, {'Cotent-Type': 'text/css'});
            res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
            break;
        case '.js':
            res.writeHead(200, {'Cotent-Type': 'text/js'});
            res.end(fs.readFileSync(`${pathFile}${urlFile}`, 'utf-8'));
            break;
        case '.jpg':
            res.writeHead(200, {'Cotent-Type': 'image/jpeg'});
            res.end(fs.readFileSync(`${pathFile}${urlFile}`));
            break;
        default:
            res.writeHead(200, {'Cotent-Type': 'text/html'});
            res.end(fs.readFileSync(`${pathFile}/index.html`, 'utf-8'));
            break;
     }*/
}).listen(process.env.PORT || 3000);