<template>
  <h1></h1>
  <div class="grid center-screen  card-div"  v-if="notifications === null">
    <pv-card class="col-7 card-list  ">
    <template #title >
      All good !
      <br>
      You dont have pending notifications
      <br>
    </template>
      <template #content>
        <img src="https://cdn.discordapp.com/attachments/959280112279379968/1040804378401067109/unknown.png" alt="allGoodImg" class=" align-items-center justify-content-center">
      </template>

  </pv-card>
  </div>
  <div class="grid center-screen ">
    <div class="col-7 card-div" v-for=" (supplier,index) in notifications" :key="supplier" >
      <pv-card class=" card-list  ">
        <template #title >
          {{supplier?.title }}
          <pv-button icon="pi pi-check" class="p-button-rounded" />
        </template>
        <template #content>
          by: {{stores[index]?.name}}
        </template>
        <template #footer>
          {{supplier?.time }} hour ago
        </template>

      </pv-card>

    </div>


  </div>

</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import {SuppliersApiService} from "../services/suppliers-api.service";
import {StoresApiService} from "../../store/services/stores-api.service";

export default {
  name: "supplier-notifications.component",
  data() {
    return {
      id: Number,
      supplierService: null,
      storeService: null,
      supplier:{},
      stores:[],
      notifications: null,


    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    console.log(this.id)

    this.supplierService = new SuppliersApiService();
    this.supplierService.getById(this.id).then((response) => {
      this.supplier = response.data;
      this.notifications = this.supplier.notifications;

      this.notifications.forEach((element)=> {
        this.storeService = new StoresApiService();
        this.storeService.getById(element.storeId).then((response) => {
          this.stores.push(response.data);


        });
      })
      console.log(this.stores)
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