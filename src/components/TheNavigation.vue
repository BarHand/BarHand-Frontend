<template>
  <pv-menubar :model="navigationStore">
    <template #start>
      <h1 style="margin: 5px ;   padding: 1px;  ">BarHand</h1>
    </template>


  </pv-menubar>
</template>

<script>

export default {
  name: "TheNavigation",
  data() {

    return {
      navigationSupplier: [
        {label: "Home", icon: 'pi pi-fw pi-home'/*, to: `store/${id}/store-home`*/},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: "./about"},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: "/about"},
        {label: "Inventory", icon: 'pi pi-fw pi-box', to: "/store"},
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
}
</script>


<style scoped>

</style>