import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    // state 변수
    state() {
        return {
            resultNumbers : [1, 2, 3],
        }
    },
    // state 변수 값 변경 함수 정의
    mutations: {
        clearResultNumbers(state) {
            state.resultNumbers = [];
        },
    },
    // ajax 작성
    actions: {
        submitSelectNumbers(selectedNumbers) {
            axios.post('/api/lotto/getLottoNumber', selectedNumbers, {headers : {'Content-Type' : 'application/json'}})
                .then(response => {
                    alert('ajax 성공');
                })
                .then(error => {
                    alert('로또 번호 요청 중 에러 발생');
                });
        }
    }
})

export default store;