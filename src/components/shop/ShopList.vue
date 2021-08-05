<template>
  <div class="shop-list">
    <ul>
      <li v-for="(item, index) in shopData" :key="index" @click="goShopDetail(item)">
        <img :src="item.img ? item.img : defaultImg" alt="" />
        <p>{{ item.shopName }}</p>
        <p>密码</p>
        <p>免费试听</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import md5 from 'md5';
import shop from '@/store/modules/shop';
export default Vue.extend({
  name: 'ShopList',
  data() {
    return {
      test: 'test',
      secretStr: '1234',
      defaultImg: require('../../assets/images/2.jpg'),
      shopList: [
        {
          shopId: '',
          shopName: '第一件商品', // 商品名称
          shopImg: require('../../assets/images/2.jpg'),
          content: '', // 商品内容
          shopSecret: '12345',
          onTrial: false, // 是否试用
          isPurchase: false, // 是否购买
          isWechatFriend: false, // 是否微信好友
          OfficialAccount: false, // 是否关注公众号
          isDiscount: false, // 是否有优惠
          isGroupBy: false, // 是否团购
          buyCount: 0 // 被购买几次
        },
        {
          shopId: '',
          shopName: '第一件商品', // 商品名称
          shopImg: require('../../assets/images/2.jpg'),
          content: '', // 商品内容
          shopSecret: '123456',
          onTrial: false, // 是否试用
          isPurchase: false, // 是否购买
          isWechatFriend: false, // 是否微信好友
          OfficialAccount: false, // 是否关注公众号
          isDiscount: false, // 是否有优惠
          isGroupBy: false, // 是否团购
          buyCount: 0 // 被购买几次
        },
        {
          shopId: '',
          shopName: '第一件商品', // 商品名称
          shopImg: require('../../assets/images/2.jpg'),
          content: '', // 商品内容
          shopSecret: '123456',
          onTrial: false, // 是否试用
          isPurchase: false, // 是否购买
          isWechatFriend: false, // 是否微信好友
          OfficialAccount: false, // 是否关注公众号
          isDiscount: false, // 是否有优惠
          isGroupBy: false, // 是否团购
          buyCount: 0 // 被购买几次
        },
        {
          shopId: '',
          shopName: '第一件商品', // 商品名称
          shopImg: require('../../assets/images/2.jpg'),
          content: '', // 商品内容
          shopSecret: '123456',
          onTrial: false, // 是否试用
          isPurchase: false, // 是否购买
          isWechatFriend: false, // 是否微信好友
          OfficialAccount: false, // 是否关注公众号
          isDiscount: false, // 是否有优惠
          isGroupBy: false, // 是否团购
          buyCount: 0 // 被购买几次
        }
      ],
      shopData: []
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
    goShopDetail(item) {
      let str = md5(123 + this.secretStr + 123);
      console.log(item, 888, str);
      if (str !== item.secret) {
        this.$message.success('暂无权限查看');
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
<style scoped lang="scss">
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
