<template>
  <ul>
  <li v-for:="item in books" >
  <img :src="item.img">
    {{ item.title }}
    {{item.price}}€
    <button @click="store.ajouterPanier(item)">Acheter</button>
  </li>
</ul>
</template>

<script lang="ts" setup>////////////////////////////////////////////////////////////////////////////////////////////////////

import { onMounted, ref, reactive} from 'vue';
import axios from "axios";
import {store} from '../store.js'

const books: any = ref(); 
const order = reactive({
  title : '',
  price: 0,
  img: ""
});


onMounted(() => {
 
     axios
      .get('data.json') // comment recupère t-il data.json present dans public sans indiquer le chemin
      .then(response => books.value = response.data.books);
  
});


function ajouterPanier(book){
    order.title = book.title;
    order.price = book.price;
    order.img = book.img;
    console.log(store.order);


}


</script>



<style scoped>/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
img{
  width: 100px;
  height: 150px;
}

button{
  background-color: rgb(103, 194, 43);
  color: white;
  border-radius: 5%;
  padding : 0.2% 1% 0.2% 1%;
}
</style>
