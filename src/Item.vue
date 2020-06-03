<template>
  <div :class="[$style.item]">

            <div :class="[$style.item__img]">
            <img :src="src" />
            </div>
            <div :class="[$style.item__meta]">Товар: <span>{{ title }}</span></div>
            <div :class="[$style.item__meta]">Цена: <span>{{ price }}</span></div>
            <!--<div :class="[$style.item__meta]" @click="updateAmount(id)">Кол-во: <span>{{ amount }}</span></div>-->
            <a  :class="[$style.buy]" @click="addToCart(id)" >Купить</a>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        id: Number,
    },
    methods: {       
        ...mapActions('goods', [
            'updateAmount',
            'addToCart',
        ])
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
.items-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
}

.item {
    padding: 4px;
    width: 200px;
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

.buy {
display: block;
font-size: 1.1em;
width:90px;
text-decoration:none;
text-align:center;
font: bold 14px arial;
text-transform: uppercase;
padding: 10px 15px;
margin: 20px auto;
color: #3ab115;
background-color: #af0514;
background-image: linear-gradient(top, #888 0%, #555 100%);
/*background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));*/
background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
background-image: -o-linear-gradient(top, #888 0%, #555 100%);
border: none;
border-radius: 3px;
text-shadow: 0px -1px 0px #000;
box-shadow: 0px 1px 0px rgb(175, 37, 37),0px 5px 0px rgb(161, 93, 93),0px 6px 6px rgba(238, 234, 234, 0.6);
-webkit-transition: ease .15s all;
-moz-transition: ease .15s all;
-o-transition: ease .15s all;
transition: ease .15s all;
-webkit-animation: none;
 -moz-animation: none;
 -o-animation: none;
  animation: none;
}
.buy:hover, .buy:focus{
-webkit-animation: linear 1.2s light infinite;
-moz-animation: linear 1.2s light infinite;
-o-animation: linear 1.2s light infinite;
animation: linear 1.2s light infinite;
}
@-webkit-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@-moz-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@-o-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
.buy:active{
color: #fff;
text-shadow: 0px -1px 0px #444,0px 0px 5px #ffd,0px 0px 8px #fff;
box-shadow: 0px 1px 0px #666,0px 2px 0px #444,0px 2px 2px rgba(0, 0, 0, .9);
-webkit-transform: translateY(3px);
-moz-transform: translateY(3px);
-o-transform: translateY(3px);
transform: translateY(3px);
-webkit-animation: none;
-moz-animation: none;
-o-animation: none;
animation: none;
}

</style>