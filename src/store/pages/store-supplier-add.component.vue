<template>

  <pv-card class="card-list   ">
    <template #header>
      <img :src="product.image" alt="product_img" />
    </template>
    <template >

    </template>
    <template #title>
      <pv-input-text placeholder="Nombre" type="text"   v-model="product.name"/>
      <h1></h1>
      <pv-input-text placeholder="Categoria" type="text"  v-model="product.category"/>
    </template>
    <template #subtitle>
      <pv-input-text placeholder="URL Imagen" type="text" v-model="product.image" />
    </template>
    <template #content>
      <pv-input-text placeholder="Descripcion" type="text"  v-model="product.description" />
    </template>
    <template #footer>
      <router-link :to="{ name: 'warehouse'}">
        <pv-button  icon="pi pi-times" class="p-button-secondary" label="Cancel"  />
      </router-link >
      <pv-button v-on:click="saveItem()" icon="pi pi-check" label="Save"  />
    </template>
  </pv-card>

</template>

<script>
import {useRoute} from 'vue-router'
import {ProductsApiService} from "../../supplier/services/products-api.service";
export default {
  name: "store-supplier-add.component",
  data(){
    return {
      product:
      {
        name: "",
        category: "",
        image: "",
        available: true,
        description: "",
      }
    };
  },

  methods: {

    saveItem(){

      this.productService = new ProductsApiService();
      this.productService.create(this.product).then((response) => {
      });
      this.$router.push({path: '/warehouse'}); //redirect
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