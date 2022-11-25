import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './style.css'


import router from './router';


/* const pinia = createPinia() */

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
