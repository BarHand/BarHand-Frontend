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
          path: "store-profile",
          name: "store-profile",
          component: ()=>import('../store/pages/store-profile.component.vue'),
        },
        {
          path: "store-orders",
          name: "store-orders",
          component: ()=>import('../store/pages/store-orders.vue'),
        },
        {
          path: "store-profile-edit",
          name: "store-profile-edit",
          component: ()=>import('../store/pages/store-profile-edit.component.vue'),
        },

      ]
    },

    {
      path: "/supplier/:id",
      name: "supplier",
      component: ()=>import('../store/pages/store.component.vue'),
      children:[
        {
          path: "supplier-profile",
          name: "supplier-profile",
          component: ()=>import('../supplier/pages/profile-supplier.component.vue'),
        },
        {
          path: "supplier-profile-edit",
          name: "supplier-profile-edit",
          component: ()=>import('../supplier/pages/supplier-profile-edit.component.vue'),
        },
        {
          path: "warehouse",
          name: "warehouse",
          component: ()=>import('../supplier/pages/supplier-warehouse.component.vue'),
        },
        {
          path: "edit/:item",
          name: "edit",
          component: ()=>import('../supplier/pages/supplier-warehouse-edit.vue'),
        },
        {
          path: 'add',
          name: 'add',
          component: ()=>import('../supplier/pages/supplier-warehouse-add.component.vue'),
        },
      ]
    },
    {
      path: "/inventory",
      name: "view-inventory",
      component: ()=>import('../inventory/pages/view-inventory.vue'),
    },


  ]
})

export default router
