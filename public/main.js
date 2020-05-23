
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
        constructor (data = {}, cart, root) {
          super(root)
          this._cart = cart
          //console.log(root)
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

      class ItemList extends Renderer {
        constructor (root, cart) {
          super(root)
          this._cart = cart
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
            return new Item(item, this._cart)
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

      class Cart extends Renderer {
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
        
        
      class CartItem extends Renderer {
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
          if(this._counter = 1){
            this.del()
          } else{
            return Promise.resolve(this._counter--)
              .then(()=>{
                this.render()
              })
          }          
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
          const btnDel = document.querySelector('.btnDelete_' + this._data.id)
          
          //btnDel.addEventListener('click', this.dec.bind(this))
        }
      }
      const CartObject = new Cart(document.querySelector('.cart'))
      const List = new ItemList(document.querySelector('main'), CartObject)


      
      
      class Input {
        constructor(id, data, root){
          this._data = data
          this._root = root
          this._id = id
          this.initTemplate()
        }

        initTemplate(){
          this._template = document.getElementById('inputProblem' + this._id)
          this._root.addEventListener('change', this.renderProblem.bind(this))
        }

        renderProblem(){
            if(!this._data.test(this._root.value)){
              this._template.innerHTML = '! Некорректный ввод'       
            }
            if(this._data.test(this._root.value)){
              this._template.innerHTML = ''    
            }
          }
        
      }
      
      const i1 = {
          id: 1,
          reg: /^([a-z]+)/i,
          root: document.getElementById('inputName')
        }
      const i2 =  {
          id: 2,
          reg: /^((\+7)|8)[\(]?([0-9]{3,4})[\)]?([0-9]{3})[\-]?([0-9]{4})/,
          root: document.getElementById('inputTelefone')
        }

      const InpName = new Input(i1.id, i1.reg, i1.root)
      const InpTel = new Input(i2.id, i2.reg, i2.root)
      