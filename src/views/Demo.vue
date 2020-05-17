<template>
  <div class="demo-test">
    <excel-demo></excel-demo>
    <copy-clip></copy-clip>
    <!-- <wx-login></wx-login> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExcelDemo from '@/components/demo/ExcelDemo.vue';
import CopyClip from '@/components/demo/CopyClip.vue';
// import WxLogin from '@/components/demo/WxLogin.vue';
export default Vue.extend({
  components: {
    ExcelDemo,
    CopyClip
    // WxLogin
  }
});
</script>

<style lang="scss" scoped>
.demo-test {
  color: #666;
}
</style>
