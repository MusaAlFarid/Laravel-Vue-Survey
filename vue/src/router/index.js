import { createRouter,createWebHistory } from "vue-router";
import Dashboard from '../views/dashboard.vue'
import Surveys from '../views/surveys.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        children: [
            {path: '/dashboard', name: "Dashboard", component: Dashboard},
            {path: '/surveys', name: "Surveys", component: Surveys}
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

export default router;
