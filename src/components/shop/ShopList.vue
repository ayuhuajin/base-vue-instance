<template>
  <div class="shop-list">
    <ul>
      <li v-for="(item, index) in shopData" :key="index" @click.stop="goShopDetail(item)">
        <img :src="item.img ? item.img : defaultImg" alt="" />
        <p>{{ item.shopName }}</p>
        <p v-if="item.showSecret">密码:{{ item.showSecret }}</p>
        <p>免费试听</p>
        <p>
          <span>${{ item.payMoney }}元</span>
          <span @click.stop="buy(item)">购买</span>
        </p>
      </li>
    </ul>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <el-input v-model="secretStr" placeholder="请输入商品密钥"></el-input>
      <div class="operation">
        <span class="save" @click="handleSave()">保存</span>
        <span class="cancel" @click="closeDialog">取消</span>
      </div>
    </base-dialog>
  </div>
</template>
<script>
import Vue from 'vue';
import md5 from 'md5';
import shop from '@/store/modules/shop';
import ali from '@/store/modules/ali';
import BaseDialog from '@/components/common/BaseDialog.vue';
import uuidv1 from 'uuid/v1';

export default Vue.extend({
  name: 'ShopList',
  components: {
    BaseDialog
  },
  data() {
    return {
      // secret: '',
      test: 'test',
      secretStr: '',
      defaultImg: require('../../assets/images/2.jpg'),
      shopList: [],
      shopData: [],
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '暂无权限,请输入商品密钥',
        dialogWidth: '80%',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      activeItem: '',
      timer: null,
      out_trade_no: ''
    };
  },
  computed: {
    shopL() {
      return this.shopList.filter(item => {
        return this.secretStr !== item.shopSecret;
      });
    }
  },
  mounted() {
    this.init();
    this.initData();
  },
  methods: {
    init() {
      console.log('初始化');
    },
    async initData() {
      let result = await shop.dispatch('getAllShop', {
        // title: this.name
      });
      this.shopData = result.data;
      console.log(result, 999);
    },
    buy(item) {
      this.out_trade_no =
        (Date.parse(new Date()) / 1000).toString() + parseInt((Math.random() + 1) * Math.pow(10, 8 - 1));
      // this.out_trade_no = uuidv1();
      console.log(this.out_trade_no, 99999);
      // return;
      ali
        .dispatch('createOrder', {
          out_trade_no: this.out_trade_no, // 必填 商户订单主键, 就是你要生成的
          subject: item.shopName, // 必填 商品概要
          total_amount: item.payMoney // 必填 多少钱
        })
        .then(result => {
          console.log(result, 8989);
          window.location.href = result.data.qrCode;
          this.timer = setInterval(this.searchOrder, 2000);
        });
    },
    searchOrder() {
      ali.dispatch('queryOrder', this.out_trade_no).then(data => {
        console.log(data.data.tradeStatus, 'shuju');
        if (data.data.tradeStatus == 'TRADE_SUCCESS') {
          clearInterval(this.timer);
          window.location.href = 'http://wulilang.com/ali/hai';
        }
      });
    },
    // 关闭弹窗
    closeDialog() {
      this.showDialog = false;
      this.secretStr = '';
    },
    handleSave() {
      // let str = md5(123 + this.secretStr + 123);
      this.goShopDetail(this.activeItem);
      console.log('jinru', this.activeItem);
    },
    goShopDetail(item) {
      let str = md5(123 + this.secretStr + 123);
      console.log(item, 888, str);
      if (str !== item.secret) {
        this.$message.success('密钥错误,暂无权限查看');
        this.activeItem = item;
        this.showDialog = true;
        return;
      }
      this.$router.push({
        name: 'shopDetail',
        query: {
          id: item._id,
          secret: str
        }
        // path: '/shopDetail'
      });
    }
  }
});
</script>
<style lang="scss">
.user-dialog {
  /deep/ .el-dialog__body {
    .operation {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .el-input__inner {
    line-height: 44px;
  }
}
</style>
<style scoped lang="scss">
.save,
.cancel {
  margin-top: 20px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #409eff;
  text-align: center;
  line-height: 40px;
  color: white;
  cursor: pointer;
  background: #66b1ff;
}
.cancel {
  margin-left: 20px;
  border: 1px solid #dcdfe6;
  color: #333;
  background: white;
}
.shop-list {
  ul {
    display: flex;
    text-align: center;
    padding: 0 2%;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 30vw;
      height: 30vw;
    }
    li {
      flex: 0 0 30%;
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;
      background: #fff;
    }
  }
}
</style>
