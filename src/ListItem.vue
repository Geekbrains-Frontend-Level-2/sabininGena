<template>
  <div>
      <h1>Список товаров</h1>
    <Item 
        v-for="id in getItemsOnPage"
        :key="id"
         :id="id"
        />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from './Item.vue'
export default {
    data() {
        return {}
    },
    components: {
        Item,
    },
    methods: {
        ...mapActions('goods', [
           'requestData'
       ]),
    },
    computed: {
        ...mapGetters('goods', [
            'getItemsOnPage'
        ])
    },
    mounted() {
        this.requestData()
    }, 
}
</script>

<style>

</style>