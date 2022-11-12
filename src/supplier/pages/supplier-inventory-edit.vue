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
        <pv-button  v-on:click="editData" icon="pi pi-save" label="Save" style="width: 100%"/>
        <!-- </router-link>-->
      </template>
    </pv-card>
  </div>
  <GoBack/>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
import {useRoute} from "vue-router";
import {ProductsApiService} from "@/inventory/services/products-api.service";
export default {
  name: "supplier-inventory-edit",
  components: {GoBack},
  data() {
    return {
      id: Number,
      product: {},
      imgOld:'',
      productService: null,
    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;


    //console.log(this.id)
    this.productService = new ProductsApiService();
    this.productService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.product = response.data;
      this.imgOld = this.product.image;
    })
  },
  methods: {
    editData(){
      this.productService = new ProductsApiService();
      this.productService.update(this.id, this.product).then((response) => {
      });
      this.$router.push({name: 'supplier-inventory',params:{id:this.product.supplierID}}); //redirect
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
  .p-card {
    width: 30em;

  }
}
</style>