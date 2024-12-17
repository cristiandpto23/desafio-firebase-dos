import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { auth } from '@/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { requiresAuth: true },
        },
        {
            path: '/signup',
            component: () => import(/* webpackChunkName: "registroview" */ '../views/SignUpView.vue'),
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "loginview" */ '../views/LoginView.vue'),
            meta: { login: true },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            redirect: '/',
        },
    ],
});

router.beforeEach((to, from, next) => {
    // verifica si la ruta requiere autenticación
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    // verifica si el usuario está autenticado
    const isAuthenticated = auth.currentUser;

    // si la ruta requiere autenticación y el usuario no está autenticado
    if (requiresAuth && !isAuthenticated) {
        // redirige a la página de login 
        next('/login');
    } else {
        // de lo contrario, permite continuar
        next();
    }
});

export default router;
