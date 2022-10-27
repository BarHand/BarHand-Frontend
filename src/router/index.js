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
      path: "/store/:id",
      name: "store",
      component: ()=>import('../store/pages/store.component.vue'),
      children:[
        {
          path: "store-home",
          name: "store-home",
          component: ()=>import('../store/pages/store-home.component.vue'),
        },
        {
          path: "sProfile",
          name: "store-profile",
          component: ()=>import('../store/pages/store-profile.component.vue'),
        },
        {
          path: "store-orders",
          name: "store-orders",
          component: ()=>import('../store/pages/store-orders.vue'),
        },
        {
          path: "sProfile-edit",
          name: "store-profile-edit",
          component: ()=>import('../store/pages/store-profile-edit.component.vue'),
        },
        {
          path: "product-view/:pId",
          name: "product-view",
          component: ()=>import('../inventory/pages/product-view-store.vue'),
        },
        {
          path: "view-supplier-profile/:sId",
          name: "view-supplier-profile",
          component: ()=>import('../store/pages/view-profile-supplier.component.vue'),
        } ,
        {
          path: "view-products/:search",
          name: "view-all-products",
          component: ()=>import('../inventory/pages/store-view-all-products.component.vue'),
        }
      ]
    },

    {
      path: "/profile-supplier/:id",
      name: "profile-supplier",
      component: ()=>import('../supplier/pages/profile-supplier.component.vue'),
    },

    {
      path: "/supplier-profile-edit",
      name: "supplier-profile-edit",
      component: ()=>import('../supplier/pages/supplier-profile-edit.component.vue'),
    },



  ]
})

export default router
