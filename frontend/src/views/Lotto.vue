<template>
  <div class="container">
    <div class="box">
      <button class="btn btn-light btn-lg m-2"
              v-for="number in 45" :key="number"
              @click="toggleBtn(number)"
              :class="{ active : selected.includes(number)}"
      >
        {{ number < 10 ? '0' + number : number }}
      </button>
    </div>
  </div>
  <div class="center-box mt-2" v-if="maxLotto" style="color: hotpink; font-weight: bold;">
    <span>로또 번호는 최대 6개입니다.</span>
  </div>
  <div class="center-box mt-2">
    <button class="btn btn-primary" @click="submitSelectNumbers">번호 확정</button>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "Lotto",
  data() {
    return {
      selected: [],
      maxLotto: false,
    }
  },
  mounted() {
    this.clearResultNumbers();
  },
  methods: {
    toggleBtn(number) {
      if (!this.selected.includes(number) && !this.maxLotto) {
        this.selected.push(number);
      } else {
        this.selected = this.selected.filter(n => n !== number);
      }
      this.maxLotto = this.selected.length > 5;
    },
    ...mapMutations(['clearResultNumbers']),
    ...mapActions(['submitSelectNumbers']),
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* 가로 가운데 */
  align-items: center; /* 세로 가운데 */
  margin-top: 10px;
}

.box {
  display: flex;
  justify-content: center; /* 내부 요소 가로 가운데 */
  flex-wrap: wrap;
  width: 420px;
  height: 600px;
}

button.active {
  background: lightblue;
  color: white;
}

.center-box {
  margin: auto;
  width: 50%;
  text-align: center;
}
</style>
