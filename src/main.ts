import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css';  //样式重置
import '@/assets/js/errorMonitoring.js'; // 错误监控
import '@/services/mock/mock.ts'  // 模拟数据

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
