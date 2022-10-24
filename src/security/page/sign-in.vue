
<template>
  <body>
  <div class="container">
    <div class="card">
      <h1 class="font-light ">Hello</h1>
      <h2 class="font-light">Welcome to Barhand</h2>
      <div class="grid">
        <div class="col-5 flex align-items-center justify-content-center">
          <div class="p-fluid">
            <div class="field">
              <label for="username">Username</label>
              <pv-input-text id="username" type="text" />
            </div>
            <div class="field">
              <label for="password">Password</label>
              <pv-input-text id="password" type="password" />
            </div>
            <div class="field">
              <span class="details"> Type User :  </span>
              <pv-select-button  v-model="typeUser" :options="optionsUser" aria-labelledby="single"/>
            </div>
            <RouterLink to="/warehouse" >
            <pv-button label="Login"></pv-button>
            </RouterLink>
          </div>
        </div>
        <div class="col-2">
          <pv-divider layout="vertical">
            <b class="text-black-alpha-80">OR</b>
          </pv-divider>
        </div>

        <div class="col-5 flex align-items-center justify-content-center">
          <RouterLink to="/sign-up">
          <pv-button label="Sign Up" icon="pi pi-user-plus" class="p-button-success"></pv-button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  </body>


</template>

<script>
export default {
  name: "sign-in.component",
  data() {
    return {
      typeUser: 'Store',
      optionsUser: ['Store', 'Supplier'],
    }
  },

};
</script>

<style scoped>
* {

  box-sizing: border-box;
  font-family: "Roboto";
}
body{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.franchisemarket.ph/application/files/2315/8590/1658/wholesale-supplier.jpg");
  background-size: 100%;
  opacity: 0.95;
}
.container{

  align-items: center;
  display: flex;
  justify-content: center;

}

.card{
  background-color: #fff;
  max-width: 800px;
  text-align: center;
  vertical-align: center;
  border:3px solid #fff;
  border-radius:22px;
  opacity:0.95;
  bottom: 10%;
  position: center;

}



</style>
