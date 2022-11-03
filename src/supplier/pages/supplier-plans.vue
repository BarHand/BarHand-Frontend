<template>
  <body>
  <h1 class="header" style="text-align: center"> Barhand Plans</h1>
  <div class="container">
    <pv-card style="width: 25em">
      <template #header>
        <img src="https://agencelis.fr/templates/Csp/images/estimatelis.png" style="height: 20rem" />
      </template>
      <template #title>
        Free Plan
      </template>
      <template #content>
        <p>Free plan with which you can get the basic benefits of the application</p>
      </template>
      <template #footer>
        <router-link to="">
          <pv-button label="$0"/>
        </router-link>
      </template>
    </pv-card>
    <pv-card style="width: 25em">
      <template #header>
        <img src="https://agencelis.fr/templates/Csp/images/estimatelis.png" style="height: 20rem" />
      </template>
      <template #title>
        Starter Plan
      </template>
      <template #content>
        <p>Plan for those looking to build their business and get much more customers</p>
      </template>
      <template #footer>
        <router-link to="">
          <pv-button label="$4.99"/>
        </router-link>
      </template>
    </pv-card>
    <pv-card style="width: 25em">
      <template #header>
        <img src="https://agencelis.fr/templates/Csp/images/estimatelis.png" style="height: 20rem" />
      </template>
      <template #title>
        Bussiness Plan
      </template>
      <template #content>
        <p>Plan for those who seek to be recognized and obtain much more clientele than they already have</p>
      </template>
      <template #footer>
        <router-link to="">
          <pv-button label="$19.99"/>
        </router-link>
      </template>
    </pv-card>

  </div>
  </body>
</template>

<script>
export default {
  name: "supplier-plans"
}
</script>

<style scoped>
p {
  line-height: 1.5;
  margin: 0;
}
div{
  display: block;
  margin: auto;
}
body {
  margin: 0;
  font-family: Roboto,Helvetica Neue,sans-serif;
}
.container{
  justify-content: space-around;
  display:flex;
  align-content: start;
  row-gap: 10px;
}
</style>