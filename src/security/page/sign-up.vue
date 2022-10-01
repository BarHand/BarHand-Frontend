

<template>
  <div class="container">
    <h1>Register BarHand</h1>
    <div class="col-md-9">
      <form>
        <div class="form-group">
          <input
              type="name"
              class="form-control"
              id="fullname"
              placeholder="Full Name"
          />
        </div>
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
        <div class="form-group">
          <input
              type="password"
              class="form-control"
              id="reenterpasword"
              placeholder="Reenterpassword"
          />
        </div>
        <div>
          <h5 id="single">Client type</h5>
          <SelectButton v-model="Client" :options="Bussiness" aria-labelledby="single" />
        </div>
        <br>
        <p>
          <label>
            <input type="radio" name="optionRadios" id="ClientButton" value="option1"> "Client"
          </label>
          <br>
          <label>
            <input type="radio" name="optionRadios" id="BussinessButton" value="option1"> "Bussiness"
          </label>
        </p>
        <div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>

</style>

