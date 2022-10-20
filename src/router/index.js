import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'navbar',
      component: () => import('../views/navbar.vue')
    },
    {
      path:'/chat',
      name: 'chat',
      component:()=> import('../chats/chat.vue')
    }
    ]}
)

export default router
