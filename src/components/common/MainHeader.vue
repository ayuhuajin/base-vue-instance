<template>
  <div class="main-header">
    <div class="title">{{ titleName }}</div>
    <div class="searchOption">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MainHeader',
  props: {
    titleName: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
.main-header {
  border: 1px solid #ddd;
  background: #fff;
  .el-button {
    width: 120px;
    margin-right: 15px;
  }
  el-button--primary {
    background: #409eff;
  }
  .el-button--warning {
    background: #ff812d;
  }
  .title {
    padding: 10px 20px;
    font-size: 20px;
    background: #f5f5f5;
  }
  .searchOption {
    display: flex;
    padding: 30px;
    > div {
      display: flex;
      justify-items: center;
      align-items: center;
      margin-right: 30px;
      span {
        min-width: 45px;
        margin-right: 5px;
        font-size: 16px;
        color: #666;
      }
    }
  }
}
</style>
