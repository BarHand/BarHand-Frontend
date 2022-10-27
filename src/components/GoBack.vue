<template>
  <div align="center">
    <pv-button @click="goBack" class="discord p-2" aria-label="Discord">
      <i class="pi pi-arrow-left px-2" ></i>
      <span class="px-2">Back</span>
    </pv-button>
  </div>
</template>

<script>
export default {
  name: "GoBack",
  methods:{
    goBack(){
      return this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss" scoped>

.p-button.discord {
  background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%) !important;
  background-size: 200% 100% !important;
  background-position: right bottom !important;
  transition: background-position 0.5s ease-out !important;
  color: #fff !important;
  border-color: var(--bluegray-800) !important;
}
.p-button.discord:hover {
  background-position: left bottom !important;
}
.p-button.discord i {
  background-color: var(--bluegray-800) !important;
  padding: 10px;
  margin: 0px;
}
.p-button.discord:focus {
  box-shadow: 0 0 0 1px var(--bluegray-500) !important;
}

</style>
