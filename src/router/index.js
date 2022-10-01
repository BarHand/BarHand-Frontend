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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/navbar.vue')
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: ()=>import('../security/page/sign-up.vue'),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: ()=>import('../security/page/sign-in.vue'),
    },
  ]
})

export default router
