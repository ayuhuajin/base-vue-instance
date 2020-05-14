<template>
  <div class="demo-test">
    <excel-demo></excel-demo>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExcelDemo from '@/components/demo/ExcelDemo.vue';
export default Vue.extend({
  components: {
    ExcelDemo
  }
});
</script>

<style lang="scss" scoped>
  .demo-test{
    color:#666;
  }
</style>
