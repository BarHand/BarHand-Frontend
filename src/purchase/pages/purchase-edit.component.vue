<template>
  <body>
 //<div class="home">
    <div>
      <div class="container">
        <img :src="this.purchase.image" >
        <form action="#">
          <div id="sup">
            <div>
              <div class="user-detail">

                <div class="input-box">
                  <span class="details"> DNI </span>
                  <pv-input-text v-model="purchase.dni" style="width: 100%" type="text" placeholder="Enter your dni" required></pv-input-text>
                </div>

                <div class="input-box">
                  <span class="details"> Phone </span>
                  <pv-input-text v-model="purchase.phone" style="width: 100%" type="text" placeholder="Enter your phone"
                                 required></pv-input-text>
                </div>

                <div class="input-box">
                  <span class="details"> Providers </span>
                  <pv-input-text v-model="purchase.provider" style="width: 100%" type="text" placeholder="Enter your provider" required></pv-input-text>
                </div>

                <div class="input-box">
                  <span class="details"> Order </span>
                  <pv-input-text v-model="purchase.order" style="width: 100%" type="text" placeholder="Enter your order" required></pv-input-text>
                </div>

                <div class="input-box">
                  <span class="details"> Product </span>
                  <pv-input-text v-model="purchase.item" style="width: 100%" type="text" placeholder="Enter your product" required></pv-input-text>
                </div>

              </div>
            </div>
          </div>
        </form>
        <router-link :to="{name: 'purchase'}">
          <pv-button id="button" label="Make payment" style="background-color: #9acb3c; width:100%" @click="update"/>
        </router-link>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import {PurchaseApiService} from "../services/purchase-api.service";

import {useRoute} from "vue-router";

export default {
  name: "purchase.component",
  data() {
    return {
      id: "",
      purchase:{},
      purchaseService: null,
    }
  },
  created()
  {
    const route= useRoute();
    this.id=route.params.id;

    console.log(this.id)
    this.purchaseService = new PurchaseApiService();
    this.purchaseService.getById(this.id).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.purchase = response.data;
    });
  },
  methods: {
    update() {
      this.purchaseService.update(this.id,this.purchase)   //getById configurar para inicio de sesion copio el id del que inicio sesión
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