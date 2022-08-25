<template>
  <div class="base-table">
    <el-table
      :data="tableData"
      :class="tableClass"
      style="width: 100%"
      @row-dblclick="doubleClick"
      @selection-change="handleSelectionChange"
    >
      <slot></slot>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseTable',
  props: {
    tableData: {
      required: true,
      type: Array
    },
    tableClass: {
      type: String,
      default: 'tableClass'
    },
    type: {
      type: String,
      default: 'index'
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    doubleClick() {
      console.log('双击');
    },
    handleSelectionChange(value) {
      this.$emit('selectChange', value);
    }
  }
});
</script>
<style lang="scss">
.base-table {
  padding: 20px;
  th,
  tr {
    .cell {
      height: 25px;
      line-height: 25px;
      text-align: center;
    }
  }
  th {
    height: 28px;
    line-height: 28px;
    color: #3c6989;
    font-weight: bold;
  }
  .el-table__header {
    border-top: 1px solid #eee;
  }
  .content-edit {
    font-size: 14px;
    color: #3389ff;
    cursor: pointer;
  }
  .content-delete {
    margin-left: 20px;
    font-size: 14px;
    color: #ff3817;
    cursor: pointer;
  }
}
</style>

<style lang="scss" scoped>
.base-table {
  border: 1px solid #ddd;
  background: white;
}
</style>
