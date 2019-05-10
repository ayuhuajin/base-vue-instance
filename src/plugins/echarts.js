import Vue from 'vue';
// 完整引入
// import echarts from 'echarts';

// 按需引入
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';

Vue.prototype.$echarts = echarts;
export default echarts;
