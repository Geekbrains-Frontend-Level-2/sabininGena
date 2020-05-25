

export default class Renderer {
        constructor (root, cart) {          
          this._cart = cart
          this._root = root
          this.prepareTemplate()
        }
      
        get root () {
          return this._root
        }

        get cart () {
          return this._cart
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