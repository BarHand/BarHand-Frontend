<template>
<body>
  <div class="home">
    <div>
      <div class="container">
        <img :src="this.supplier.image" >
        <form action="#">
      <div id="sup">
        <div>
          <div class="user-detail">
            <div class="input-box">
              <span class="details"> Full Name </span>
              <pv-input-text  v-model="supplier.name" style="width: 100%" type="text" placeholder="Enter your name" required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Last Name </span>
              <pv-input-text v-model="supplier.lastName" style="width: 100%" type="text" placeholder="Enter your last name" required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Business Name </span>
              <pv-input-text v-model="supplier.supplierName" style="width: 100%" type="text" placeholder="Enter your business name"
                             required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Email </span>
              <pv-input-text v-model="supplier.email" style="width: 100%" type="text" placeholder="Enter your email" required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Address </span>
              <pv-input-text v-model="supplier.address" style="width: 100%" type="text" placeholder="Enter your address" required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Phone </span>
              <pv-input-text v-model="supplier.phone" style="width: 100%" type="text" placeholder="Enter your number phone" required></pv-input-text>
            </div>

            <div class="input-box">
              <span class="details">  Image </span>
              <pv-input-text v-model="supplier.image" style="width: 100%" type="text" placeholder="Enter your url business image"
                             required></pv-input-text>
            </div>


            <div  class="input-box">
              <span class="details"> RUC </span>
              <pv-input-text v-model="supplier.ruc" style="width: 100%" type="text" placeholder="Enter your RUC" required> </pv-input-text>
            </div>

            <div  class="input-box">
              <span class="details"> Category </span>
              <pv-input-text v-model="supplier.category" style="width: 100%" type="text" placeholder="Enter your category business" required> </pv-input-text>
            </div>

            <div class="input-box">
              <span class="details"> Description </span>
              <pv-text-area v-model="supplier.description" style="width: 100%" type="text" placeholder="Enter your description business" required> </pv-text-area>
            </div>
          </div>
        </div>
      </div>
        </form>
        <router-link :to="{name: 'supplier-profile'}">
          <pv-button id="button" label="Save" style="background-color: #9acb3c; width:100%" @click="update"/>
        </router-link>
    </div>
    </div>
  </div>
</body>
</template>

<script>
import {SuppliersApiService} from "../services/suppliers-api.service";

import {useRoute} from "vue-router";

export default {
  name: "profile.component",
  data() {
    return {
      id: "",
      supplier:{},
      supplierService: null,
    }
  },
  created()
  {
    const route= useRoute();
    this.id=route.params.id;

    console.log(this.id)
    this.supplierService = new SuppliersApiService();
    this.supplierService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.supplier = response.data;
    });
  },
  methods: {
    update() {
      this.supplierService.update(this.id,this.supplier)   //getById configurar para inicio de sesion copio el id del que inicio sesión
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

body {

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #afbaca;

  background-size: 100%;

  opacity: 0.9;
}

.container {
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background: -moz-linear-gradient(135deg, black, white);
}

.container form .user-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

form .user-detail .input-box {
  width: calc(100% / 2 - 20px);
}

form .TypeUser {
  display: flex;
  position: relative;
  margin: 14px 0;
}
img {
  width: 100%;
}
</style>