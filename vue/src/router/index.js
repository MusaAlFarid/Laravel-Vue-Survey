import { createRouter,createWebHistory } from "vue-router";
import Dashboard from '../views/dashboard.vue'
import Surveys from '../views/surveys.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import { Store } from "vuex";
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {path: '/dashboard', name: "Dashboard", component: Dashboard},
            {path: '/surveys', name: "Surveys", component: Surveys}
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: '/Login',
                name: 'Login',
                component: Login
            },
            {
                path: '/Register',
                name: 'Register',
                component: Register
            }
        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Login'})
    } else if(store.state.user.token && to.name === 'Login' || to.name === 'Register') {
        next({name: 'Dashboard'});
    }
})

export default router;
