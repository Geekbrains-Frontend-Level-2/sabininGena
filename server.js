const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
const publicPath = './public'
  console.log(req.url)

  const body = req.url === `style.css` 
    ? fs.readFileSync(`${publicPath})/style.css` ,'utf8')
    : fs.readFileSync(`${publicPath})/index.html` ,'utf8')

  res.end(body)
})

server.listen(process.env.PORT || 3000)
console.log('Server started')