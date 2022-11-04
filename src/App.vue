<template>
    <v-app>
      <v-main>
          <v-navigation-drawer permanent>
              <v-list-item>
                  <v-list-item-content>
                      <v-list-item-title class="text-h6">
                      BooksStore
                      </v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
          <RouterView/>
      </v-main>
    </v-app>
  </template>
  
  <script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted, reactive } from 'vue'
  import axios from 'axios';

  const menuItems= ref([
            { title: 'books', path: '/' },
            { title: 'cart', path: '/cart' },
            {title: 'panier', path: '/panier'}
  
       ])
      
     
  </script>
  