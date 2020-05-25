import Renderer from './Renderer'

export default class Item extends Renderer {
        constructor (data = {}, cart, root) {
          super(root, cart)
          //this._cart = cart

          this._data = data
        }
        
        addToCart () {
            this._cart.add(this._data)
        }
      
        initTemplate () {
          if (!this._template) {
            return
          }
      
          const { title, price, src } = this._data
          this._template.className = 'item'
          this._template.innerHTML = `
            <div class="item__img">
              <img src=${src} />
            </div>
            <div class="item__meta">Товар: <span>${title}</span></div>
            <div class="item__meta">Цена: <span>${price}</span></div>
            <button class='buy'>Купить</button>
          `
          
          const btn = this.template.querySelector('.buy')
          btn.addEventListener('click', this.addToCart.bind(this))
        }
      }