<template>
  <div class="container">
    <h1>Login to BarHand</h1>
    <div class="col-md-9">
      <form>
        <div class="form-group">
          <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
          />
        </div>
        <br>
        <div>
          <RouterLink to="/about">
            <pv-button label="LogIn" style="background-color: #9acb3c" />

          </RouterLink>        </div>
      </form>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
