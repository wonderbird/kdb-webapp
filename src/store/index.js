import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connections: [],
  },
  mutations: {
    addConnections(state, connections) {
      state.connections.push(...connections);
    },
    removeConnection(state) {
      state.connections.splice(0, 1);
    },
  },
});
