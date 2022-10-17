<template>
  <body>
  <div class="container">
    <div class="title"> Registration</div>
    {{supplier}}
    {{store}}
    <form action="#">
      <div v-if=" typeUser == 'Supplier'">
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

        <div class="input-box">
          <span class="details"> Password </span>
          <pv-password v-model="supplier.password" style="width: 100%"  placeholder="Enter your Password">
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
              {{ sp.level }}
              <pv-divider/>
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </pv-password>
        </div>
        <div class="input-box">
          <span class="details"> Confirm Password </span>
          <pv-password style="width: 100%" v-model="password1" placeholder="Confirm your Password">
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
              {{ sp.level }}
              <pv-divider/>
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </pv-password>
        </div>

      </div>
      </div>
      <div v-if=" typeUser == 'Store'">
        <div class="user-detail">
          <div class="input-box">
            <span class="details"> Full Name </span>
            <pv-input-text  v-model="store.name" style="width: 100%" type="text" placeholder="Enter your name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Last Name </span>
            <pv-input-text v-model="store.lastName" style="width: 100%" type="text" placeholder="Enter your last name" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Business Name </span>
            <pv-input-text v-model="store.storeName" style="width: 100%" type="text" placeholder="Enter your business name"
                           required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Email </span>
            <pv-input-text v-model="store.email" style="width: 100%" type="text" placeholder="Enter your email" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Address </span>
            <pv-input-text v-model="store.address" style="width: 100%" type="text" placeholder="Enter your address" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details"> Phone </span>
            <pv-input-text v-model="store.phone" style="width: 100%" type="text" placeholder="Enter your number phone" required></pv-input-text>
          </div>

          <div class="input-box">
            <span class="details">  Image </span>
            <pv-input-text v-model="store.image" style="width: 100%" type="text" placeholder="Enter your url business image"
                           required></pv-input-text>
          </div>


          <div class="input-box">
            <span class="details"> Password </span>
            <pv-password v-model="store.password" style="width: 100%"  placeholder="Enter your Password">
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
          <div class="input-box">
            <span class="details"> Confirm Password </span>
            <pv-password style="width: 100%" v-model="password1" placeholder="Confirm your Password">
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
        </div>
        </div>
      <div class="TypeUser">
        <span class="details"> Type User :  </span>
        <pv-select-button  v-model="typeUser" :options="optionsUser" aria-labelledby="single"/>
      </div>

      <div class="button">
        <router-link to="/sign-in">
          <pv-button  style="width: 100%" label="Submit" @click="addNewUser"/>
        </router-link>
      </div>


    </form>

  </div>
  </body>
</template>

<script>
import {AuthenticationApiService} from "@/security/services/authentication-api.service";

export default {
  name: "sign-up.component",
  data() {
    return {
      typeUser: 'Store',
      optionsUser: ['Store', 'Supplier'],
      password: null,
      password1: null,
      supplier:{},
      authenticationService: null,
      store:{},
    }
  },
  created() {
    this.authenticationService = new AuthenticationApiService();

  },
  methods: {

    addNewUser() {
      if ( this.typeUser == 'Supplier'){
        this.authenticationService
            .signUpSupplier( this.supplier)
      }else{
        this.authenticationService
            .signUpStore( this.store)
      }

    },


    },
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
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn.shopify.com/s/files/1/0070/7032/files/moving-boxes-warehouse.jpg?v=1634221970&width=1024");

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


</style>

