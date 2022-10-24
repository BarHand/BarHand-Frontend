<template>
  <pv-menubar :model="navigation">
    <template #start>
      <h1 style="margin: 5px ;   padding: 1px;  ">BarHand</h1>
    </template>


  </pv-menubar>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "TheNavigation",
  data() {

    return {
      isStore: null,
      navigation:[],

      navigationSupplier: [
        {label: "Home", icon: 'pi pi-fw pi-home'/*, to: `store/${id}/store-home`*/},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: "./about"},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: "/about"},
        {label: "Inventory", icon: 'pi pi-fw pi-box', to: "./warehouse"},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: "/customer-profile"},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      navigationStore: [
        {label: "Home", icon: 'pi pi-fw pi-home', to:"./store-home" },
        {label: "Orders", icon: 'pi pi-fw pi-book', to: "./store-orders"},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: "./store-home"},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: "./store-profile"},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      //`store/${this.storeId}/store-home`
    }
  },

  created() {
    const route = useRoute();
    this.isStore = route.path;
    console.log(this.isStore)
    var array= this.isStore.split('/')

    if(array[1] === 'supplier'){
      this.navigation = [
        {label: "Home", icon: 'pi pi-fw pi-home'/*, to: `store/${id}/store-home`*/},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: "./about"},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: "/about"},
        {label: "Inventory", icon: 'pi pi-fw pi-box', to: "./warehouse"},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: "./supplier-profile"},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ]
    }
    else{
      this.navigation = [
        {label: "Home", icon: 'pi pi-fw pi-home', to:"./store-home" },
        {label: "Orders", icon: 'pi pi-fw pi-book', to: "./store-orders"},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: "./store-home"},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: "./store-profile"},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ]
    }

  },
}
</script>


<style scoped>

</style>