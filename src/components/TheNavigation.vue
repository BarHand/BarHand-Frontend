<template>
  <pv-menubar   :model="getUser()" class="mymenu" > <!--style="background-color: #457b9d"-->
    <template #start >
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
      user: String,
      navigationSupplier: [
        {label: "Home", icon: 'pi pi-fw pi-home', to: {name:'supplier-home'}},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: {name:'supplier-plan'}},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: {name:'notifications-supplier'}},
        {label: "Inventory", icon: 'pi pi-fw pi-box', to: {name:'supplier-inventory'}},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: {name:'profile-supplier'}},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      navigationStore: [
        {label: "Home", icon: 'pi pi-fw pi-home', to:{name:'store-home'}},
        {label: "Orders", icon: 'pi pi-fw pi-book', to:{name:'store-orders'}},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to:{name:'notifications-store'}},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: {name:'store-profile'}},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      //`store/${this.storeId}/store-home`
    }
  },
  created() {
    const route = useRoute();
    this.user= route.matched[0].path;
    this.user= this.user.substring(1, this.user.length-4)
  },
  methods:{
    getUser(){
      if(this.user==='supplier')
        return this.navigationSupplier
      else if (this.user==='store')
        return this.navigationStore
    },

  }
}

</script>


<style lang="scss" scoped >
::v-deep.mymenu{
  color: white;
  background-color: #457b9d;
  .p-menubar-start{
    margin-right: auto ;
  }

  .p-menuitem {
    background-color: #457b9d !important;
    color: white !important;

    .p-menuitem-icon{
      color: white !important;
    }
  }


}

</style>




