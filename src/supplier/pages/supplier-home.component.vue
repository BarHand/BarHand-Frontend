<template>
  <pv-card class="homeCard" >
    <template #title >
      <h1 >Hello {{storeData.name}} {{storeData.lastName}}</h1>
      <p  style=" font-size: 20px;">We are happy to continue working with <b>{{storeData.storeName}}</b></p>
    </template>

  </pv-card>

</template>

<script>
import {useRoute} from "vue-router";
import {ProductsApiService} from "@/inventory/services/products-api.service";
import {StoresApiService} from "@/store/services/stores-api.service";

export default {
  name: "supplier-home.component",
  data() {
    return {
      id: Number,
      products: [],
      productService: null,
      supplierData: {},
      suppliersService: null,
    }
  },
  created() {
    const route = useRoute();
    this.id  = route.params.id;
    this.getSupplierById(this.id);
  },
  methods: {
    viewStore(){
      this.$router.push({name: 'view-all-products', params:{search:this.searchProduct}});
    },
    getBestProduct(){
      this.productService = new ProductsApiService();
      this.productService.getAll().then((response) => {
        this.products = response.data;
        this.products=this.products.filter( x=>{
          return String(x.rating)=== '5' //return products with 5 stars
        } )
      });
    },
    getSupplierById(id){
      this.storesService= new StoresApiService();
      this.storesService .getById(id).then((response)=>{
        this.storeData=response.data;
      });
      console.log("created")
    },
  }
}
</script>

<style scoped>
.homeCard{
  overflow:auto;
  padding-top: calc(10rem - 4.5rem);
  padding-bottom: calc(10rem - 4.5rem);
  background-image: linear-gradient(to bottom, rgba(26, 26, 26, 0.5) 0%,
  rgba(38, 38, 38, 0.5) 100%), url("https://1.cms.s81c.com/sites/default/files/2021-09-09/Supply-chain-store-engagement-leadspace-2000x500.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

</style>