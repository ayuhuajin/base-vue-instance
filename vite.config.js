import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig(({ mode }) => ({
  plugins: [
    createVuePlugin(),
    viteExternalsPlugin({
      vue: 'Vue'
      // 'vue-router': 'VueRouter',
      // vuex: 'Vuex',
      // axios: 'axios',
      // 'element-ui': 'ELEMENT'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData:
          "@import './src/assets/css/common.scss';@import './src/assets/css/base';@import 'compass-mixins/lib/_compass.scss';@import 'compass-mixins/lib/compass/_layout.scss';"
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '~@': resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env': {
      VUE_APP_API: 'http://192.168.42.2:12306'
    }
  },
  server: {
    port: 9000,
    //
    cors: true
  }
}));
