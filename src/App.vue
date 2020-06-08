<template>
  <div>

      <header :class="[$style.header]">
    <a @click.prevent="onMainLinkClick">IceHockey shop!</a> 
    <a  @click.prevent="onCartLinkClick" ><CartLogo/></a>
  </header>
    <main>
      <div>
      
      
      </div>
      <div v-if="page === 'main'">
       <ListItem />
      </div>
      <Cart v-else-if="page === 'cart'"/>

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
import Cart from './Cart.vue'
import CartLogo from './CartLogo.vue'
import ListItem from './ListItem.vue'

export default {
    data() {
        return {
            page: 'main',
        }
    },

    components: {
        ListItem,
        CartLogo,
        Cart,
    },
    methods: {
       onCartLinkClick(){
           this.page = 'cart'
       },
       onMainLinkClick(){
           this.page = 'main'
       }
    },   
}
</script>

<style module>

    .header {
    background-color: rgb(235, 94, 13);
    color: rgb(233, 231, 124);
    font-size: 50px;
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