import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import ConnectionOverview from '../connection/ConnectionOverview.vue';
import InfoPage from '../info/InfoPage.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/connections',
    name: 'Connections',
    component: ConnectionOverview,
  }, {
    path: '/info',
    name: 'Info',
    component: InfoPage,
  }],
});
