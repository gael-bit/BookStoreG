<template>
  <ul>
  <li v-for:="item in books"  :key="item.titl">
  <img :src="item.img">
    {{ item.title }}
    {{item.price}}€
    <button @click="store.ajouterPanier(item)" class="acheter">Acheter</button>
    <div class="quantityButton">
      <button v-if="item.quantity > 1" class="quantite" style="font-size:1em; font-weight: bold;" @click="item.quantity--">-</button>
      <button v-else class="quantite" style="font-size:1em; font-weight: bold;">-</button>
      <p class="quantite">Quantité : {{item.quantity}}</p>
      <button class="quantite" style="font-size:1em;" @click="item.quantity++">+</button>
    </div>
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

var compteur: any = ref(0);



onMounted(() => {
 
     axios
      .get('data.json') // comment recupère t-il data.json present dans public sans indiquer le chemin
      .then(response => books.value = response.data.books);
  
});


</script>



<style scoped>/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
img{
  width: 100px;
  height: 150px;
}

button{
  color: white;
  border-radius: 5%;
  padding : 0.2% 1% 0.2% 1%;
}
p{
  font-size: 1em;
  padding : 0.2% 1% 0.2% 1%;
}
.quantityButton{
  display:flex;
}
.acheter{
  background-color: rgb(103, 194, 43);
  
}

.quantite{
  background-color: rgb(228, 42, 42);
  color:white;
}
</style>
