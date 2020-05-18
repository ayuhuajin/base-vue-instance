<template>
  <div class="wx-login">
    {{ data }}
  </div>
</template>

<script>
// 微信登录需要服务号与微信认证？？？
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      data: '123'
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log('denglu');
      const code = this.getUrlParam('code');
      const local = window.location.href;
      if (code == null || code === '') {
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx58ec77bed4a1261d&redirect_uri=' +
          encodeURIComponent(local) +
          '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
      } else {
        this.getinfo();
      }
    },
    getinfo() {
      console.log('f');
    },
    getUrlParam(name) {
      //封装方法
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    }
  }
});
</script>
