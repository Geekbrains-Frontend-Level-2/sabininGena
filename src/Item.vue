<template>
  <div :class="[$style.item]">

            <div :class="[$style.item__img]">
            <img :src="src" />
            </div>
            <div :class="[$style.item__meta]">Товар: <span>{{ title }}</span></div>
            <div :class="[$style.item__meta]">Цена: <span>{{ price }}</span></div>
            <!--<button class='buy'>Купить</button>-->

  </div>
</template>

<script>
export default {
    props: {
        title: String,
        price: Number,
        src: String
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