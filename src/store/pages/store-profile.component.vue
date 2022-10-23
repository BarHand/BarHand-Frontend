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
        <router-link :to="{ name: 'store-profile-edit'}"><!--, id}-->
        <pv-button icon="pi pi-user-edit" label="Edit"  style="width: 100%"/>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<script>
import {StoresApiService} from "@/store/services/stores-api.service";

export default {
  name: "store-profile",
  data() {
    return {
      id:1,
      store: {},// esta es la manera correcta // nunca poner null
      storeService: null,

    }
  },
  created() {
    //const route= useRoute();
    this.id = 1;//route.params.id;

    //console.log(this.id)
    this.storeService = new StoresApiService();
    this.storeService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.store = response.data;
    });

  },
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