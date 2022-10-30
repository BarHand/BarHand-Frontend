<template>
  <pv-card class="homeCard" >
    <template #title >
      <h1 >Hello {{supplierData.name}} {{supplierData.lastName}}</h1>
      <p  style=" font-size: 20px;">We are happy to continue working with <b>{{supplierData.supplierName}}</b></p>
    </template>

  </pv-card>

<div class="container">
  <div class="card">
    <pv-carousel :value="stores" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="430px"
              style="max-width: 400px; margin-top: 2em">
      <template #header>
        <h1>My Customers</h1>
      </template>
      <template #item="stores">
        <div class="store-item">
          <div class="store-item-content">
            <div class="mb-3">
              <img :src="stores.data.image" :alt="stores.data.storeName" class="store-image"  />
            </div>
            <div>
              <h4 class="mb-1">{{stores.data.storeName}}</h4>
              <h6 class="mt-0 mb-3">Person in charge:{{stores.data.name}}</h6>
              <div class="car-buttons mt-5">
                <pv-button v-on:click="getStoreById(stores.data.id)" icon="pi pi-search" class="p-button p-button-rounded mr-2" />

              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>
  </div>
  <div class="orderCard" >
  <h1>My Orders</h1>
  </div>
  <div>

  </div>
</div>
</template>

<script>
import {useRoute} from "vue-router";
import {ProductsApiService} from "@/inventory/services/products-api.service";
import {SuppliersApiService} from "../services/suppliers-api.service";
import {StoresApiService} from "../../store/services/stores-api.service";

export default {
  name: "supplier-home.component",
  data() {
    return {
      id: Number,
      products: [],
      productService: null,
      stores: [],
      storeService: null,
      supplierData: {},
      suppliersService: null,

    }
  },
  created() {
    const route = useRoute();
    this.id  = route.params.id;
    this.getStore();
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
    getStore(){
      this.storeService = new StoresApiService();
      this.storeService.findBySupplierID(this.id).then((response) => {
        this.stores = response.data;
      });
    },

    getSupplierById(id){
      this.suppliersService= new SuppliersApiService();
      this.suppliersService .getById(id).then((response)=>{
        this.supplierData=response.data;
      });
      console.log("created")
    },
    getStoreById(storeId){
        this.$router.push({name: 'store-view', params:{sId:storeId}});
    }
  }
}
</script>

<style lang="scss" scoped>

.store-item {
.store-item-content {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: .3rem;
  text-align: center;
  padding: 2rem 0;
}

.store-image {
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
}
::v-deep.homeCard{
  color: white !important;
}
.homeCard{
  overflow:auto;
  padding-top: calc(10rem - 4.5rem);
  padding-bottom: calc(10rem - 4.5rem);
  background-image: linear-gradient(to bottom, rgba(26, 26, 26, 0.5) 0%,
  rgba(38, 38, 38, 0.5) 100%), url("https://www.economia360.org/wp-content/uploads/2020/04/mayorista.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.container{
  display: flex;
  justify-content: space-around;
}

</style>