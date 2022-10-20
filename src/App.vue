<template>
  <chat></chat>
</template>

<script>
import chat from "../src/chats/chat.vue";
export default {
  name: "App",
  components: {
    chat
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>