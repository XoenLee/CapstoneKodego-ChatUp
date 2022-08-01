import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// css framework, js,css, squery, fontawesome

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './style.css';

createApp(App).use(store).use(router).mount('#app')
