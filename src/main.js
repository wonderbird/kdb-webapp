import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import MomentVue from 'vue-moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(MomentVue);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
