import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css'; //样式重置
import '@/assets/js/errorMonitoring.js'; // 错误监控
// import '@/services/mock/mock.ts'; // 模拟数据
import './plugins/element.js';
import './plugins/echarts.js';
import './plugins/video.js';

Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    (window as any).hljs.highlightBlock(block);
  });
});
// 移动端console 调试
// import Vconsole from 'vconsole';
// const vConsole = new Vconsole();
// Vue.use(vConsole);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
