import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
    .use(store)
    .mount('#app');

// Dispatch horse generation on startup
store.dispatch('generateHorses');
