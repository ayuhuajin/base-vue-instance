<template>
  <div class="pay-demo">
    <el-tabs type="border-card" v-model="mapName">
      <el-tab-pane label="支付宝" name="支付宝" >
        <ali-pay v-if="mapName=='支付宝'"></ali-pay>
      </el-tab-pane>
      <el-tab-pane label="微信" name="微信" >
        <wechat-pay v-if="mapName=='微信'"></wechat-pay>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import AliPay from '../components/pay/AliPay'
import WechatPay from '../components/pay/WechatPay'
export default Vue.extend({
  name: 'PayDemo',
  components:{
    AliPay,
    WechatPay,
  },
  data() {
    return {
      mapName:'支付宝'
    };
  },
  mounted() {
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
</style>
