<template>
  <div>
    <pv-menubar :model="navigation" class="bg-blue-200 flex">
      <template #start>
        <div class = "flex">
          <div class="m-3">
            <RouterLink to="/home-store">
              <h1 class="font-medium">BarHand</h1>
            </RouterLink>

          </div>
        </div>
      </template>
      <template #end>
        <div class="flex">
          <div class="m-3 search-input w-full">
            <pv-input-text
                v-model="search"
                class="border-round p-3 px-3 w-full"
                placeholder="Search here..." />
          </div>
          <div class="flex align-items-center justify-content-center cursor-pointer profile text-center">
            <pv-menubar :model="accountMenu"></pv-menubar>
            <pv-avatar image="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=128"  class="mr-2" size="large" shape="circle" />
            <span>Formula I</span>
          </div>
        </div>
      </template>
    </pv-menubar>
  </div>
</template>

<script>
export default{
  name: 'mechanic-header',
  data(){
    return{
      navigation:[
        { label: "Mis datos",icon:'pi pi-fw pi-user-edit', to: "/about" },
        { label: "Productos", icon:'pi pi-fw pi-shopping-cart',to: "/about" },
        { label: "Clientes", icon:'pi pi-fw pi-users', to: "/about" },
        { label: "Almacén", icon:'pi pi-fw pi-box', to: "/about" },

      ],
      accountMenu: [{
        items: [
          { label: "Profile", to: "/customer-profile", icon: 'pi pi-fw pi-user'},
          { label: "Sign out", to: "/", icon: 'pi pi-fw pi-sign-out' },
        ]
      }
      ]
    }
  },
  methods: {
    toggleMenu(){

    }
  }
}
</script>

<style>
.p-menubar-end{
  width:100%;
}
.profile > div{
  padding:0px;
  border:0;
}
@media only screen and (max-width: 992px) {
  .p-menubar-start{
    width: 100% !important;
  }
  .search-input{
    display:none;
  }
}
</style>