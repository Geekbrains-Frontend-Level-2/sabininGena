<template>
  <div :class="[$style.item]" @click="updateAmount(id)">

            <div :class="[$style.item__img]">
            <img :src="src" />
            </div>
            <div :class="[$style.item__meta]">Товар: <span>{{ title }}</span></div>
            <div :class="[$style.item__meta]">Цена: <span>{{ price }}</span></div>
            <div :class="[$style.item__meta]">Кол-во: <span>{{ amount }}</span></div>
            <!--<button class='buy' @click="add">Купить</button>-->

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        id: Number,
    },
    methods: {
        // add(){},
        ...mapActions('goods', [
            'updateAmount'
        ])
    },
    computed: {
        ...mapGetters('goods', [
            'getData'
        ]),
        data () {
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
.items-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
}

.item {
    width: 200px;
    background-color: rgb(223, 206, 206);
    margin: 30px;
    display: inline-block;
}
.item:hover{
    background-color: #fff;
}
.item__meta {
    text-align: left;
    margin-left: 30px;
}
img {
    width: 100%;
}

button {
    float: right;
}
</style>