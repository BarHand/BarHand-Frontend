<template>
  <div class="form-demo">
    <pv-dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
        <h5>Registration Successful!</h5>
        <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
          Your account is registered under name <b>{{name}}</b> ; it'll be valid next 30 days without activation. Please check <b>{{email}}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <a href="/">
        <div class="flex justify-content-center">
          <pv-button label="OK" @click="toggleDialog"  class="p-button-text" />
        </div>
        </a>
      </template>
    </pv-dialog>

    <div  class="flex justify-content-center">
      <div class="card">
        <h5 class="text-center">Register</h5>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <pv-input-text id="name" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
              <label for="name" :class="{'p-error':v$.name.$invalid && submitted}">Name*</label>
            </div>
            <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-input-text id="lastName" v-model="v$.lastName.$model" :class="{'p-invalid':v$.lastName.$invalid && submitted}" />
              <label for="lastName" :class="{'p-error':v$.lastName.$invalid && submitted}">Last Name*</label>
            </div>
            <small v-if="(v$.lastName.$invalid && submitted) || v$.lastName.$pending.$response" class="p-error">{{v$.lastName.required.$message.replace('Value', 'LastName')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-input-text id="businessName" v-model="v$.businessName.$model" :class="{'p-invalid':v$.businessName.$invalid && submitted}" />
              <label for="businessName" :class="{'p-error':v$.businessName.$invalid && submitted}">Business Name*</label>
            </div>
            <small v-if="(v$.businessName.$invalid && submitted) || v$.businessName.$pending.$response" class="p-error">{{v$.businessName.required.$message.replace('Value', 'BusinessName')}}</small>
          </div>

          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <pv-input-text id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
              <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
            </div>
            <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                            <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pv-password id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{sp.level}}
                  <pv-divider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </pv-password>
              <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Password*</label>
            </div>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>

          <div class="field">
            <div class="p-float-label">
              <pv-drop-down id="typeUser" v-model="typeUser" :options="optionsUser"  />
              <label for="typeUser">User</label>
            </div>
          </div>
          <div class="field-checkbox">
            <pv-checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
            <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
          </div>
          <pv-button type="submit" label="Submit" class="mt-2" @click="addNewUser()" />
        </form>
      </div>
    </div>
  </div>



</template>

<script>

import useVuelidate from "@vuelidate/core";
import {AuthenticationApiService} from "@/security/services/authentication-api.service";
import {email,required} from "@vuelidate/validators";

export default {
  name: "sign-up.component",
  setup: () => ({v$: useVuelidate()}),
  data() {
    return {
      typeUser: 'Supplier',
      optionsUser: ['Store', 'Supplier'],
      name: '',
      lastName:'',
      email: '',
      password: '',
      businessName:'',
      date: null,
      user: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
      supplier:{},
      store:{},
      authenticationApiService: null,
    }
  },

  validations() {
    return {
      name: {
        required,
      },
      lastName:{
        required,
      },
      businessName:{
        required,
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      accept: {
        required
      }
    }
  },
  created() {
    this.authenticationApiService = new AuthenticationApiService();
  },


  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.lastName='';
      this.businessName='';
      this.email = '';
      this.password = '';
      this.date = null;
      this.user = null;
      this.accept = null;
      this.submitted = false;
    }
    ,
    addNewUser() {
      if ( this.typeUser === 'Supplier'){
        this.supplier={
          name:this.name,
          lastName:this.lastName,
          supplierName:this.businessName,
          email:this.email,
          password:this.password,
        }
        this.authenticationApiService
            .signUpSupplier( this.supplier)
      }else
      if ( this.typeUser === 'Store'){
        this.store={
          name:this.name,
          lastName:this.lastName,
          storeName:this.businessName,
          email:this.email,
          password:this.password,
        }
        this.authenticationApiService
            .signUpStore( this.store)
      }

    },
  }
}

</script>

<style scoped>

.card {
  min-width: 450px;
}

form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

@media screen and (max-width: 960px) {
  .card {
    width: 80%;
  }
}

/*
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

body {

  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn.shopify.com/s/files/1/0070/7032/files/moving-boxes-warehouse.jpg?v=1634221970&width=1024");

  background-size: 100%;

  opacity: 0.9;
}

.container {
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background: -moz-linear-gradient(135deg, black, white);
}

.container form .user-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

form .user-detail .input-box {
  width: calc(100% / 2 - 20px);
}

form .TypeUser {
  display: flex;
  position: relative;
  margin: 14px 0;
}
*/

</style>

