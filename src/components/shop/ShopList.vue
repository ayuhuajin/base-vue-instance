<template>
  <div class="shop-list">
    <ul>
      <li v-for="(item, index) in shopData" :key="index" @click="goShopDetail(item)">
        <img :src="item.img ? item.img : defaultImg" alt="" />
        <p>{{ item.shopName }}</p>
        <p v-if="item.showSecret">密码:{{ item.showSecret }}</p>
        <p>免费试听</p>
        <span @click="buy">购买</span>
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
import BaseDialog from '@/components/common/BaseDialog.vue';

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
      activeItem: ''
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
    buy() {
      console.log('goumai');
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
