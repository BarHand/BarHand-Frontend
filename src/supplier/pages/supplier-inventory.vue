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
      <pv-card style="width: 25em; background-color: #afbaca">
        <template #header>
          <img src="https://cuantas-calorias.org/wp-content/uploads/2017/11/GALLETAS-I.jpg" style="height: 15rem" />
        </template>
        <template #title>
          Galletas McZure
        </template>
        <template #subtitle>
          <h5>Dulces</h5>
          <h5>No disponible</h5>
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
      <pv-card style="width: 25em; background-color: #afbaca">
        <template #header>
          <img src="https://th.bing.com/th/id/OIP.dvoh8rRQinC14oYBqetGCwHaFj?pid=ImgDet&rs=1" style="height: 15rem" />
        </template>
        <template #title>
          Galletas Chocochips
        </template>
        <template #subtitle>
          <h5>Dulces</h5>
          <h5>Disponible</h5>
        </template>
        <template #content>
          <p>Deliciosas galletas rellenas de chispas de chocolate</p>
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
      <pv-card style="width: 25em; background-color: #afbaca">
        <template #header>
          <img src="https://userscontent2.emaze.com/images/4f35d47c-e75e-4016-bc7a-ba7f6c387dcd/42665f8ec7580d29d76636287e5403ff.png" style="height: 15rem" />
        </template>
        <template #title>
          Papas Lays - Corte americano
        </template>
        <template #subtitle>
          <h5>Snacks</h5>
          <h5>Disponible</h5>
        </template>
        <template #content>
          <p>Papas Lays al estilo americano!</p>
        </template>
        <template #footer>
          <router-link to="/supplier-inventory/edit-product/:id">
            <pv-button icon="pi pi-check" label="Edit"/>
          </router-link>
          <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>
      <pv-card style="width: 25em; background-color: #afbaca">
        <template #header>
          <img src="https://www.vinoacasa.com/wp-content/uploads/2019/10/bizarra-amber-ale-12.png" style="height: 15rem" />
        </template>
        <template #title>
          Papas Kryspo
        </template>
        <template #subtitle>
          <h5>Snacks</h5>
          <h5>No Disponible</h5>
        </template>
        <template #content>
          <p>Papas con sabor unico y exquisito</p>
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
import {SuppliersApiService} from "../services/suppliers-api.service";

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