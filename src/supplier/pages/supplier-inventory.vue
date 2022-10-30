<template>
  <body>
  <h1 class="header" style="text-align: center"> My Products</h1>
  <div align="center">
    <router-link to="/supplier-inventory/add-product/:id">
    <pv-button class="mat-focus-indicator but mat-raised-button mat-button-base">
    <span class="mat-button-wrapper">Add new product</span>
      <span matripple class="mat-ripple mat-button-ripple"></span>
      <span class="mat-button-focus-overlay"></span>
    </pv-button>
    </router-link>
  </div>
  <div class="container">
    <div class="mt-5">
      <pv-card style="width: 25em">
        <template #header>
          <img src="https://cuantas-calorias.org/wp-content/uploads/2017/11/GALLETAS-I.jpg" style="height: 15rem" />
        </template>
        <template #title>
          Galletas McZure
        </template>
        <template #content>
          <p>Deliciosas galletas rellenas de chispas de diferentes sabores y colores para el deletite de cada persona</p>
        </template>
        <template #footer>
          <router-link to="/supplier-inventory/edit-product/:id">
          <pv-button icon="pi pi-check" label="Edit"/>
          </router-link>
          <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>
      <pv-card style="width: 25em">
        <template #header>
          <img src="https://cuantas-calorias.org/wp-content/uploads/2017/11/GALLETAS-I.jpg" style="height: 15rem" />
        </template>
        <template #title>
          Galletas McZure
        </template>
        <template #content>
          <p>Deliciosas galletas rellenas de chispas de diferentes sabores y colores para el deletite de cada persona</p>
        </template>
        <template #footer>
          <router-link to="/supplier-inventory/edit-product/:id">
            <pv-button icon="pi pi-check" label="Edit"/>
          </router-link>
          <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>
    </div>
    <div class="mt-5">
      <pv-card style="width: 25em">
        <template #header>
          <img src="https://cuantas-calorias.org/wp-content/uploads/2017/11/GALLETAS-I.jpg" style="height: 15rem" />
        </template>
        <template #title>
          Galletas McZure
        </template>
        <template #content>
          <p>Deliciosas galletas rellenas de chispas de diferentes sabores y colores para el deletite de cada persona</p>
        </template>
        <template #footer>
          <router-link to="/supplier-inventory/edit-product/:id">
            <pv-button icon="pi pi-check" label="Edit"/>
          </router-link>
          <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>
      <pv-card style="width: 25em">
        <template #header>
          <img src="https://cuantas-calorias.org/wp-content/uploads/2017/11/GALLETAS-I.jpg" style="height: 15rem" />
        </template>
        <template #title>
          Galletas McZure
        </template>
        <template #content>
          <p>Deliciosas galletas rellenas de chispas de diferentes sabores y colores para el deletite de cada persona</p>
        </template>
        <template #footer>
          <router-link to="/supplier-inventory/edit-product/:id">
            <pv-button icon="pi pi-check" label="Edit"/>
          </router-link>
          <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>

    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "supplier-inventory"
}
</script>

<style scoped>
p {
  line-height: 1.5;
  margin: 0;
}
div{
  display: block;
}
body {
  margin: 0;
  font-family: Roboto,Helvetica Neue,sans-serif;
}
</style>