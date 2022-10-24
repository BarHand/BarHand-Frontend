<template>
  <div class="card">
    <pv-carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <template #header>
        <h1>products  posts</h1>
      </template>
      <template #item="slotProps">
        <div class="product-grid-item card">
        <div class="product-grid-item-top">
          <div>
            <i class="pi pi-tag product-category-icon"></i>
            <span class="product-category">{{slotProps.data.category}}</span>
          </div>
          <span :class="'product-badge status-'+String(slotProps.data.available).toLowerCase()">{{slotProps.data.available}}</span>
        </div>
        <div class="product-grid-item-content">
          <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
          <div class="product-name">{{slotProps.data.name}}</div>
          <div class="product-description">{{slotProps.data.description}}</div>
          <pv-rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></pv-rating>
        </div>
        <div class="product-grid-item-bottom">
          <span class="product-price">${{slotProps.data.price}}</span>
          <pv-button icon="pi pi-shopping-cart" :disabled="slotProps.data.available = false"></pv-button>
        </div>
      </div>

      </template>

    </pv-carousel>
  </div>
</template>

<script>

import {ProductsApiService} from "@/inventory/services/products-api.service";
/*<router-link to="/posts">
        <pv-button icon="pi pi-plus" label="See More" />
      </router-link>*/
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
  .card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
  }
.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: .5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}



::v-deep(.product-grid-item) {
  margin: .5rem;
  border: 1px solid var(--surface-border);

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
    width: 200px;
    height:  200px;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 100px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>