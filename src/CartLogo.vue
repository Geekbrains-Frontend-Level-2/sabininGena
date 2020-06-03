<template>

<div>
  <div :class="[$style.cart]">
    <div :class="[$style.cartLogo]">Корзина
        <span :class="[$style.cartCounter]">{{ getCounter }}</span></div> 
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            //counter: 0,
        }
    },
    computed: {
        ...mapGetters('goods', [
            'getCounter'
        ])
    },

}
</script>

<style module>

    .cart {
    position: relative;
    color: rgb(233, 231, 124);
    font-size: 40px;
    margin-top: -58px;
    float: right;
    margin-right: 10px;
}

.cartCounter{
    width: 20px;
    text-align: center;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    color: #1b00ff;
    right: -10px;
    top: 0px;
    font-size: 20px;
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