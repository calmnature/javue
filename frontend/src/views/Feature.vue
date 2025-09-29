<template>
  <div>
    <SubNav :nowState="current"/>

    <div class="vh-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav.vue'

export default {
  name: "Feature",
  data() {
    return {
      current : "feature"
    }
  },
  components: {
    SubNav,
  }
}
</script>

<style scoped>
</style>
