import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

//router
window.Vue = Vue;
window.VueRouter = VueRouter;
import VueRouter from 'vue-router';
import router from '../routes';
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


