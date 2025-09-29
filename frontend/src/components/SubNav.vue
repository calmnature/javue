<template>
  <div>
    <div class="sub-navbar" id="subNavbar" v-if="isVisible">
      <router-link :to="info.link" v-for="(info, idx) in subNavInfo" :key="idx"
        :class="info.clicked ? 'active' : ''" @click="clickedToggle(info)"
      >
        {{info.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      isVisible : false,
      subNavInfo : [
        {name : "Lotto", link : "/feature/lotto", clicked : true},
        {name : "Todo", link : "/feature/todo", clicked : false}
      ],
    }
  },
  props: {
    nowState : {
      type : String,
      required : true,
    },
  },
  methods: {
    clickedToggle(info) {
      this.subNavInfo.forEach((element) => {
        element.clicked = false;
      });
      info.clicked = true;
    },
  },
  mounted() {
    this.isVisible = true;
  }
}
</script>

<style scoped>
/* 서브 네비바 */
.sub-navbar {
  background-color: black;
  padding: 8px 20px;
  border-bottom: 1px solid #dee2e6;
}

.sub-navbar a {
  margin-right: 15px;
  color: #E0E0E0;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
}

.sub-navbar a:hover {
  background-color: #00FF00;
  color: black;
}

.sub-navbar a.active {
  background-color: #007bff;
  color: #E0E0E0;
}
</style>
