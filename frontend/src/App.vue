<template>
  <div>
    <Nav/>

    <router-view></router-view>
<!--    <Home/>-->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
// import Home from './components/Home.vue'

export default {
  name: "App",
  components: {
    Nav,
    // Home,
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style>
  div {
    background: black;
    color: white;
  }
</style>
