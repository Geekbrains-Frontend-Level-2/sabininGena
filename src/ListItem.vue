<template>
  <div>
      <h1>Список товаров</h1>
    <Item 
        v-for="id in getItemsOnPage"
        :key="id"
         :id="id"
        />

    <div>
        <input type="text" placeholder="title" v-model="title"> <br>
        <input type="text" placeholder="price" v-model="price"><br>
        <button @click="onClick">add to items</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from './Item.vue'
export default {
    data() {
        return {
            title: '',
            price: '',
        }
    },
    components: {
        Item,
    },
    methods: {
        ...mapActions('goods', [
           'requestData',
           'onClickItem'
       ]),
       onClick () {
           const { title, price } = this
           this.onClickItem({ title, price })
       }
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