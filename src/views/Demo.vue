<template>
  <div class="demo-test">
    <!-- <excel-demo></excel-demo> -->
    <!-- <copy-clip></copy-clip> -->
    <!-- <wx-login></wx-login> -->
    <send-email></send-email>
    <custom-editor></custom-editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExcelDemo from '@/components/demo/ExcelDemo.vue';
import CopyClip from '@/components/demo/CopyClip.vue';
import WxLogin from '@/components/demo/WxLogin.vue';
import CustomEditor from '@/components/demo/CustomEditor.vue';
import SendEmail from '@/components/ali/SendEmail.vue';
export default Vue.extend({
  components: {
    // ExcelDemo
    // CopyClip
    // WxLogin,
    CustomEditor,
    SendEmail
  }
});
</script>

<style lang="scss" scoped>
.demo-test {
  padding: 20px;
  color: #666;
}
</style>
