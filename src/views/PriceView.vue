<template>
    
    <div>
        <p>Prix : {{ store.price}} €</p>
    </div>

</template>

<script lang="ts" setup>

import{store} from '../store.js'


//console.log(order);


</script>

<style>
p{
    font-size: 2em;
    font-weight: bold;
}


</style>