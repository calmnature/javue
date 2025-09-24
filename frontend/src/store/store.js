import { createStore } from 'vuex'
// import axios from 'axios'

const store = createStore({
    // state 변수
    state() {
        return {
            navState: "tmp",
        }
    },
    // state 변수 값 변경 함수 정의
    mutations: {
        setNavState(state, data) {
            state.navState = data;
        },
    },
    // ajax 작성
    actions: {

    }
})

export default store;