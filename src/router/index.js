import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import ConnectionOverview from '../connection/ConnectionOverview.vue';
import ConnectionEditor from '../connection/ConnectionEditor.vue';
import TrackLog from '../connection/TrackLog.vue';
import InfoPage from '../info/InfoPage.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/connections',
    name: 'ConnectionOverview',
    component: ConnectionOverview,
  }, {
    path: '/info',
    name: 'Info',
    component: InfoPage,
  }, {
    path: '/connections/tracklog',
    name: 'TrackLog',
    component: TrackLog,
    props: true,
  }, {
    path: '/connections/edit',
    name: 'ConnectionEditor',
    component: ConnectionEditor,
  }],
});
