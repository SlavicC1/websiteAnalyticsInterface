import { createApp } from 'vue'
import { createRouter, 
    createWebHashHistory }from 'vue-router';
import App from './App.vue';
import AuthPage from './components/AuthPage.vue';
import AnalyticsPage from './components/AnalyticsPage.vue';
import store from './store';

const routes = [
    { path: '/', component: AuthPage },
    { path: '/analytics', component: AnalyticsPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app')
