<template>

  <div>
    <div>

      <div class="card">
        <pv-carousel :value="supplier" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
          <template #header>
            <h1 class="text-center" style="margin: 0;color: darkblue">List Suppliers </h1>
          </template>
          <template #item="slotProps">
            <div class="profile-supplier">
              <div class="profile-supplier-item">
                <div class="mb-3">
                  <img
                      :src="slotProps.data.image"
                      :alt="slotProps.data.image"
                      class="supplier-image"
                  />
                </div>
                <div>
                  <h2 class="mb-1">{{slotProps.data.supplierName}}</h2>
                  <h2 class="mb-1">{{slotProps.data.description}}</h2>



                </div>
                <div class="car-buttons mt-5">
                  <router-link to="/profile-suplier/:id">
                    <pv-button icon="pi pi-plus" label="See More" />
                  </router-link>
                </div>
              </div>
            </div>
          </template>
        </pv-carousel>
      </div>
    </div>
  </div>
</template>

<script>

import {SuppliersApiService} from "@/supplier/services/suppliers-api.service";

import {useRoute} from "vue-router";


export default {
  name: "list-supplier.component",
  data() {
    return {
      id:null,
      supplier: null,
      supplierService: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ]

    }
  },
  created() {
    const route= useRoute();
    this.id = route.params.id;

    console.log(this.id)
    this.supplierService = new SuppliersApiService();
    this.supplierService.getAll().then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
      this.supplier = response.data;
    });
  },
}


</script>

<style lang="scss" scoped>
.background{
  background-color: #afbaca;
}
#sup {
  display: flex;
  height: 300px;

  align-items: center;
}
#sup img {
  max-width:500px;
  position:relative;
  top:0px;
  left:150px;
}
#sup div {
  display: grid;
  position:relative;
  top:0px;
  left:250px;
  width: 40%;
  height: 100%;
  right: 5%;

  opacity: 80%;
  align-items: center;
  text-align: center;
}
#button {
  width: 20%;
}
.profile-supplier {
  .profile-supplier-item {
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: .3rem;
    text-align: center;
    padding: 2rem 0;
  }

  .supplier-image {
    width: 20%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }
}
</style>