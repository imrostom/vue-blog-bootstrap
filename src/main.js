import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router/routes'
import axios from 'axios';

import './assets/css/styles.css'
import './assets/css/custom.css'

const app = createApp(App)
app.use(router)


router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
})




app.config.globalProperties.axios = axios
axios.defaults.baseURL = 'http://green-ecommerce-laravel.test/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const authToken = localStorage.getItem('authToken')
if (authToken) {
    axios.defaults.headers.common['Authorization'] = authToken
}

app.mount('#app')
