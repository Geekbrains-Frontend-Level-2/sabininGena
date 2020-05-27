import Renderer from './Renderer'


export default class CartItem extends Renderer {
        constructor(data){
          super()
          this._data = data
          this._counter = 1
          this.render()          
        }

        get id (){
          return this._data.id
        }

        get totalPrice () {
          return this._data.price * this._counter
        }

        inc(){
          return Promise.resolve(this._counter++)
            .then(()=>{
              this.render()
            })
        }

        dec(){
          //console.log(this._counter)
            return Promise.resolve(this._counter--)
              .then(()=>{
                this.render()
              })
        }

        del() {
            
        }
        
        initTemplate () {
          if(!this._template){
            return
          }
          
          this._template.className = 'cart__items'
          this._template.innerHTML = `
            <span class='cart__item'>
            ${this._data.title} x ${this._counter} = ${this.totalPrice}            
            </span>
            <div class='btnDelete btnDelete_${this._data.id}'>x</div>
          `
          //const btnDel = document.querySelector('.btnDelete_' + this._data.id)
          
          //this._template.addEventListener('click', this._cart.remove())
        }
      }