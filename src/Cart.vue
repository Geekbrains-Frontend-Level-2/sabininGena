<template>
  <div>
    <h1> Корзина </h1>
      <CartItems 
        v-for="id in getItemsInCart"
        :key="id"
         :id="id"
        />
        <!--<Item 
        v-for="id in getItemsInCart"
        :key="id"
         :id="id"
        />-->
        <div :class="[$style.totalPrice]">{{ getTotalPrice }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
//import Item from './Item.vue'
import CartItems from './CartItems.vue'
export default {
  data() {
        return {}
    },
    components: {
        //Item,
        CartItems,
    },
    methods: {
        ...mapActions('goods', [
           'requestDataCart',
       ]),
    },
    computed: {
        ...mapGetters('goods', [
            'getItemsInCart',
            'getTotalPrice',
        ]),
    },
    mounted() {
        this.requestDataCart()
    },
}
</script>

<style module>
.totalPrice{
  margin: auto;
  text-align: center;
}


</style>