<template>
  <div class="demo-test">
    <!-- <excel-demo></excel-demo> -->
    <!-- <copy-clip></copy-clip> -->
    <wx-login></wx-login>
    <custom-editor></custom-editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExcelDemo from '@/components/demo/ExcelDemo.vue';
import CopyClip from '@/components/demo/CopyClip.vue';
import WxLogin from '@/components/demo/WxLogin.vue';
import CustomEditor from '@/components/demo/CustomEditor.vue';
export default Vue.extend({
  components: {
    // ExcelDemo
    // CopyClip
    WxLogin,
    CustomEditor
  }
});
</script>

<style lang="scss" scoped>
.demo-test {
  color: #666;
}
</style>
