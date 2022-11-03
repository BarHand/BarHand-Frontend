<template>


  <h3>Notifications</h3>

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
</style>