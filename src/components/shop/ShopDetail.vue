<template>
  <div class="shop-list">
    <ul>
      <li>
        <p>{{ secretStr }}</p>
        <div>
          <p>{{ obj.content }}</p>
          <span @click="copyUrl(obj.content)">复制</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import shop from '@/store/modules/shop';
import order from '@/store/modules/order';
export default Vue.extend({
  name: 'ShopDetail',
  data() {
    return {
      test: 'test',
      id: this.$route.query.id,
      secretStr: this.$route.query.secret,
      orderId: this.$route.query.orderId,
      obj: {}
    };
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      order.dispatch('queryOrderById', { orderId: this.orderId }).then(result => {
        console.log(result[0].status, 78987897);
        if (result[0].status == '未付款') {
          this.$message.error('请先获取查看权限');
          this.$router.push({
            name: 'shopList'
          });
        }
      });
      shop.dispatch('getShopByIdSecret', { id: this.id, secret: this.secretStr }).then(result => {
        console.log(result, 9999);
        this.obj = result[0];
      });
    },
    // 复制方法
    copyUrl(text) {
      let input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);

      if (document.execCommand) {
        document.execCommand('Copy');
        this.$message.success('复制成功');
      } else {
        this.$message.error('复制失败');
      }
      document.body.removeChild(input);
    }
  }
});
</script>
<style scoped lang="scss">
.shop-detail {
}
</style>
