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
      path: "/sign-up",
      name: "sign-up",
      component: ()=>import('../security/page/sign-up.vue'),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: ()=>import('../security/page/sign-in.vue'),
    },
    {
      path: "/home-store",
      name: "home-store",
      component: ()=>import('../store/pages/home-store.component.vue'),
    },
    {
      path: "/profile-supplier/:id",
      name: "profile-supplier",
      component: ()=>import('../supplier/pages/profile-supplier.component.vue'),
    },
    {
      path: "/supplier-profile-edit/:id",
      name: "supplier-profile-edit",
      component: ()=>import('../supplier/pages/supplier-profile-edit.component.vue'),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: ()=>import('../store/pages/store-supplier-edit.component.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import('../store/pages/store-supplier-add.component.vue'),
    },

  ]
})

export default router
