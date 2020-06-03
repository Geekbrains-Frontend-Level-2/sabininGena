<template>
  <div>
    <h1> Корзина </h1>
      <CartItems 
        v-for="id in getItemsInCart"
        :key="id"
         :id="id"
        />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItems from './CartItems.vue'
export default {
  data() {
        return {}
    },
    components: {
        CartItems,
    },
    computed: {
        ...mapGetters('goods', [
            'getItemsInCart'
        ])
    },
}
</script>

<style module>



</style>