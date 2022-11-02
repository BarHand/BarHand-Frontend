<template>
  <h1 class="header" style="text-align: center"> Add Product</h1>
  <div class="flex">
    <pv-card style="width: 30em">
      <template #title>
        <h1 style="font-size: 14px;">Complete the product information</h1>
      </template>
      <template #content>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-5">
            <div class="p-fluid">
              <div class="field">
                <label for="name">Name</label>
                <pv-input-text style="height: 15px;" id="name" type="text" v-model="this.productname"/>
              </div>
              <div class="field">
                <label for="category">Category</label>
                <pv-input-text style="height: 15px;" id="category" type="password" v-model="this.productcategory"/>
              </div>
              <div class="field">
                <label for="description">Description</label>
                <pv-input-text style="height: 15px;" id="description" type="password" v-model="this.productdescription"/>
              </div>
              <div class="field">
                <label for="image">image (URL)</label>
                <pv-input-text style="height: 15px;" id="image" type="password" v-model="this.productimg"/>
              </div>
              <div v-for="category of avaliable" :key="category.key" class="field-radiobutton">
                <RadioButton :inputId="category.key" name="category" :value="category.name" v-model="selectoption" :disabled="category.key === 'R'" />
                <label :for="category.key">{{category.name}}</label>
              </div>
              <RouterLink to="/supplier-inventory/:id">
              <pv-button style="height: 30px;"  label="Add" v-on:click="validate()"></pv-button>
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "supplier-inventory-add",
  data() {
    return {
      products: null,
      avaliable: [
        {name: 'Stock', key: 'Y'},
        {name: 'No Stock', key: 'N'},

      ],
      selectoption: null
    }
  },
  created() {
    this.selectoption = this.avaliable[1].name;
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  height: 100%;
}
</style>