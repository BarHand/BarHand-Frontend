<template>
  <div class="card">
    <pv-carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <template #header>
        <h1>products  posts</h1>
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
</template>

<script>

import {ProductsApiService} from "@/supplier/services/products-api.service";

export default {
  name: "store-home.component",
  data() {
    return {
      products: null,
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
          breakpoint: '480px',
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
  width: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }
}
</style>