<template>
  <h1></h1>
  <div class="grid center-screen  card-div"  v-if="notifications.length === 0">
    <pv-card class="col-7 card-list  ">
      <template #title >
        All good !
        <br>
        You dont have pending notifications
        <br>
      </template>
      <template #content>
        <img src="https://cdn.discordapp.com/attachments/959280112279379968/1040804378401067109/unknown.png" alt="allGoodImg" class=" align-items-center justify-content-center">
      </template>

    </pv-card>
  </div>
  <div class="grid center-screen ">
    <div class="col-7 card-div" v-for="notification in notifications" :key="notification" >
      <pv-card class=" card-list  ">
        <template #title >
          {{notification?.title }}

        </template>
        <template #content>
        {{notification?.content}}

        </template>
        <template #footer>
          <pv-button icon="pi pi-check" class="p-button-rounded" v-on:click="deleteNotification(notification.id)" />
        </template>

      </pv-card>

    </div>


  </div>

</template>
<script>
import {useRoute} from "vue-router/dist/vue-router";
import {NotificationService} from "./notification.service";
import {ProductsApiService} from "../inventory/services/products-api.service";


export default {
  name: "notification.component",
  data() {
    return {
      id: Number,
      typeUrl: String,
      notifications: null,
      notificationService: null


    }
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    console.log(this.id)

    const route2 = useRoute();
    this.typeUrl= route2.matched[0].path;
    this.typeUrl= this.typeUrl.substring(1, this.typeUrl.length-4)
    console.log(this.typeUrl);

    this.notificationService = new NotificationService();
    this.notificationService.getAllById(this.id, this.typeUrl).then((response) => {
      this.notifications = response.data;
      console.log(this.notifications);
    });
  },
  methods: {

    deleteNotification(id){
      this.notificationService = new NotificationService();
      this.notificationService.delete(id).then((response) => {
      });
      this.$router.go(); //refresh
    }
  }




}
</script>

<style scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

img{
  width: 50%;
}
</style>