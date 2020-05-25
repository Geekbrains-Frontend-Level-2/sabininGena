!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class r{constructor(t,e){this._cart=e,this._root=t,this.prepareTemplate()}get root(){return this._root}get cart(){return this._cart}get template(){return this._template}prepareTemplate(){this._template=document.createElement("div")}initTemplate(){if(this._template)return this._template.innerHTML=""}render(t){t&&(this._root=t),this.initTemplate();const{root:e,template:i}=this;e&&e.appendChild(i)}}class s extends r{constructor(t){super(),this._data=t,this._counter=1,this.render()}get id(){return this._data.id}get totalPrice(){return this._data.price*this._counter}inc(){return Promise.resolve(this._counter++).then(()=>{this.render()})}dec(){return Promise.resolve(this._counter--).then(()=>{this.render()})}del(){}initTemplate(){this._template&&(this._template.className="cart__items",this._template.innerHTML=`\n            <span class='cart__item'>\n            ${this._data.title} x ${this._counter} = ${this.totalPrice}            \n            </span>\n            <div class='btnDelete btnDelete_${this._data.id}'>x</div>\n          `)}}class n extends r{constructor(t={},e,i){super(i,e),this._data=t}addToCart(){this._cart.add(this._data)}initTemplate(){if(!this._template)return;const{title:t,price:e,src:i}=this._data;this._template.className="item",this._template.innerHTML=`\n            <div class="item__img">\n              <img src=${i} />\n            </div>\n            <div class="item__meta">Товар: <span>${t}</span></div>\n            <div class="item__meta">Цена: <span>${e}</span></div>\n            <button class='buy'>Купить</button>\n          `;this.template.querySelector(".buy").addEventListener("click",this.addToCart.bind(this))}}class a{constructor(t,e,i){this._data=e,this._root=i,this._id=t,this.initTemplate()}initTemplate(){this._template=document.getElementById("inputProblem"+this._id),this._root.addEventListener("change",this.renderProblem.bind(this))}renderProblem(){this._data.test(this._root.value)||(this._template.innerHTML="! Некорректный ввод"),(this._data.test(this._root.value)||""==this._root.value)&&(this._template.innerHTML="")}}const o=new class extends r{constructor(t){super(t),this._items=[],this.render()}add(t){const e=this._items.filter(e=>e.id===t.id)[0];return e?e.inc().then(()=>{this.totalTemplate()}):Promise.resolve(this._items.push(new s(t))).then(()=>{this.render()})}remove(t){}getTotalPrice(){return this._items.reduce((t,e)=>t+e.totalPrice,0)}toggle(){this._template&&this.template.classList.toggle("shown")}initTemplate(){if(this._template){if(!this._template.className){this._template.className="cart__list";document.querySelector(".cartLogo").addEventListener("click",this.toggle.bind(this))}this._items.length?(this._template.innerHTML="",this._items.forEach(t=>t.render(this.template)),this.totalTemplate()):this._template.innerHTML="\n              <div class='cart__empty'> \n              Корзина пустая :(\n              </div>"}}totalTemplate(){let t=document.querySelector(".cartTotal");t||(t=document.createElement("div"),t.className="cartTotal"),t.innerHTML=this.getTotalPrice(),this._template.appendChild(t)}}(document.querySelector(".cart")),l=(new class extends r{constructor(t,e){super(t,e),this.fetchData().then(this.render.bind(this))}fetchData(){return fetch("http://localhost:3000/dataBase/items.json").then(t=>t.json()).then(t=>{this._items=t.data.map(t=>new n(t,this._cart))})}get items(){return this._items}initTemplate(){this._template&&(this._template.className="items-list",this.items.forEach(t=>t.render(this._template)))}}(document.querySelector("main"),o),{id:1,reg:/^([a-z]+)/i,root:document.getElementById("inputName")}),c={id:2,reg:/^((\+7)|8)[\(]\1?([0-9]{3,4})[\)]\1?([0-9]{3})[\-]?([0-9]{4})/,root:document.getElementById("inputTelefone")};new a(l.id,l.reg,l.root),new a(c.id,c.reg,c.root)}]);