

<template>
  <body>
  <div >
    <img src="https://www.franchisemarket.ph/application/files/2315/8590/1658/wholesale-supplier.jpg" alt="">
  </div>

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
            <RouterLink to="/about">
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

};
</script>

<style scoped>
.container{
  background: #EEE;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
}

.card{
  background-color: #212121;
  width: 50rem;
  text-align: center;
  vertical-align: center;
  border:3px solid #212121;
  border-radius:22px;
  opacity:0.95;
  bottom: 10%;
  position: center;

}
img{
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 0.9;

}
h1{
  color: #EEEEEE;
}
h2{
  color: #EEEEEE;
}
label{
  color: #EEEEEE;
}
</style>
