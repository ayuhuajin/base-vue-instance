<template>
  <div class="ali-pay">
    <ali-pay></ali-pay>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AliPay from '@/components/ali/AliPay.vue';
export default Vue.extend({
  components: {
    AliPay
  }
});
</script>

<style lang="scss" scoped>
.ali-pay {
  color: #666;
}
</style>
