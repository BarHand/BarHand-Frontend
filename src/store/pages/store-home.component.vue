<template>

  <div class="card">
    <pv-carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
      <template #header>
        <h1>Best products sales</h1>
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
            </div>
            <div>
              <h4 class="mb-1">{{slotProps.data.name}}</h4>
              <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
              <span :class="'product-badge status-'+String(slotProps.data.available).toLowerCase()">{{slotProps.data.available}}</span>
              <div class="car-buttons mt-5">
                <pv-button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
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
export default {
  name: "store-home.component",
  data() {
    return {
      products: [],
      productService: null,
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
    this.productService = new ProductsApiService();
    this.productService.getAll().then((response) => {
      this.products = response.data;
      this.products=this.products.filter( x=>{
        return String(x.rating)=== '5' //return products with 5 stars
      } )
    });

  },

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
</style>