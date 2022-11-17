<template>

<section>
   <ul>
        <li v-for:="(item,index) in panier" :key="item.title">
        <img :src="item.img">
            {{ item.title }}
            {{item.price}}€
            <button @click="store.supprimerDuPanier( index)">supprimer</button>
        </li>
    </ul>
    
    <Price class="price"/>
</section>

</template>

<script lang="ts" setup>

import{store} from '../store.js'
import { onMounted, ref, reactive } from 'vue';
import Price from './PriceView.vue';

components: {
    Price
}
const panier = store.order;

//console.log(order);


</script>

<style scoped>

.price{
    position: fixed;
    margin-left: 30%;
}

section{
    display : flex;
}
ul{
    width: 30%;
}
img{
  width: 100px;
  height: 150px;
}

button{
  background-color: rgb(236, 57, 33);
  color: white;
  border-radius: 5%;
  padding : 0.2% 1% 0.2% 1%;
}
</style>