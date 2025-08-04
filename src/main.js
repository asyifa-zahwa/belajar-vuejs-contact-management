import { createApp } from 'vue'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import  Layout  from './components/Layout.vue'
import UserRegister from '/src/components/User/UserRegister.vue';
import UserLogin from '/src/components/User/UserLogin.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
        component: Layout,
        children: [
            {
                path: '/register',
                name: 'register',
                component: UserRegister
            },
            {
                path: '/login',
                name: 'login',
                component: UserLogin
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'home',
    },
]});
createApp(App).use(routes).mount('#app')
