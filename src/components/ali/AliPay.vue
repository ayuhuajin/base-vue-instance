<template>
  <div class="ali-pay">测试阿里支付<span @click="createInit">$6元</span></div>
</template>

<script lang="js">
import Vue from 'vue';
import ali from '@/store/modules/ali'
export default Vue.extend({
  methods:{
    createInit(){
      ali.dispatch('createOrder')
    }
  }
});
</script>

<style lang="scss" scoped>
.ali-pay {
  color: #666;
}
</style>
