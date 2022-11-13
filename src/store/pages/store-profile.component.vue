<template>
  <div class="flex">
    <pv-card style="width: 25em" >
      <template #header>
        <img  :src="this.store.image"  alt="" style="height: 15rem" />
      </template>
      <template #title>
        {{store.storeName}}
      </template>
      <template #subtitle>
        {{store.address}}
      </template>
      <template #content>
        <b>Name: </b> {{store.name}}<br>
        <b>Last Name:</b> {{store.lastName}}<br>
        <b>Email:</b> {{store.email}}<br>
        <b>Phone:</b> {{store.phone}}<br>
      </template>
      <template #footer>

        <pv-button v-on:click="editStore()" icon="pi pi-user-edit" label="Edit"  style="width: 100%"/>

      </template>
    </pv-card>
  </div>
</template>

<script>
import {StoresApiService} from "@/store/services/stores-api.service";
import {useRoute} from "vue-router";

export default {
  name: "store-profile",
  data() {
    return {
      store: {},// esta es la manera correcta // nunca poner null
      storeService: null,
      id: Number,

    }
  },
  created() {
    const route= useRoute();
    this.id = route.params.id;
    this.getStore(this.id);
  },

  methods: {
    getStore(storeId){
      this.storeService = new StoresApiService();
      this.storeService.getById(storeId).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
        this.store = response.data;
      });

    },
    editStore(){
      this.$router.push({name: 'store-profile-edit'});
    }
}
}
</script>

<style scoped>
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
 /*background-color: #9acb3c;*/
}
</style>