<template>
  <div class="shop-list">
    <ul>
      <li>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'ShopList',
  data() {
    return {
      test: 'test',
      secretStr: this.$route.query.shopSId,
      shopList: [
        {
          shopId: '',
          shopName: '第一件商品', // 商品名称
          shopImg: require('../../assets/images/2.jpg'),
          content: '第一件商品', // 商品内容
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
          content: '第一件商品', // 商品内容
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
      ]
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
  },
  methods: {
    init() {
      console.log('初始化');
    }
  }
});
</script>
<style scoped lang="scss">
.shop-detail {
}
</style>
