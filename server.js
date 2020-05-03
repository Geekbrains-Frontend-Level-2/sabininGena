const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
const publicPath = './public'
  console.log(req.url)

  const body = ''

  if(req.url === `/style.css`){ 
      body = fs.readFileSync(`${publicPath}/style.css` ,'utf8')
    //? fs.readFileSync(`${publicPath}/main.js` ,'utf8')
  } else if (req.url === `/main.js`){
     body = fs.readFileSync(`${publicPath}/main.js` ,'utf8')  
  } else {
    body = fs.readFileSync(`${publicPath}/index.html` ,'utf8')
  }
  res.end(body)
})

server.listen(process.env.PORT || 3000)
console.log('Server started')