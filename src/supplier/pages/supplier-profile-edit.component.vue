<template>
  <RouterView></RouterView>
  <div class="home">
    <div class="background" style="height: 220vh; margin: 0;padding: 0">
      <div class="header">
        <div class="buttons">
          <div class="button">
            <RouterLink to="/contacts">
              <pv-button label="Contacts" style="background-color: #9acb3c" />
            </RouterLink>
          </div>
          <div class="button">
            <RouterLink to="/home-store">
              <pv-button label="Products" style="background-color: #9acb3c" />
            </RouterLink>
          </div>
          <div class="button">
            <RouterLink to="/stores">
              <pv-button label="Stores" style="background-color: #9acb3c" />

            </RouterLink>
          </div>
        </div>
      </div>
      <div id="sup">
        <div>
          {{supplier}}
          <span>
            <h5>Supplier Name</h5>
            <pv-input-text type="text" v-model="supplier.supplierName" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Name</h5>
            <pv-input-text type="text" v-model="supplier.name" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Last Name</h5>
            <pv-input-text type="text" v-model="supplier.lastName" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Image</h5>
            <pv-input-text type="text" v-model="supplier.image" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Email</h5>
            <pv-input-text type="text" v-model="supplier.email" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Address</h5>
            <pv-input-text type="text" v-model="supplier.address" style=" border-color: black; border-radius: 1rem;background-color: white"/>
          </span>
        </div>
        <div>
          <span>
            <h5>RUC</h5>
            <pv-input-text type="text" v-model="supplier.ruc" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Category</h5>
            <pv-input-text type="text" v-model="supplier.category" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Description</h5>
            <pv-input-text type="text" v-model="supplier.description" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Phone</h5>
            <pv-input-text type="text" v-model="supplier.phone" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Password</h5>
            <pv-input-text type="text" v-model="supplier.password" style=" border-color: black; border-radius: 1rem;background-color: white"/>
            <h5>Guardar datos</h5>
                  <router-link to="">
            <pv-button id="button" label="Guardar" style="background-color: #9acb3c" @click="update"/>
          </router-link>
          </span>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeBUJui5XoVkOvuGDRqFXL1H11-CTghVcyQ&usqp=CAU" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFLQO_8mDXjrBkx3Xwq4vogDBfCPuRbhGMw&usqp=CAU" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpDnybeHWza89Acxse8KtQSKxImJQgtVoig&usqp=CAU" >
      </div>
    </div>
  </div>
</template>

<script>
import {SuppliersApiService} from "../services/suppliers-api.service";
import {ProductsApiService} from "../services/products-api.service";

export default {
  name: "profile.component",
  data() {
    return {
      supplier:{},
      supplierService: null,
    }
  },
  created()
  {
    this.supplierService = new SuppliersApiService();

  },
  methods: {
    update() {
      this.supplierService.update(1,this.supplier)   //getById configurar para inicio de sesion copio el id del que inicio sesión
    }
  }
}
</script>

<style scoped>
.header {
  display: grid;

}
.background{
  background-color: #afbaca;
}
  #sup {
    display: flex;
    height: 50vh;

    align-items: center;
  }
#sup img {
  width:220px;
  position: center;
  top:0px;
  left:200px;
}
#sup div {
  display: grid;
  position:relative;
  top:-50px;
  left:50px;
  width: 35%;
  height: 100%;
  right: 5%;
  opacity: 90%;
  align-items: inherit;
  text-align: center;
}
#button {
  width: 50%;
}
.buttons{
  width: 70vw;
  display:inline-flex;
  justify-content: end;

}
.button{
  align-items: center;
  height:80px;
  width: 120px;
  margin: 1.2rem 4rem 3rem 4rem;
  display: flex;
  text-align: center;
  font-size: x-large;
}

</style>