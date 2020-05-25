import Renderer from './Renderer'
import CartItem from './CartItem'


 export default class Cart extends Renderer {
          constructor(root){
              super(root)
              this._items = []
              this.render()
          }

          add (data) {
            const ExItem = this._items.filter(item => item.id === data.id)[0]
            if(ExItem){
              return ExItem.inc()
                .then(()=>{
                  this.totalTemplate()
                })
            }
            return Promise.resolve(this._items.push(new CartItem(data)))
              .then(() => {
                this.render()
              })
          }
          remove(id){

          }

          getTotalPrice (){
            const result = this._items.reduce((cost, item) => {
              return cost + item.totalPrice
            }, 0)
            return result
          }

          toggle(){ 
            if(!this._template){
              return
            }
            this.template.classList.toggle('shown')
          }

          initTemplate(){
            if(!this._template){
              return
            }
            if (!this._template.className){
              this._template.className = 'cart__list'
              const logo = document.querySelector('.cartLogo')
              logo.addEventListener('click', this.toggle.bind(this))
            }

            if (this._items.length) {
              this._template.innerHTML = ''
              this._items.forEach(item => item.render(this.template))
              this.totalTemplate()

            } else {
              this._template.innerHTML = `
              <div class='cart__empty'> 
              Корзина пустая :(
              </div>`
            }
          }

          totalTemplate (){
            let sumContainer = document.querySelector('.cartTotal')
            if (!sumContainer){
              sumContainer = document.createElement('div')
              sumContainer.className = 'cartTotal'
            }
            sumContainer.innerHTML = this.getTotalPrice()
            //console.log(getTotalPrice())
            this._template.appendChild(sumContainer)
          }
      }