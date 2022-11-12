<template>
  <h1 class="header" style="text-align: center"> Add Product</h1>
  <div class="flex">
    <pv-card >
      <template #title>
        New Product
      </template>

      <template #content>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="product.name"/>
            <label for="inputtext">ProductName</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="product.category"/>
            <label for="inputtext">Category</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="product.image"/>
            <label for="inputtext">URL Image</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="text" v-model="product.description"/>
            <label for="inputtext">Description</label>
          </span>
          </div>
          <div class="field col-12 md:col-6">
          <span class="p-float-label">
            <pv-input-text style="height: 10px;" id="inputtext" type="number" v-model="product.price"/>
            <label for="inputtext">Price</label>
          </span>
          </div>
        </div>
      </template>
      <template #footer>
        <!-- <router-link :to="{ name: 'store-profile'}">--> <!--, id}-->
        <pv-button  v-on:click="saveData" icon="pi pi-save" label="Save" style="width: 100%"/>
        <!-- </router-link>-->
      </template>
    </pv-card>
  </div>
  <GoBack/>
</template>

<script>
import {ProductsApiService} from "@/inventory/services/products-api.service";
import {useRoute} from "vue-router";
import {StoresApiService} from "@/store/services/stores-api.service";
import GoBack from "@/components/GoBack.vue";

export default {
  name: "supplier-inventory-add",
  components: {GoBack},
  data() {
    return {
       product:
          {
            name: "",
            category: "",
            image: "",
            available: true,
            description: "",
            supplierID: null,
            rating: 1,
            price: Number,
          },
      productService: null,
      products: null,
    }
  },
  created() {
    const route = useRoute();
    this.product.supplierID = parseInt(route.params.id);
    console.log(this.product.supplierID)


    //console.log(this.id)
    this.productService = new StoresApiService();
    this.productService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.product = response.data;
      this.imgOld = this.product.image;
    })
  },
  methods: {
    saveData(){
      this.productService = new ProductsApiService();
      this.productService.create(this.product).then((response) => {
      });
      this.$router.push({name: 'supplier-inventory'}); //redirect
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