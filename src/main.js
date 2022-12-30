import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { Plugin } from 'vue-fragment'
import Header from '@/components/Landing/Header.vue';
import Footer from "@/components/Landing/Footer.vue";
import VueEllipseProgress from 'vue-ellipse-progress';


Vue.config.productionTip = false

Vue.component('myHeader', Header);
Vue.component('myFooter', Footer);

Vue.use(Plugin);
Vue.use(VueEllipseProgress);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
