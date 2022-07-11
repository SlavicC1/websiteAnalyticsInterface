import { createRouter, createWebHashHistory }from 'vue-router';
import AuthPage from '@/components/AuthPage.vue';
import AnalyticsPage from '@/components/AnalyticsPage.vue';

const routes = [
    { path: '/', component: AuthPage },
    { path: '/analytics', component: AnalyticsPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;