<template>
  <div  class="page">

    <div class="main-table">
      <div class="card">
        <div class="card-container flex align-items-center justify-content-center">
          <div class="inline-block text-black font-bold text-center pt-4 pl-2 pr-5 mx-4">Nombre</div>
          <div class="inline-block  text-black font-bold text-center pt-4 pl-5 pr-5 mx-4 ">Categoria</div>
          <div class="inline-block  text-black font-bold text-center pt-4  pl-5 pr-5 mx-4">Description</div>
          <div class="inline-block text-black font-bold text-center pt-4 pl-1 pr-2 mx-4">Producto</div>
          <div class="inline-block  text-black font-bold text-center pt-4  pl-5 pr-5 mx-4"></div>
          <router-link :to="{ name: 'addItem' }">
            <pv-button  icon="pi pi-plus" label="Agregar"  />
          </router-link >
        </div>
      </div>

      <div v-for="product in products"  :key="product"  class="card product-table">
        <div class=" flex align-items-center justify-content-center card-container ">
          <div class="product flex align-items-center justify-content-center card-container">
            <div class=" inline-block w-4rem h-4rem  text-black font-bold text-center pt-4 pl-5 pr-5 mx-4" >{{ product.name }}</div>
            <div class=" inline-block w-4rem h-4rem  text-black font-bold text-center pt-4 pl-5 pr-5  mx-4">{{ product.category }}</div>
            <div class=" inline-block w-4rem h-4rem  text-black font-bold text-center pt-4 pl-5 pr-5  mx-4">{{ product.description }}</div>
            <div class=" img-container inline-block pl-4">
              <img :src="product.image" alt="product_img" class="product-img  align-items-center justify-content-center">
            </div>
            <pv-button label="Eliminar" icon="pi pi-trash" class="p-button-secondary" @click="openConfirmation" />
            <pv-dialog header="Confirmacion" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
              <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span>Esta seguro que quiere eliminar este producto ?</span>
              </div>
              <template #footer>
                <pv-button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>
                <pv-button label="Si" icon="pi pi-check" @click="closeConfirmation" v-on:click="deleteItem(product.id)" class="p-button-text" autofocus />
              </template>
            </pv-dialog>

            <router-link :to="{ name: 'editItem', params: { item: product.id }}">
              <pv-button  icon="pi pi-pencil" label="Editar"  />
            </router-link >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ProductsApiService} from "../../inventory/services/products-api.service";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "supplier-inventory.component",
  data(){
    return{
      supplierId: null,
      allProducts: null,
      products: [],
      productService: null,
      displayConfirmation: false,
    };
  },
  created() {

    const route = useRoute();
    this.supplierId = route.params.id;
    console.log(this.supplierId)

    this.productService = new ProductsApiService();
    this.productService.getAll().then((response) => {
      this.allProducts = response.data;

      for (let i = 0; i < this.allProducts.length; i += 1) {
        console.log(this.allProducts[i].supplierID);
        if(this.allProducts[i].supplierID === parseInt(this.supplierId)){
          console.log(this.allProducts[i])
          this.products.push(this.allProducts[i]);
        }

      }
    });


  },

  methods: {

    deleteItem(id){
      this.productService = new ProductsApiService();
      this.productService.delete(id).then((response) => {
      });

      this.$router.go(); //refresh

    },

    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },

  }

}
</script>

<style scoped>



.page{
  background-color: #AFBACA;
}


div{
  box-sizing: unset;
}
.product-table{
  padding-top: 3%;

}
.product{
  background-color: #DEE5E9;
  border-radius: 20px;
}

.main-table{
  padding-top: 6%;

}
.img-container{

  height: 120px;
  width: 120px;
}

.product-img{
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;

}
</style>