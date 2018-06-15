import VueRouter from 'vue-router';

import Homepage from './src/components/Homepage.vue';

export default new VueRouter({
    routes: [
      { path: '/', component: Homepage }
    ]
});