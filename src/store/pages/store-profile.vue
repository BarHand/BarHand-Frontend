<template>
  <div class="profile">
    <div class="background" style="height: 100vh; margin: 0;padding: 0">
      <div id="sup">
        <img class="image-profile"
             :src="this.store.image"


        />
        <div>
          <span>
        <h1 class= "mb-1" style="margin: 0;color: darkblue">
          "{{store.storeName}}"
        </h1>
        <h3 style="margin: 0;color: forestgreen">"{{store.name}}  {{store.lastName}}"</h3>
        <p>"{{store.address}}"</p>
        <p>Address:{{store.address}}</p> <p>Phone:{{store.phone}}</p>
              <router-link :to="{ name: 'store-home'}"> //, id}
            <pv-button id="button" label="Edit" />
          </router-link>
          </span>
        </div>
      </div>
      <div class="card">
        <pv-carousel :value="products" :numVisible="2" :numScroll="2" :responsiveOptions="responsiveOptions">
          <template #header>
            <h1 class="text-center" style="margin: 0;color: darkblue">Products  posts</h1>
          </template>
          <template #item="slotProps">
            <div class="product-item">
              <div class="product-item-content">
                <div class="mb-3">
                  <img
                      :src="slotProps.data.image"
                      :alt="slotProps.data.image"
                      class="product-image"
                  />
                </div>
                <div>
                  <h2 class="mb-1">{{slotProps.data.name}}</h2>

                </div>
                <div class="car-buttons mt-5">
                  <router-link to="/posts">
                    <pv-button icon="pi pi-plus" label="See More" />
                  </router-link>
                </div>
              </div>
            </div>
          </template>
        </pv-carousel>
      </div>
    </div>
  </div>
</template>

<script>
//import {useRoute} from "vue-router";
import {ProductsApiService} from "@/supplier/services/products-api.service";
import {StoresApiService} from "@/store/services/stores-api.service";

export default {
  name: "store-profile",
  data() {
    return {
      id:null,
      store: null,
      storeService: null,
      products: null,
      productService:null,
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
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ]

    }
  },
  created() {
    //const route= useRoute();
    this.id = 3;//route.params.id;

    console.log(this.id)
    this.storeService = new StoresApiService();
    this.storeService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.store = response.data;
    });
    this.productService= new ProductsApiService();
    this.productService.findBySupplierID(this.id).then((response) => {
      this.products = response.data;
    })
  },
}

</script>

<style scoped>
.background{
  background-color: #afbaca;
}




</style>