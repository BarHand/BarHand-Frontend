<template>
<h1>Products views</h1>
  <div class="product">
    <div class="product-grid-item card">
      <div class="product-grid-item-top">
        <div>
          <i class="pi pi-tag product-category-icon"></i>
          <span class="product-category">{{productData.category}}</span>
        </div>
        <span :class="'product-badge status-'+String(productData.available).toLowerCase()">{{productData.available}}</span>
      </div>
      <div class="product-grid-item-content">
        <img :src="productData.image" :alt="productData.name"/>
        <div class="product-name">{{productData.name}}</div>
        <div class="product-description">{{productData.description}}</div>
        <pv-rating :modelValue="productData.rating" :readonly="true" :cancel="false"></pv-rating>
      </div>
      <div class="product-grid-item-bottom">
        <span class="product-price">${{productData.price}}</span>
        <pv-button style="width: 150px; height: 40px;" icon="pi pi-user"  label="Supplier" v-on:click="viewSupplier()"></pv-button>
        <pv-button  icon="pi pi-shopping-cart" :disabled="String(productData.available)  === 'false'"></pv-button>

      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {ProductsApiService} from "@/inventory/services/products-api.service";

export default {
  name: "product-view-store",
  data(){
    return{
      productId: Number,
      productData:{},
      productService: null,

    }
  },
  created() {
    const route = useRoute();
    this.productId = route.params.pId;
    this.getProduct(this.productId);
  },
  methods: {
    getProduct(idProduct) {
      this.productService = new ProductsApiService();
      this.productService .getById(idProduct).then((response)=>{
        this.productData=response.data;
      });
    },

    viewSupplier(){
      this.$router.push({name: 'store-profile-edit'});
    }

  }
}
</script>

<style lang="scss" scoped>
.product{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  border-radius: 4px;
  margin-bottom: 2rem;
  width: 450px;
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
    width: 100%;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
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