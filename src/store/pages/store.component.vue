<template>
  <TheNavigation></TheNavigation>
  <RouterView :key="$route.path"/>

</template>

<script>
import TheNavigation from "../../components/TheNavigation.vue";
export default {
  name: "store.component",
  components:{
    TheNavigation
  },
  data(){
    return{};
  },
  props:{
    id:{
      type:Number,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>