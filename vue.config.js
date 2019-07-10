const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // vue分析工具
function getProdExternals() {
  return {
    // echarts: 'echarts',
    // 'element-ui': 'element-ui',
    // axios: 'axios',
    // 'chart.js': 'Chart',
    // vue: 'Vue'
  };
}
module.exports = {
  devServer: {
    port: 10086 //启动端口
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      process.env.NODE_ENV === 'production' ? getProdExternals() : {}; // 排除打包的插件
      return {
        plugins: [new BundleAnalyzerPlugin()] //性能分析
      };
    }
  },

  transpileDependencies: [
    './node_modules/query-string/index.js',
    './node_modules/strict-uri-encode/index.js',
    './src/store/modules/index.ts'
  ],
  css: {
    sourceMap: true //开启cssSourceMap
  },
  productionSourceMap: false, // 生产环境打包 不产生 map文件
  outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'cms' // 不同的环境打不同包名
  // configureWebpack: c => {
  //   if (process.env.NODE_ENV == 'production') {
  //     c.externals = {
  //       vue: 'Vue',
  //       vuex: 'Vuex',
  //       'vue-router': 'VueRouter'
  //     };
  //   }
  // },
};
