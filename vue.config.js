module.exports = {
  devServer: {
    port: 8989 //启动端口
  },
  configureWebpack: c => {
    if (process.env.NODE_ENV == "production") {
      c.externals = {
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter"
      };
    }
  },
  transpileDependencies: [
    "./node_modules/query-string/index.js",
    "./node_modules/strict-uri-encode/index.js",
    "./src/store/modules/index.ts"
  ],
  css: {
    sourceMap: true //开启cssSourceMap
  }
};
