<template>
<div>
  <div :class="[$style.cart]">
    <span :class="[$style.cartLogo]">Корзина</span> 
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    

}
</script>

<style module>
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
</style>