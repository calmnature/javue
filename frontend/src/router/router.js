import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Feature from '../components/Feature.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/feature',
        component: Feature
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
