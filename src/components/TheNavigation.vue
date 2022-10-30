<template>
  <pv-menubar   :model="navigationStore" class="mymenu" > <!--style="background-color: #457b9d"-->
    <template #start >
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
        {label: "Home", icon: 'pi pi-fw pi-home', to: {name:'supplier-home'}},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: {name:'supplier-home'}},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to: {name:'supplier-home'}},
        {label: "Inventory", icon: 'pi pi-fw pi-box', to: "{name:'supplier-home'}"},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: "{name:'profile-supplier'}"},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      navigationStore: [
        {label: "Home", icon: 'pi pi-fw pi-home', to:{name:'store-home'}},
        {label: "Orders", icon: 'pi pi-fw pi-book', to:{name:'store-orders'}},
        {label: "Notification", icon: 'pi pi-fw pi-bell', to:{name:'store-home'}},
        {label: "Profile", icon: 'pi pi-fw pi-user', to: {name:'store-profile'}},
        {label: "Sign out", icon: 'pi pi-fw pi-sign-out', to: "/"},
      ],
      //`store/${this.storeId}/store-home`
    }
  },
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




