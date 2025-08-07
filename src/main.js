import { createApp } from 'vue'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import  Layout  from './components/Layout.vue'
import UserRegister from '/src/components/User/UserRegister.vue';
import UserLogin from '/src/components/User/UserLogin.vue';
import DashboardLayout from './components/DashboardLayout.vue';
import ContactList from './components/Contact/ContactList.vue';
import UserProfile from './components/User/UserProfile.vue';
import UserLogout from './components/User/UserLogout.vue';
import ContactCreate from './components/Contact/ContactCreate.vue';
import ContactEdit from './components/Contact/ContactEdit.vue';
import ContactDetail from './components/Contact/ContactDetail.vue';
import AddressCreate from './components/Addres/AddressCreate.vue';
import AddressEdit from './components/Addres/AddressEdit.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'register',
                name: 'register',
                component: UserRegister
            },
            {
                path: 'login',
                name: 'login',
                component: UserLogin
            },
            {
                path: '',
                redirect: { name: 'login' }, // Ini yang diperbaiki
            }
            
        ]
    },
    
    {
        path: '/dashboard',
        name: 'home',
        component: DashboardLayout,
        children: [
            {
                path: 'contacts',
                name: 'contacts',
                component: ContactList
            },
            {
                path: 'contacts/create',
                name: 'contacts-create',
                component: ContactCreate
            },
            {
                path: 'contacts/:id/edit',
                name: 'contacts-edit',
                component: ContactEdit,
                
            },
            {
                path: 'contacts/:id',
                name: 'contacts-detail',
                component: ContactDetail,
                
            },
            {
                path: 'contacts/:id/addresses/create',
                name: 'addresses-create',
                component: AddressCreate,
                
            },
            {
                path: 'contacts/:id/addresses/:addressId/edit',
                name: 'addresses-edit',
                component: AddressEdit
            },
            {
                path: 'users/profile',
                name: 'profile',
                component: UserProfile
            },
            {
                path: 'users/logout',
                name: 'logout',
                component: UserLogout
            }
        ]
    },
]});
createApp(App).use(routes).mount('#app')
