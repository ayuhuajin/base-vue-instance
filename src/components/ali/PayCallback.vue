<template>
  <div class="pay-callback">
    支付回调，付款成功。。。。。。。。
  </div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  mounted(){
    let status = getUrlParam("trade_status");//3
    if(status) {
      window.location = "https://wulilang.com/demo";
    }
  },
  methods:{
    getUrlParam(name) {//封装方法
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    }
  }
});
</script>

<style lang="scss" scoped>
.pay-callback {
  color: #666;
}
</style>
