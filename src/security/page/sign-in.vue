<template>
  <body >
  <div class="flex">
    <pv-card style="width: 30em">
      <template #title>
        <h2 class="font-light">Hello</h2>
        <label class="font-light">Welcome to Barhand</label>
      </template>
      <template #content>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-5">
              <div class="p-fluid">
                <div class="field">
                  <label for="username">Username</label>
                  <pv-input-text style="height: 15px;" id="username" type="text" v-model="this.userName"/>
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <pv-input-text style="height: 15px;" id="password" type="password" v-model="this.password"/>
                </div>
                <div class="field">
                  <span class="details"> Type User :  </span>
                  <pv-select-button style="height: 25px;" v-model="typeUser" :options="optionsUser"
                                    aria-labelledby="single"/>
                </div>
                <!-- <RouterLink to="/store-home">-->
                 <pv-button style="height: 30px;"  label="Login" v-on:click="validate()"></pv-button>
                <!--</RouterLink>-->
              </div>
            </div>
          <div class="field col-12 md:col-2">
              <pv-divider layout="vertical">
                <b class="text-black-alpha-80">OR</b>
              </pv-divider>
            </div>

          <div class="field col-12 md:col-5">
             <RouterLink to="/sign-up">
                 <pv-button label="Sign Up" icon="pi pi-user-plus" class="p-button-success" v-on:keydown="validate()"   > </pv-button>
               </RouterLink>
            </div>
        </div>
      </template>
    </pv-card>
  </div>
  </body>
</template>
<script>
import {StoresApiService} from "@/store/services/stores-api.service";
import {SuppliersApiService} from "@/supplier/services/suppliers-api.service";

export default {
  name: "sign-in.component",
  data() {
    return {
      id:Number,

      user:{},
      userName:'',
      password:'',
      typeUser: 'Store',
      optionsUser: ['Store', 'Supplier'],
      stores: null,
      storeService: null,
      suppliers: null,
      supplierService: null,
    }
  },
  created() {
    this.storeService = new StoresApiService();
    this.storeService.getAll().then((response) => {
      this.stores = response.data;
    });
    this.supplierService = new SuppliersApiService();
    this.supplierService.getAll().then((response) => {
      this.suppliers = response.data;
    });
  },
  methods: {
    validate(){
      if (this.typeUser==="Supplier") {
        console.log(this.userName);
        console.log(this.password);
        this.user = this.suppliers.find(supplier =>
            supplier.name === this.userName && supplier.password === this.password);
        this.id = Number(this.user.id);
        this.$router.push({path: `/supplier/${this.id}/supplier-profile`});
      } else if (this.typeUser==="Store"){
        this.user= this.stores.find(store=>
           store.name === this.userName && store.password===this.password);
         this.id=Number(this.user.id);

         this.$router.push({path: `/store/${this.id}/store-profile`});
      }
    },

  }

};
</script>

<style scoped>

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  height: 100%;
}
body { min-height: 100vh;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(136,59,73,1) 28%, rgba(90,30,158,1) 69%, rgba(58,169,191,1) 98%);}



</style>
