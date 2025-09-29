import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Feature from '@/views/Feature.vue'
import Lotto from '@/views/Lotto.vue'
import Todo from '@/views/Todo.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/feature',
        component: Feature,
        children: [
            {
                path: 'lotto',
                component: Lotto,
            },
            {
                path: 'todo',
                component: Todo,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
