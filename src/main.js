import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/fonts/icomoon/style.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/bootstrap-datepicker.css'
import '@/assets/fonts/flaticon/font/flaticon.css'
import '@/assets/css/aos.css'



createApp(App).use(store).use(router).mount('#app')
