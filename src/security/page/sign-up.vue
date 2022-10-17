<template>
  <body>
  <div class="container">
    <div class="title"> Registration</div>
    <form action="#">
      <div class="user-detail">
        <div class="input-box">
          <span class="details"> Full Name </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your name" required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Last Name </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your last name" required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Business Name </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your business name"
                         required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Email </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your email" required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Address </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your address" required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Phone </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your number phone" required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Image </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your url business image"
                         required></pv-input-text>
        </div>

        <div class="input-box">
          <span class="details"> Password </span>
          <pv-password style="width: 100%" v-model="password" placeholder="Enter your Password">
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
        <div v-if=" typeUser == 'Supplier'" class="input-box">
          <span class="details"> RUC </span>
          <pv-input-text style="width: 100%" type="text" placeholder="Enter your RUC" required> </pv-input-text>
        </div>
      </div>
      <div class="TypeUser">
        <span class="details"> Type User :  </span>
        <pv-select-button  v-model="typeUser" :options="optionsUser" aria-labelledby="single"/>
      </div>

      <div class="button">
        <router-link to="/">
          <pv-button  style="width: 100%" label="Submit"/>
        </router-link>
      </div>

    </form>

  </div>
  </body>
</template>

<script>
export default {
  name: "sign-up.component",

  data() {
    return {
      typeUser: 'Store',
      optionsUser: ['Store', 'Supplier'],
      password: null,
      password1: null,
    }
  },
  methods: {

  },

};
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

