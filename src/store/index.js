import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connections: [],
  },
  mutations: {
    addConnections(state, connections) {
      console.log(connections.length);
      state.connections.push(...connections);
    },
  },
});
