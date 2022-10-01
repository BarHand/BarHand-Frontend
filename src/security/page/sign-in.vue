

<template>
  <div class="card">
    <h5>Login to BarHand</h5>
    <div class="field">
      <label for="Email">Email</label>
      <input id="Email" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-4">
    </div>
    <div class="field">
      <label for="password1">Password</label>
      <input id="password1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-4">
    </div>
    <router-link to="/about">
    <pv-button label="Login" />
    </router-link>
  </div>

</template>

<script>
export default {

};
</script>

<style scoped>
.p-button {
  margin-right: .5rem;
}

.p-buttonset {
.p-button {
  margin-right: 0;
}
}

.sizes {
.button {
  margin-bottom: .5rem;
  display: block;

&:last-child {
   margin-bottom: 0;
 }
}
}

@media screen and (max-width: 640px) {
  .p-button {
    margin-bottom: .5rem;

&:not(.p-button-icon-only) {
   display: flex;
   width: 100%;
 }
}

.p-buttonset {
.p-button {
  margin-bottom: 0;
}
}
}
.card{
  justify-content: center;
  size: auto;
  text-align: center;
}
.field-radiobutton{
  display:flex;
  justify-content: center;
  text-align: center;
}


</style>
