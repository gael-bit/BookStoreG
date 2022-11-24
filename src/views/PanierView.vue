<template>

<section>
   <ul>
        <li v-for:="(item,index) in panier" :key="item.title">
            <v-card
                class="ml-4 mt-12 mb-6 mr-10 pb-4"
                max-width="460"
                elevation="3"
            >
    <div class="d-flex">
      <v-img
        height="255"
        :src="item.img"
      ></v-img>
      <div>   
        <v-card-title style="font-size: 1.6em;">{{ item.title }}</v-card-title>
    
        <v-card-text>
    
            <div class="my-4 text-subtitle-1" style="font-weight: bold; font-size: 1.5em!important;">
            <span> Prix : {{item.price}}€</span>
            </div>
        </v-card-text>

        <v-card-text>
    
        <div class="my-4 text-subtitle-1" style="font-weight: bold; font-size: 1.5em!important;">
        <span>Quantité :  {{item.quantity}}</span>
        </div>
        <v-btn
        class=""
        color="success"
        @click="store.supprimerDuPanier( index)"
      >
      Supprimer
      </v-btn>
    </v-card-text>
        </div>
    </div>

      


    </v-card><!--
        <img :src="item.img">
            {{ item.title }}
            {{item.price}}€
            <p>Quantité : {{item.quantity}}</p>
            <button @click="store.supprimerDuPanier( index)">supprimer</button>-->
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