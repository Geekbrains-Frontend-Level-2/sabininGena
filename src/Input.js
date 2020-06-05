


export default class Input {
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
            if(this._data.test(this._root.value) || this._root.value == ''){
              this._template.innerHTML = ''    
            }
          }        
      }