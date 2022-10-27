<template>
    <div class="p-inputgroup">
      <pv-button icon="pi pi-search" v-on:click="viewProducts()" />
      <pv-input-text placeholder="Search product"  v-model="searchProduct"   class="search"/>
    </div>
  <pv-card class="homeCard" >
    <template #title >
      <h1 >Hello {{storeData.name}} {{storeData.lastName}}</h1>
      <p  style=" font-size: 20px;">We are happy to continue working with <b>{{storeData.storeName}}</b></p>
    </template>

  </pv-card>


  <div class="card">
    <pv-carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
      <template #header>
        <div class="col-5" >
        <h1 style="background-color: #457b9d; color: white ;padding: 10px;border-radius: 5px">Best products sales:</h1>
        </div>
      </template>
      <template #item="products">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img :src="products.data.image" :alt="products.data.name" class="product-image" />
            </div>
            <div>
              <h4 class="mb-1">{{products.data.name}}</h4>
              <h6 class="mt-0 mb-3">${{products.data.price}}</h6>
              <span >{{products.data.available}}</span>
              <div class="car-buttons mt-5">
                <pv-button v-on:click="getProduct(products.data.id)" icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                <pv-button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                <pv-button icon="pi pi-cog" class="p-button-help p-button-rounded" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>
  </div>



</template>

<script>

import {ProductsApiService} from "@/inventory/services/products-api.service";
import {StoresApiService} from "@/store/services/stores-api.service";
import {useRoute} from "vue-router";

export default {

  name: "store-home.component",
  data() {
    return {
      id:Number,
      searchProduct:'',
      products: [],
      productService: null,
      storeData: {},
      storesService:null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '550px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },
  created() {
    const route = useRoute();
    this.id  = route.params.id;
    this.getBestProduct();
    this.getStoreById(this.id);




  },
  methods: {
    viewProducts(){
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
    getStoreById(id){
      this.storesService= new StoresApiService();
      this.storesService .getById(id).then((response)=>{
        this.storeData=response.data;
      });
      console.log("created")
    },
    getProduct(productId){
      this.$router.push({name: 'product-view', params:{pId:productId}});
    }
  }

}
</script>

<style lang="scss" scoped>
.product-item {
  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: .3rem;
    text-align: center;
    padding: 2rem 0;
  }

  .product-image {
    max-width: 80%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }
}
.p-inputgroup{
  padding: 0px;
  margin: 0px;
}
::v-deep.search{
  color :white !important;
  background-color: #66a3c9 !important;
}
::v-deep.homeCard{
    color: white !important;
}
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