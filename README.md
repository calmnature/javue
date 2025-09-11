### Backend(Java) + Frontend(Vue)를 합친 프로젝트
---
##### Java + Vue 연동 참조 사이트 : https://choidoosic.tistory.com/167
---
#### 🔴 Java Dependency
- Spring Web
- Lombok
- Spring Data JPA
- MySQL Driver
- Spring Boot DevTools
- Validation

#### 🟢 Vue Libraries
- ESlint / Prettier
- Vuex
- Axios

##### ESlint / Prettier Install
```bash
npm install --save-dev prettier@^3 eslint-plugin-prettier eslint-config-prettier
```
##### Vuex Install
```bash
npm install vue-router@4
```
##### Axios Install
```bash
npm install axios
```
##### Bootstrap Install
```bash
npm install bootstrap
```
---
### ⚙️Setting Files
##### Vue + Java 연동
```javascript
module.exports = {
  // npm run build를 했을 때 frontend 파일이 빌드될 경로
  outputDir: "../src/main/resources/static",
  devServer: {
    // vue의 서버 포트
    port: 8081,
    proxy: {
      '/api': { // api로 요청하는 모든 URL은 서버(Spring)으로 요청
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};
```
##### .eslintrc.js
```javascript
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier', // prettier와 충돌 방지
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off', // 컴포넌트 이름 한 단어만 써도 허용
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
```
##### router.js
```javascript
// router.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '/',
    //     component: Home
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
```
##### App.vue
```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')
```javascript
