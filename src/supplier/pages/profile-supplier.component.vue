<template>
  <div class="flex">
    <pv-card style="width: 25em" >
      <template #header>
        <img  :src="this.supplier.image"  alt="" style="height: 15rem" />
      </template>
      <template #title>
        {{supplier.supplierName}}
      </template>
      <template #subtitle>
        {{supplier.address}}
      </template>
      <template #content>
        <b>Name: </b> {{supplier.name}}<br>
        <b>Last Name:</b> {{supplier.lastName}}<br>
        <b>Email:</b> {{supplier.email}}<br>
        <b>Ruc:</b> {{supplier.ruc}}<br>
        <b>Category:</b> {{supplier.category}}<br>
        <b>Phone:</b> {{supplier.phone}}<br>
      </template>
      <template #footer>

        <pv-button v-on:click="editSupplier()" icon="pi pi-user-edit" label="Edit"  style="width: 100%"/>

      </template>
    </pv-card>
  </div>
</template>

<script>


import {useRoute} from "vue-router";
import {SuppliersApiService} from "@/supplier/services/suppliers-api.service";


export default {
  name: "profile-supplier.component",
  data() {
    return {
      supplier: {},// esta es la manera correcta // nunca poner null
      supplierService: null,
      id: Number,

    }
  },
  created() {
    const route= useRoute();
    this.id = route.params.id;
    this.getSupplier(this.id);
  },

  methods: {
    getSupplier(supplierId){
      this.supplierService = new SuppliersApiService();
      this.supplierService.getById(supplierId).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
        this.supplier = response.data;
      });

    },
    editSupplier(){
      this.$router.push({name: 'supplier-profile-edit'});
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
}

</style>