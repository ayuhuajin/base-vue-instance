<template>
  <div class="test-bank-manage">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TestBankManage',
  data() {
    return {};
  },
  mounted() {},
  methods: {}
});
</script>
<style>
body {
  background: #fff !important;
}
</style>
<style lang="scss" scoped>
.test-bank-manage {
  min-height: 100vh;
  background: #fff;
}
</style>
