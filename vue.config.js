const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // vue分析工具
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

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
      // 开启Gzip压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
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
  //开启代理
  // proxy: {  //开启代理无法携带 cookie,后端无法判断请求正确性，返回401
  //   '/api': {
  //     target: 'http://ylwapi.t.nxin.com',
  //     ws: true,
  //     changeOrigin: true,
  //     pathRequiresRewrite: {
  //       '^/api': '/'
  //     }
  //   }
  // }
};
