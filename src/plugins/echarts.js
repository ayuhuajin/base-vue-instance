import Vue from 'vue';
//1. 完整引入
// import echarts from 'echarts';

//2. 按需引入
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/title';

//3. babel-plugin-equire - 一个按需加载 echarts 模块的 babel 插件
// const echarts = equire([
//   // 写上你需要的模块
//   'bar',
//   'legend',
//   'title'
// ]);
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/title';

Vue.prototype.$echarts = echarts;
export default echarts;
