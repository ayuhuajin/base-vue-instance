<template>
  <div class="ali-pay">
    零食<span @click="createInit">6元</span>
    <vue-qr id="qrcode" :logoSrc="config.logo" :text="config.value" :size="config.size" :margin="0"></vue-qr>

    <div @click="searchOrder">查询订单</div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import ali from '@/store/modules/ali'
import VueQr from 'vue-qr';

export default Vue.extend({
  components: {
    VueQr
  },
  data(){
    return{
      config:{
        value:'',
        logo:'',
        size:200
      },
      timer:null,
      out_trade_no:''
    }
  },
  methods:{
    createInit(){
      this.out_trade_no = Date.parse(new Date());
      ali.dispatch('createOrder',{
        out_trade_no: this.out_trade_no,// 必填 商户订单主键, 就是你要生成的
        subject: '女装',      // 必填 商品概要
        total_amount: 0.01,    // 必填 多少钱
      }).then((result)=>{
        console.log(result,8989);
        this.config.value = result.data.qrCode
        this.timer = setInterval(this.searchOrder, 2000);
      })
    },

    searchOrder(){
      ali.dispatch('queryOrder',this.out_trade_no).then((data)=>{
        console.log(data.data.tradeStatus,'shuju');
          if(data.data.tradeStatus =='TRADE_SUCCESS') {
            clearInterval(this.timer);
            window.location.href="http://wulilang.com/ali/hai"
          }
      })
    },
    // 下载二维码
    downloadImg(e) {
      var oQrcode = document.querySelector('#qrcode img');
      var url = oQrcode.src;
      var a = document.createElement('a');
      var event = new MouseEvent('click');
      // 下载图名字
      a.download = '追溯码:' + this.rowCode;
      //url
      a.href = url;
      //合成函数，执行下载
      a.dispatchEvent(event);
    }
  }
});
</script>

<style lang="scss" scoped>
.ali-pay {
  color: #666;
}
</style>
