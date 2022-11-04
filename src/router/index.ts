import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import CartView from '../views/CartView.vue'
import Panier from '../views/PanierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: BooksView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier
    }
  ]
})

export default router
