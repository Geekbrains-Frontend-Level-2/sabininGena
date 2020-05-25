import Cart from './Cart'
import ItemList from './ItemList'
import Input from './Input'


const CartObject = new Cart(document.querySelector('.cart'))
const List = new ItemList(document.querySelector('main'), CartObject)

const InpName = new Input(i1.id, i1.reg, i1.root)
const InpTel = new Input(i2.id, i2.reg, i2.root)