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
  <div class="center-box mt-4">
    <button class="btn btn-success me-4" @click="submitSelectNumbers(selected)">번호 확정</button>
    <button class="btn btn-secondary" @click="clearAll()">초기화</button>
  </div>
  <div class="center-box mt-3">
    <button
        class="btn btn-danger m-2 res-btn"
        v-for="(number, i) in lottoNumbers" :key="i">{{number}}</button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex"

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
    clearAll() {
      this.clearResultNumbers();
      this.selected = [];
    },
    ...mapMutations(['clearResultNumbers']),
    ...mapActions(['submitSelectNumbers']),
  },
  computed: {
    ...mapState({
      lottoNumbers : state => state.resultNumbers,
    }),
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

.res-btn {
  width: 50px;
  height : 50px;
  border-radius: 50%;
}
</style>
