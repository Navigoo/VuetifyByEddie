<template>
  <router-view />
  <Nav></Nav>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav: Nav,
  },
};
</script>
