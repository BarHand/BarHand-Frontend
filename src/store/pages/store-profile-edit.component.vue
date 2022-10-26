<template>
  <div class="flex">
    <pv-card >
      <template #header>
        <img :src="this.imgOld" alt="" style="height: 15rem"/>
      </template>
      <template #title>
        Edit Profile
      </template>

      <template #content>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.storeName"/>
            <label for="inputtext">StoreName</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.name"/>
            <label for="inputtext">Name</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.lastName"/>
            <label for="inputtext">LastName</label>
          </span>
          </div>

          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.email"/>
            <label for="inputtext">Email</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.phone"/>
            <label for="inputtext">Phone</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.address"/>
            <label for="inputtext">Address</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="store.image"/>
            <label for="inputtext">ImageUrl</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
            <span class="p-float-label">
              <pv-password style="height: 10px;" id="password" v-model="store.password" />
              <label for="password">Password</label>
            </span>
          </div>
        </div>
      </template>
      <template #footer>
       <!-- <router-link :to="{ name: 'store-profile'}">--> <!--, id}-->
          <pv-button  v-on:click="editData" icon="pi pi-save" label="Save" style="width: 100%"/>
       <!-- </router-link>-->
      </template>
    </pv-card>
  </div>
</template>

<script>
import {StoresApiService} from "@/store/services/stores-api.service";
import {useRoute} from "vue-router";

export default {
  name: "store-profile-edit",
  data() {
    return {
      id: 1,
      store: {},
      imgOld:'',
      storeService: null,

    }
  },
  created() {
    const route= useRoute();
    this.id = route.params.id;

    //console.log(this.id)
    this.storeService = new StoresApiService();
    this.storeService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.store = response.data;
      this.imgOld=this.store.image;

    });

  },
  methods: {
    editData(){
      this.storeService = new StoresApiService();
      this.storeService.update(this.id, this.store).then((response) => {
      });
     this.$router.push({name: 'store-profile'}); //redirect
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  .p-card {
    width: 30em;

  }
}
</style>