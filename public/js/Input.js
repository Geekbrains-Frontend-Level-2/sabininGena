


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