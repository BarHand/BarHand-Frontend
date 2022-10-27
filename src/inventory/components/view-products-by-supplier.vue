<template>
  <div class="card">
    <pv-data-view class="product-view" :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder"
                  :sortField="sortField">
      <template #header style="background-color:#66a3c9 !important;" >
        <div class="grid grid-nogutter">

          <div class="field col-12 md:col-10"  >
            <span class="p-input-icon-left "  style="width: 100% " >
              <i class="pi pi-search" />
              <pv-input-text style="width: 100%"  placeholder="Keyword Search" v-model="searchTerm" v-on:keydown="filter()" /> <!--v-model="filters1['global'].value"-->
            </span>
          </div>
          <div class="field col-12 md:col-1" style="text-align: left  ">
            <pv-drop-down style="width: 100%;" v-model="sortkey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price"
                          @change="onSortChange($event)"/>
          </div>
          <div class="field col-12 md:col-1"  style="text-align: right  ">
            <pv-dataViewLayoutOption  v-model="layout"/>
          </div>
        </div>
        <pv-card class="quantityProduct">
          <template #title>
            Total search products: {{getTotalProducts()}}
          </template>
        </pv-card>
      </template>

      <template #list="slotProps">
        <div class="col-12">
          <div class="product-list-item">
            <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
            <div class="product-list-detail">
              <div class="product-name">{{ slotProps.data.name }}</div>
              <div class="product-description">{{ slotProps.data.description }}</div>
              <pv-rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></pv-rating>
              <i class="pi pi-tag product-category-icon"></i><span
                class="product-category">{{ slotProps.data.category }}</span>
            </div>
            <div class="product-list-action">
              <span class="product-price">${{ slotProps.data.price }}</span>
              <pv-button icon="pi pi-shopping-cart" label="Add to Cart"
                         :disabled="String(slotProps.data.available) === 'false'"></pv-button>
              <span
                  :class="'product-badge status-'">{{ slotProps.data.available }}</span>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="col-12 md:col-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">{{ slotProps.data.category }}</span>
              </div>
              <span
                  :class="'product-badge status-'+String(slotProps.data.available).toLowerCase()">{{ slotProps.data.available }}</span>
            </div>
            <div class="product-grid-item-content">
              <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
              <div class="product-name">{{ slotProps.data.name }}</div>
              <div class="product-description">{{ slotProps.data.description }}</div>
              <pv-rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></pv-rating>
            </div>
            <div class="product-grid-item-bottom">
              <span class="product-price">${{ slotProps.data.price }}</span>
              <pv-button icon="pi pi-shopping-cart" :disabled="String(slotProps.data.available) === 'false'"></pv-button>
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
  </div>
</template>

<script>
import {ProductsApiService} from "@/inventory/services/products-api.service";
import {useRoute} from "vue-router";

export default {
  name: "product-by-supplier",

  data() {
    return {
      supplierId:Number,
      products: {},
      layout: 'grid',
      sortOrder: null,
      sortField: null,
      searchTerm:'',
      sortKey: null,
      sortOptions: [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
      ]
    }
  },
  productService: null,
  created() {
    const route = useRoute();
    this.supplierId = route.params.sId;
    this.getProductsBySupplier(this.supplierId)
  },

  methods: {
    getProductsBySupplier(supplierId){
      this.productService = new ProductsApiService();
      this.productService.findBySupplierID(this.supplierId).then((response) => {
        this.products = response.data;
      });
    },
    filter(){
      this.productService = new ProductsApiService();
      this.productService.findBySupplierID(this.supplierId).then((response) => {
        this.products = response.data;
        if (this.searchTerm!= null)
          this.products=this.products.filter(x=>x.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              x.category.toLowerCase().includes(this.searchTerm.toLowerCase())||
              String(x.available).toLowerCase().includes(this.searchTerm.toLowerCase())||
              String(x.rating).toLowerCase().includes(this.searchTerm.toLowerCase())||
              String(x.price).toLowerCase().includes(this.searchTerm.toLowerCase()))
      });
    },
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
    getTotalProducts(){
      return this.products.length;
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .product-view{
  .p-dataview-header{
    background-color: #66a3c9;
  }
}
.quantityProduct{
  background-color: #424242  ;
  color: white ;
}
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

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 .5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: .5rem;
  }
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
    max-width: 60%;
    height: auto;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.search{
  color :white !important;
  background-color: #66a3c9 !important;
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