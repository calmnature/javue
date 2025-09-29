<template>
  <div>
    <Nav/>

    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: "App",
  components: {
    Nav,
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style scoped>
  div {
    background: black;
    color: white;
  }
</style>
