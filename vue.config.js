const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // vue分析工具
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
// vconsole-webpack-plugin

function getProdExternals() {
  return {
    vue: 'Vue'
    // echarts: 'echarts',
    // VueRouter: 'VueRouter',
    // vuex: 'Vuex',
    // axios: 'axios',
    // 'element-ui': 'ELEMENT'
  };
}

// CDN外链，会插入到index.html中
const cdn = {
  // 开发环境
  dev: {
    css: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    js: []
  },
  // 生产环境
  build: {
    css: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/element-ui/lib/index.js'
    ]
  }
};
module.exports = {
  devServer: {
    port: 10086 //启动端口
  },
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    // config.devtool:'source-map',
    // config.devtool = config.mode === 'production' ? false : 'source-map';
    config.devtool = 'eval-source-map'; // 浏览器能看到源码
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true; //移除console
      config.externals = process.env.NODE_ENV === 'production' ? getProdExternals() : {}; // 排除打包的插件
      return {
        plugins: [
          //性能分析
          // new BundleAnalyzerPlugin(),
          // 开启Gzip压缩
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
          })
        ] //性能分析
      };
    }
  },
  // chainWebpack(config) {
  //   config.plugins.delete('preload'); // TODO: need test
  //   config.plugins.delete('prefetch'); // TODO: need test
  // },

  transpileDependencies: [
    './node_modules/query-string/index.js',
    './node_modules/strict-uri-encode/index.js',
    './src/store/modules/index.ts'
  ],
  css: {
    sourceMap: true, //开启cssSourceMap
    loaderOptions: {
      sass: {
        // 设置全局引用
        data: `
        @import "./node_modules/compass-mixins/lib/_compass.scss";
        @import "./node_modules/compass-mixins/lib/compass/_layout.scss";
        `
      }
    }
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
