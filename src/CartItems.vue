<template>
<div>
    <div>
   <div :class="[$style.cartItem]">
            <div :class="[$style.item__img]">
            <img :class="[$style.cartImg]" :src="src" />
            </div>
            <div :class="[$style.item__meta]">Товар: <span>{{ title }}</span></div>
            <div :class="[$style.item__meta]">Цена: <span>{{ price }}</span></div>

  </div>
  <!--<div :class="[$style.cartItem]">
      
      <span :class="[$style.minus]" @click="removeFromCart(id)">-</span>
      <span :class="[$style.counter]">{{ amount }}</span>
      <span :class="[$style.plus]" @click="updateAmount(id)">+</span>
  </div>
  

  <div :class="[$style.cartItem]">
      <span :class="[$style.sumItem]">{{ sumItem }}</span>
      </div>-->
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        id: String,
    },
    methods: {
        ...mapActions('goods', [
            'updateAmount',
            'removeFromCart'
        ])
    },
    computed: {
        ...mapGetters('goods', [
            'getCart',
            'getSumItem',
            'getData',
        ]),
        cart() {
            return this.getCart[this.id]
        },
        title(){
            return this.cart.title
        },
        price(){
           return this.cart.price
        },
        src(){
           return this.cart.src
        },
        amount(){
           return this.cart.amount || 0
        },
        sumItem(){
            return this.cart.sumItem || 0
        }
    }
}
</script>

<style module>
.sumItem {
    display: inline-block;
    width: 50px;
    height: 50px;
}
.counter{
    text-align: center;
    font-size: 40px;
    display: inline-block;
    width: 50px;
    height: 50px;
}
.plus{
    float: right;
}
.minus{
    float: left;
}
.plus,
.minus {
    cursor: pointer;
    text-align: center;
    font-size: 50px;
    display: inline-block;
    width: 50px;
    background-color: blue;
}
.cartItem {
    padding: 4px;
    max-width: 200px;
    background-color: rgb(235, 94, 13, 0.29);
    margin: 30px;
    display: inline-block;
}
.item:hover{
    background-color: rgb(235, 94, 13);
}
.item__meta {
    text-align: left;
    margin-left: 30px;
}
.cartImg {
    width: 50%;
}
</style>