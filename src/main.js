import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/fonts/icomoon/style.css'
import '@/assets/css/bootstrap.min.css'
//import '@/assets/css/jquery-ui.css'
//import '@/assets/css/owl.carousel.min.css'
//import '@/assets/css/owl.theme.default.min.css'
//import '@/assets/css/jquery.mb.YTPlayer.min.css'
import '@/assets/css/jquery.fancybox.min.css'
import '@/assets/css/bootstrap-datepicker.css'
import '@/assets/fonts/flaticon/font/flaticon.css'
import '@/assets/css/aos.css'

/*import "@/assets/js/jquery-3.3.1.min.js"
import "@/assets/js/jquery-migrate-3.0.1.min.js"
//import "@/assets/js/jquery-ui.js"
import "@/assets/js/popper.min.js"
//import "@/assets/js/bootstrap.min.js"
import "@/assets/js/owl.carousel.min.js"
import "@/assets/js/jquery.stellar.min.js"
//import "@/assets/js/jquery.countdown.min.js"
//import "@/assets/js/bootstrap-datepicker.min.js"
import "@/assets/js/jquery.easing.1.3.js"
import "@/assets/js/aos.js"
import "@/assets/js/jquery.fancybox.min.js"
//import "@/assets/js/jquery.sticky.js"
import "@/assets/js/jquery.mb.YTPlayer.min.js"
import "@/assets/js/main.js"*/


createApp(App).use(store).use(router).mount('#app')
