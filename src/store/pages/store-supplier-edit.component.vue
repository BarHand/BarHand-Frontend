<template>

  <pv-card class="card-list">
    <template #header>
      <img :src="product.image" alt="product_img" />
    </template>
    <template >

    </template>
    <template #title>
      <pv-input-text placeholder="URL" type="text" v-model="product.image"  />
      <h1></h1>
      <pv-input-text placeholder="Title" type="text" v-model="product.name"  />
    </template>
    <template #subtitle>
      <pv-input-text placeholder="Summary" type="text" v-model="product.category"  />
    </template>
    <template #content>
      <pv-input-text placeholder="Content" type="text" v-model="product.description"  />
    </template>
    <template #footer>
      <router-link :to="{ name: 'store'}">
      <pv-button  icon="pi pi-times" class="p-button-secondary" label="Cancel"  />
      </router-link >
      <pv-button v-on:click="editData" icon="pi pi-check" label="Save"  />
    </template>
  </pv-card>

</template>

<script>

import {useRoute} from 'vue-router'
import {ProductsApiService} from "../../supplier/services/products-api.service";
export default {
  name: "store-supplier-edit.component",
  data(){
    return {
      productService: null,
      product:{},
      id: ""
    };
  },

  created() {
    const route = useRoute();
    this.id = route.params.id;

    console.log(this.id)
    this.productService = new ProductsApiService();
    this.productService.getById(this.id).then((response) => {
      this.product = response.data;
    });
  },


  methods: {
    editData(){
      this.productService = new ProductsApiService();
      this.productService.edit(this.id, this.product).then((response) => {
      });
      this.$router.push({path: '/store'}); //redirect
    }
  }


}
</script>

<style scoped>
p {
  line-height: 1.5;
  margin: 0;
}

.card-list{
  padding-top: 3%;
  margin: auto;
  width: 50%;
  text-align: center;
}
.p-card-header img{
  width: 40%;
}
</style>