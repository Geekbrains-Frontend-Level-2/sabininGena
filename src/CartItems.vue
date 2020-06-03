<template>
<div>
   <div :class="[$style.cartItem]">

            <div :class="[$style.item__img]">
            <img :src="src" />
            </div>
            <div :class="[$style.item__meta]">Товар: <span>{{ title }}</span></div>
            <div :class="[$style.item__meta]">Цена: <span>{{ price }}</span></div>
            <!--<div :class="[$style.item__meta]" @click="updateAmount(id)">Кол-во: <span>{{ amount }}</span></div>-->

  </div>
  <div :class="[$style.cartItem]">
      <span :class="[$style.plus]">+</span>
      <span :class="[$style.counter]"></span>
      <span :class="[$style.minus]">-</span>
  </div>
  

  <div :class="[$style.cartItem]">
      <span :class="[$style.sumItem]"></span>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {}
    },
    props: {
        id: Number,
    },
    computed: {
        ...mapGetters('goods', [
            'getData'
        ]),
        data() {
            return this.getData[this.id]
        },
        title(){
            return this.data.title
        },
        price(){
           return this.data.price
        },
        src(){
           return this.data.src
        },
        amount(){
           return this.data.amount || 0
        },
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
    float: left;
}
.minus{
    float: right;
}
.plus,
.minus {
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
img {
    object-fit: fill;
    height: 200px;
    width: 100%;
}
</style>