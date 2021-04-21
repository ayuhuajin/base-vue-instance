<template>
  <div class="wechat-pay">
    <ul>
      <li>
        <p>数学一年级教材</p>
        <span>$6</span>
      </li>
    </ul>
    <span @click="createInit">立即支付</span>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ALiPay',
  data() {
    return {
      test:'test'
    };
  },
  methods: {
    createInit(){
      this.out_trade_no = Date.parse(new Date());
      ali.dispatch('createAliOrder',{
        out_trade_no: this.out_trade_no,// 必填 商户订单主键, 就是你要生成的
        subject: '女装',      // 必填 商品概要
        total_amount: 0.01,    // 必填 多少钱
      }).then((result)=>{
        console.log(result,8989);
        this.config.value = result.data.qrCode
        this.timer = setInterval(this.searchOrder, 2000);
      })
    },
    payMoney(){
      console.log('fui');
    }
  }
})
</script>
