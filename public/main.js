
    class Renderer {
        constructor (root) {
          //console.log(root)
          this._root = root
          this.prepareTemplate()
        }
      
        get root () {
          return this._root
        }
      
        get template () {
          return this._template
        }
      
        prepareTemplate () {
          this._template = document.createElement('div')
        }
      
        initTemplate () {
          if (!this._template) {
            return
          }
          return this._template.innerHTML = ''
        }
      
        render (primaryRoot) {
            
          if (primaryRoot) {
            this._root = primaryRoot
          }
      
          this.initTemplate()
      
          const { root, template } = this
          if (root) {
            root.appendChild(template)
          }
        }
      }

      class Item extends Renderer {
        constructor (data = {}, root) {
          super(root)
          //console.log(root)
          this._data = data
        }
        
        addToCart () {
            //console.log(this)
          //console.log(this._data)
          const addItem = new Cart(this._data)
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
            <button>Купить</button>
          `
          
          const cardButton = this.template.querySelector('button')
          cardButton.addEventListener('click', this.addToCart.bind(this))
        }
      }

      class ItemList extends Renderer {
        constructor (root) {
          super(root)
          this.fetchData()
            .then(this.render.bind(this))
        }
      
        fetchData () {
          return fetch('http://localhost:5500/items.json')
          .then(res => {
            //console.log(res)
            return res.json()
          })
          .then((res) => {
        
            this._items = res.data.map(item => {
            return new Item(item)
          })
        })
        }
      
        get items () {
          return this._items
        }
      
        initTemplate () {
          if (!this._template) {
            return
          }
      
          this._template.className = 'items-list'
          this.items.forEach(item => item.render(this._template))
        }
      }

      class Cart {
          constructor(data = {}){
              this._data = data
              //console.log(data)
              this.addToCart ()
          }
          removeItem() {
            // удаляем из this._list элемент с id
            console.log(this._data)
            
            //id.parentNode.removeChild(this._data);
            document.removeItem(this._data)
          } 

          addToCart () {
              let { title, price } = this._data
              //console.log(title)
              let itemInCart = document.getElementById('CartItem')
              //console.log(itemInCart)
              let cartDiv = document.createElement('div')
              cartDiv.className = "CartItems"
              cartDiv.innerHTML = title
              itemInCart.appendChild(cartDiv)

              let cartSpan = document.createElement('span')
              cartSpan.className = "CartItems"
              cartSpan.innerHTML = ' ' + price + "\u20bd"
              cartDiv.appendChild(cartSpan)
            
              cartDiv.addEventListener('click', this.removeItem.bind(this))
              List.render()
          }
      }
        
      //const CartObject = new Cart()
        
      class CartItem {
        remove() {
          CartObject.removeItem(this.id)
        }
        
        render () {
          this.template = html // тут хранится DOM
          this.template.addEventListener('click', this.remove.bind(this))
        }
      }

      const List = new ItemList(document.querySelector('main'))
      

        
