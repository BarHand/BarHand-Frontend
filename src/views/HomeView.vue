<template>
  <div class="home">
    <div class="background" style="height: 100vh; margin: 0;padding: 0">
      <div class="header">
        <div class="watermark" style="width: 35vw; display: flex; align-items: center;justify-content: center">
          <img src="../assets/logo_.png" alt="" style="height: 25vh;">
          <img src="" alt="">
        </div>


        <div class="buttons">
          <div class="button">
            <RouterLink to="/sign-in">
              <pv-button label="SignIn" style="background-color: #9acb3c" />

            </RouterLink>
          </div>
          <div class="button">
            <RouterLink to="/sign-up">
              <pv-button label="SignUp" style="background-color: #9acb3c" />
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="phrase">
          <div>
            <h2>Tu proveedor de confianza </h2>
            <p>La plataforma para proveedores y emprendedores <br> que busquen mejorar su negocio y aumentar sus <br>ventas. Todo los productos de calidad a los mejores <br> precios y todo cerca a tu negocio con un click.</p>
          </div>
        </div>
        <div class="image" >
          <img src="../assets/vehiculos.png" alt="" >
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
.background{
  background-color: #afbaca;
}
.header{
  display: flex
}
.buttons{
  width: 70vw;
  display:flex;
  justify-content:end
}
.button{
  height:80px;
  width: 120px;
  margin: 1.2rem 4rem 3rem 4rem;
  color: black;
  display: block;
  text-align: center;
  font-size: x-large;
}
.phrase{
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: center
}
.phrase h2{
  color: black;
  display: block;
  text-align: center;
  font-size: xx-large;
  font-family: Verdana,serif
}
.phrase p{
  color: black;
  display: block;
  text-align: center;
  font-size: large;
  font-family: Verdana,serif
}
.image{
  width: 50vw
}
.image img{
  width: 40vw
}

@media (max-width: 958px) {

  .header{
    display: block;
  }
  .watermark{
    visibility: hidden;
    height: 1px;
  }
  .buttons{
    width: 100vw;
    display:flex;
    justify-content:center
  }
  .button{
    height:40px;
    width: 150px;
    margin: 1.2rem 1rem 3rem 1rem;
  }
  .phrase{
    width: 100vw;
    display: block;
    align-items: center;
    justify-content: center
  }
  .image{
    width: 100vw;
    display: flex;
    justify-content: center;

  }
  .image img{
    width: 70vw
  }
  .container{
    display: block;
  }
}

</style>

<script>
export default {
  name: 'HomeView',

};
</script>
