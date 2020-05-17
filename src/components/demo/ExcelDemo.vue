<template>
  <div class="excel-demo">
    <el-button @click="excelImport">导入</el-button>
    <el-button @click="excelExport">导出</el-button>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      data: '导入导出'
    };
  },
  methods: {
    excelImport() {
      console.log('导入');
    },
    excelExport() {
      console.log('导出');
    }
  }
});
</script>
<style lang="scss" scoped></style>
