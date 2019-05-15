<template>
  <div class="base-sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="/"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      collapse-transition
      unique-opened
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">wsinghai</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">ES6</el-menu-item>
          <el-menu-item index="typeScript">TypeScript</el-menu-item>
          <el-menu-item index="git">Git</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="es5">
          <span slot="title">算法</span>
          <el-menu-item index="algorithm">排序算法</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="test">
        <i class="el-icon-menu"></i>
        <span slot="title">测试</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">暂未开放</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Base-sidebar',
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  }
});
</script>
<style lang="scss">
.base-sidebar {
  background: #fff;
  .el-menu-item.is-active {
    background: #ecf5ff;
  }
  .el-menu-item-group__title {
    padding: 0;
  }
  .el-menu {
    width: 200px;
    border-right: none;
  }
}
</style>
