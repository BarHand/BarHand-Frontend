<template>

  <h1></h1>
  <div class="grid center-screen  card-div"  v-if="notifications === null">
    <pv-card class="col-7 card-list  ">
      <template #title >
        Todo en orden !
        <br>
        No tiene notificaciones pendientes
        <br>
      </template>
      <template #content>
        <img src="https://cdn.discordapp.com/attachments/959280112279379968/1040804378401067109/unknown.png" alt="allGoodImg" class=" align-items-center justify-content-center">
      </template>

    </pv-card>
  </div>
  <div class="grid center-screen ">
    <div class="col-7 card-div" v-for=" (store,index) in notifications" :key="store">
      <pv-card class=" card-list  ">
        <template #title>
          {{store?.title }}
          <pv-button icon="pi pi-check" class="p-button-rounded" />
        </template>
        <template #content>
          by: {{suppliers[index]?.name}}
        </template>
        <template #footer>
          {{store?.time }} hour ago
        </template>

      </pv-card>

    </div>


  </div>

</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import {SuppliersApiService} from "../../supplier/services/suppliers-api.service";
import {StoresApiService} from "../services/stores-api.service";

export default {
  name: "store-notifications.component",
  data() {
    return {
      id: Number,
      supplierService: null,
      storeService: null,
      store:{},
      suppliers:[],
      notifications: null,


    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    console.log(this.id)

    this.storeService = new StoresApiService();
    this.storeService.getById(this.id).then((response) => {
      this.store = response.data;
      this.notifications = this.store.notifications;

      this.notifications.forEach((element)=> {
        this.supplierService = new SuppliersApiService();
        this.supplierService.getById(element.supplierId).then((response) => {
          this.suppliers.push(response.data);


        });
      })
      console.log(this.suppliers)
    });



  },




}
</script>

<style scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}
img{
  width: 50%;
}
</style>