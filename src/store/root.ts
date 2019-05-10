import Vue from 'vue';
import Vuex from 'vuex';
import AppStore from './app-store';
Vue.use(Vuex);

export default new AppStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {},
  actions: {},
  getters: {}
});
