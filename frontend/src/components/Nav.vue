<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/javue-logo.png" width="150" height="50">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(data, idx) in navData" :key="idx">
<!--              <a class="nav-link" href="#" @click="$store.commit('setNavState', data)">{{ data }}</a>-->
              <router-link class="nav-link" :to="data.link">{{data.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navData: [
          {name: 'Home', link: '/'},
          {name: 'Feature', link: '/feature'}
      ]
    };
  },
}
</script>

<style scoped>
</style>
