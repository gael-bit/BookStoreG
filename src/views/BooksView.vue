<template>
  <ul class="d-flex flex-wrap" style="list-style-type: none;">
  <li v-for:="item in books"  :key="item.titl">
    <v-card
      class="ml-4 mt-12 mb-6 mr-10 pb-10"
      max-width="360"
      elevation="3"
    >
    
      <v-img
        height="215"
        :src="item.img"
      ></v-img>
  
      <v-card-title style="font-size: 1.6em;">{{ item.title }}</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1" style="font-weight: bold; font-size: 1.5em!important;">
          {{item.price}}€
        </div>
  
        <div>{{item.story}}</div>
      </v-card-text>

      <v-btn
        class=""
        color="success"
        @click="store.ajouterPanier(item)"
        style="left:29%;"
      >
      Acheter
      </v-btn>

      <div class="quantityButton">
        <v-btn 
        v-if="item.quantity > 1"
        class="ma-2"
        color="info"
        @click="item.quantity--"
      >
      -
      </v-btn>
      <v-btn 
        v-else
        class="ma-2"
        color="info"
      >
      -
      </v-btn>
      <v-btn
        class="ma-2"
        color="info"
      >
      Quantité : {{item.quantity}}
      </v-btn>

        <v-btn
        class="ma-2"
        color="info"
        @click="item.quantity++"
      >
      +
      </v-btn>

    </div>

    </v-card>
  </li>


</ul><!--
<img :src="item.img">
    {{ item.title }}
    {{item.price}}€
    <button @click="store.ajouterPanier(item)" class="acheter">Acheter</button>
    <div class="quantityButton">
      <button v-if="item.quantity > 1" class="quantite" style="font-size:1em; font-weight: bold;" @click="item.quantity--">-</button>
      <button v-else class="quantite" style="font-size:1em; font-weight: bold;">-</button>
      <p class="quantite">Quantité : {{item.quantity}}</p>
      <button class="quantite" style="font-size:1em;" @click="item.quantity++">+</button>
    </div>-->
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
  background-color: #2196f3;
  color:white;
}
</style>
