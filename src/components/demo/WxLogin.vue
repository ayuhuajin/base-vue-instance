<template>
  <div class="wx-login">
    {{ data }}
  </div>
</template>

<script>
// 微信登录需要服务号与微信认证？？？
import Vue from 'vue';
import Axios from 'axios';
import demo from '@/store/modules/demo';
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
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb534ddc40d15ecfc&redirect_uri=' +
          encodeURIComponent(local) +
          '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
      } else {
        //api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
        this.getinfo(code);
      }
    },
    async getinfo(code) {
      console.log('f');
      let result = await demo.dispatch('getWxToken', code);
      console.log(result, 99997);

      // Axios.get(
      //   `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxb534ddc40d15ecfc&secret=ae877da26da8e05dbf26ba9014b090e3&code=${code}&grant_type=authorization_code`
      // ).then(response => {
      //   ctx.response.body = response.data;
      // });
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
