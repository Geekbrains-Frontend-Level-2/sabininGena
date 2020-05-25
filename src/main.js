import Cart from './Cart'
import ItemList from './ItemList'
import Input from './Input'


const CartObject = new Cart(document.querySelector('.cart'))
const List = new ItemList(document.querySelector('main'), CartObject)


const i1 = {
    id: 1,
    reg: /^([a-z]+)/i,
    root: document.getElementById('inputName')
  }
const i2 =  {
    id: 2,
    reg: /^((\+7)|8)[\(]\1?([0-9]{3,4})[\)]\1?([0-9]{3})[\-]?([0-9]{4})/,
    root: document.getElementById('inputTelefone')
  }
  
const InpName = new Input(i1.id, i1.reg, i1.root)
const InpTel = new Input(i2.id, i2.reg, i2.root)