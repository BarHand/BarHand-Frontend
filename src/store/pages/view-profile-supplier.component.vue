<template>
  <h1>view-profile-supplier</h1>
  {{supplierId}}
  <div class="flex">
    <div class="p-fluid grid">
      <div class="field col-12 md:col-4">
      <pv-card class="supplierCard">
        <template #header>
          <h2>{{ supplierData.supplierName}}</h2>
          <img :src="supplierData.image">
        </template>

        <template #content>
          <p>Person in charge: {{supplierData.name+''+supplierData.lastName}}</p>
          <p>Category: {{supplierData.category}}</p>
          <p>Address: {{supplierData.address}}</p>
          <p>Email: {{supplierData.email}}</p>
          <p>Phone: {{supplierData.phone}}</p>
          <p>RUC: {{supplierData.ruc}}</p>
        </template>

      </pv-card>
    </div>
      <div class="field col-12 md:col-4">
        <pv-card class="description">
          <template #title>
            Description
          </template>
          <template #content>
            <p>{{supplierData.description}}</p>
          </template>
        </pv-card>
      </div>
      <div class="rating">
        <pv-card class="Ratting">
          <template #title>
            Rating
          </template>
          <template #content>
          <pv-rating v-model="this.supplierData.rating" :readonly="true" :cancel="false"/>
          </template>
        </pv-card>
      </div>
      <div class="buttons">
        <pv-button label="Products"  v-on:click="isVisibleProducts()"></pv-button>
      </div>
      <div class="buttons">
        <pv-button icon="pi pi-heart" class="p-button-rounded p-button-help"></pv-button>
      </div>
    </div>
  </div>

  <pv-card class="comments">
    <template #title>
      Comments:
    </template>
    <template #content>
      <h2> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
    </template>
  </pv-card>
  <div>

  </div>
  <productBySupplier v-if="isVisible===true"></productBySupplier>



</template>

<script>
import {useRoute} from "vue-router";
import {SuppliersApiService} from "@/supplier/services/suppliers-api.service";
import productBySupplier from "@/inventory/components/product-by-supplier.vue";

export default {
  name: "view-profile-supplier.component",
components:{productBySupplier},


  data(){
    return{
      supplierId: Number,
      supplierData:{},
      supplierService: null,
      isVisible:false,
    }
  },
  created() {
    const route = useRoute();
    this.supplierId = route.params.sId;
    this.getSupplier(this.supplierId);
  },
  methods: {
    getSupplier(idSupplier) {
      this.supplierService = new SuppliersApiService();
      this.supplierService .getById(idSupplier).then((response)=>{
        this.supplierData=response.data;
      });
    },

    isVisibleProducts(){
      if (this.isVisible===false)
        return this.isVisible=true;
      else return this.isVisible=false;

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
  height: 100%;

}
.p-fluid{
  align-items: center;
  justify-content: center;
}
.supplierCard{
  background-color: #424242  ;
  color: white ;
}
.description{
  background-color: #424242  ;
  color: white ;
}
.Ratting{
  background-color: #424242  ;
  color: white ;
}
.buttons{
  padding: 20px;
}
.comments{
  background-color: #424242  ;
  color: white ;
}

</style>