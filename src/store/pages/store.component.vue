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

}
</script>

<style scoped>

</style>