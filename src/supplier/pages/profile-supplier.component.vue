<template>
  <div class="profile">
    <div class="background" style="height: 100vh; margin: 0;padding: 0">
    <div id="sup">
      <img class="image-profile"
          :src="this.supplier.image"


      />
        <div>
          <span>
        <h1 class= "mb-1" style="margin: 0;color: darkblue">
          "{{supplier.supplierName}}"
        </h1>
        <h3 style="margin: 0;color: forestgreen">"{{supplier.name}}  {{supplier.lastName}}"</h3>
        <p>"{{supplier.description}}"</p>
        <p>Address:{{supplier.address}}</p> <p>Phone:{{supplier.phone}}</p>
              <router-link :to="{ name: 'supplier-profile-edit', id}">
            <pv-button id="button" label="Edit" />
          </router-link>
          </span>
        </div>
      </div>
    <div class="card">
      <pv-carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
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

import {SuppliersApiService} from "../services/suppliers-api.service";
import {ProductsApiService} from "../../inventory/services/products-api.service";
import {useRoute} from "vue-router";


export default {
  name: "profile-supplier.component",
  data() {
    return {
      id:null,
      supplier: {},
      supplierService: null,
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
    const route= useRoute();
    this.id = route.params.id;

    console.log(this.id)
    this.supplierService = new SuppliersApiService();
    this.supplierService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.supplier = response.data;
    });
    this.productService= new ProductsApiService();
    this.productService.findBySupplierID(this.id).then((response) => {
      this.products = response.data;
    })
  },
}


</script>

<style lang="scss" scoped>
.background{
  background-color: #afbaca;
}
#sup {
  display: flex;
  height: 300px;

  align-items: center;
}
#sup img {
  max-width:350px;
  position:relative;
  top:0px;
  left:150px;
}
#sup div {
  display: grid;
  position:relative;
  top:0px;
  left:250px;
  width: 40%;
  height: 100%;
  right: 5%;

  opacity: 80%;
  align-items: center;
  text-align: center;
}
#button {
  width: 20%;
}
.product-item {
.product-item-content {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: .3rem;
  text-align: center;
  padding: 2rem 0;
}

.product-image {
  width: 20%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
}
</style>