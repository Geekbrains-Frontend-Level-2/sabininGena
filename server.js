/*const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  let body = null
  const publicPath = './public'

  try {
    console.log(`${publicPath}${req.url}`)
    body = fs.readFileSync(`${publicPath}${req.url}`)
  } catch (e) {
    body = fs.readFileSync(`${publicPath}/index.html`)
  }

  res.end(body)
})

const port = process.env.PORT || 3000

server.listen(port)
console.log('Server started on port: ', port)*/

const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = process.env.PORT || 3000


app.use(express.static('./public'))
app.listen((3000 || port), ()=>{
  console.log('server start')
})
app.get('/itemsList', (req,res)=>{
  console.log('GET')
  fs.readFile('/public/database/items.json', 'utf8', (err, data)=> {
    res.end(data)
  })
})
app.post('/itemsList', (req, res) => {
  console.log('POST')
  fs.readFile('./public/database/items.json', 'utf8', (err, data)=> {
    let list = JSON.parse(data || '{}')
    console.log('list', list)

    const newItem = req.body
    console.log('item:', newItem)

    const amountOfItem = Object.keys(list).length
    const newID = amountOfItem ? list[amountOfItem - 1].id + 1 : 0

    newItem.id = newID
    console.log(amountOfItem)
    console.log(newID)

    list[newID] = newItem

    fs.writeFile('./public/database/items.json', JSON.stringify(list), () => {
      res.send(list)
    })

  })
})
//добавил
app.post('/cartList', (req, res) => {
  console.log('POST')
  fs.readFile('./public/database/cart.json', 'utf8', (err, data)=> {
    let list = JSON.parse(data || '{}')
    console.log('list', list)

    const newItem = req.body
    console.log('item:', newItem)

    const amountOfItem = Object.keys(list).length
    const newID = amountOfItem ? list[amountOfItem - 1].id + 1 : 0

    newItem.id = newID
    console.log(amountOfItem)
    
    list[newID] = newItem
    console.log(list)

    fs.writeFile('./public/database/cart.json', JSON.stringify(list), () => {
      res.send(list)
    })

  })
})

//получаем данные корзины при загрузке корзины
app.get('/cartList', (req,res)=>{
  console.log('GET')
  fs.readFile('./public/database/cart.json', 'utf8', (err, data)=> {
    res.end(data)
  })
})
///////