<template>
  <div class="store">
    <div class="store-grid-item card">
      <div class="store-grid-item-top">
        <div>
          <div class="store-storeName">Customer Name: {{storeData.name}} {{storeData.lastName}}</div>
        </div>
      </div>
      <div class="store-grid-item-content">
        <img :src="storeData.image" :alt="storeData.name"/>
        <div class="store-address">Address:{{storeData.address}}</div>
        <div class="store-email">Email:{{storeData.email}}</div>
        <div class="store-phone">Phone:{{storeData.phone}}</div>
      </div>
    </div>
  </div>
  <GoBack></GoBack>
</template>

<script>
import {useRoute} from "vue-router";
import {ProductsApiService} from "@/inventory/services/products-api.service";
import GoBack from "@/components/GoBack.vue";
import {StoresApiService} from "../services/stores-api.service";

export default {
  name: "store-view",
  components: {GoBack},
  data(){
    return{
      storeId: Number,
      storeData:{},
      storeService: null,

    }
  },
  created() {
    const route = useRoute();
    this.storeId= route.params.sId
    this.getStore(this.storeId);
  },
  methods: {
    getStore(idStore) {
      this.storeService = new StoresApiService();
      this.storeService .getById(idStore).then((response)=>{
        this.storeData=response.data;
      });
    },

    viewSupplier(supplierId){
      this.$router.push({name: 'view-supplier-profile',params:{sId:supplierId}});
    }

  }
}
</script>

<style lang="scss" scoped>
.store{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  border-radius: 4px;
  margin-bottom: 2rem;
  width: 450px;
}
.store-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.store-address{
  margin: 0 0 1rem 0;
}

.store-storeName{
  vertical-align: middle;
  margin-right: .5rem;
  text-align: center;
}

.store-storeName{
  font-weight: 600;
  vertical-align: middle;
}



::v-deep(.store-grid-item) {
  margin: .5rem;
  border: 1px solid var(--surface-border);



  .store-grid-item-top,
  .store-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
    width: 100%;
  }

  .store-grid-item-content {
    text-align: center;
  }

}

@media screen and (max-width: 576px) {
  .store-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;

    }

    .store-list-detail {
      text-align: center;
    }

    .store-list-action {
      display: flex;
      flex-direction: column;
    }

    .store-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>