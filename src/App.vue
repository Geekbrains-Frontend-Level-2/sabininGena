<template>
  <div>

      <header :class="[$style.header]">
    <span>IceHockey shop!</span> 
  </header>
  <div :class="[$style.cart]">
    <span :class="[$style.cartLogo]">Корзина</span> 
    </div>
    <main>
      <div>
      <h1>Список товаров</h1>
      
      </div>
       <Item
        v-for="id in getItemsOnPage"
        :key="id"
         :id="id"
        />
    </main>
    <form action="form">
      <input type="text" placeholder="Ваше имя: " id="inputName">
      <span id="inputProblem1" class="inpP"></span>
      <input type="tel" placeholder="+7(999)999-7755" id="inputTelefone">
      <span id="inputProblem2" class="inpP"></span>
      <input type="email" placeholder="my.mail@mail.ru" id="inputMail">
      <span id="inputProblem3" class="inpP"></span>
      <input type="submit" class="submit">
      <input type="reset" class="reset">
    </form>

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
       ])
    },   
    computed: {
        ...mapGetters('goods', [
            'getItemsOnPage'
        ])
    },
    mounted() {
        this.requestData()
    }    
}
</script>

<style module>

    .header {
    background-color: rgb(235, 94, 13);
    color: rgb(233, 231, 124);
    font-size: 50px;
}

.cart {
    background-color: rgb(8, 41, 185);
    color: rgb(233, 231, 124);
    font-size: 40px;
    margin-top: -58px;
    float: right;
}

.CartItems {
    font-size: 22px;
    background-color: #fff;
    color: black;
}

.cart__list {
    background-color: #fff;
    font-size: 15px;
    color: blue;
    display: none;
}

.cart__list.shown {
    display: block;
}

.btnDelete {
    color: #fff;
    background-color: red;
    width: 20px;
    display: inline-block;
    text-align: center;
    font-size: large;
}
.btnDelete:hover {
    cursor: pointer;
}

form {
    margin-top: 50px;
    width: 200px;
}

input{
    display: block;
    margin: 10px 0;
}

.submit,
.reset{
    display: inline-block;
}

.inpP{
    color: red;
    font-size: 10px;
    display: block;
}

@media all and (max-width: 576px) {
    .items-list {
        grid-template-columns: 1fr;
    }
}
@media (min-width: 576px) and (max-width: 992px) {
    .items-list {
        grid-template-columns: repeat(2, 1fr);
    }
    
}
@media (min-width: 992px) {
    
}

</style>