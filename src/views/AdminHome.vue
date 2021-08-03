<template>
  <div class="admin-home">
    <base-header></base-header>
    <div class="wrap">
      <base-sidebar></base-sidebar>
      <base-main></base-main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseHeader from '@/components/common/BaseHeader.vue';
import BaseSidebar from '@/components/common/BaseSidebar.vue';
import BaseMain from '@/components/common/BaseMain.vue';
export default Vue.extend({
  name: 'AdminHome',
  components: {
    BaseHeader,
    BaseSidebar,
    BaseMain
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
@include scrollbar;
.wrap {
  display: flex;
  height: calc(100vh - 81px);
  .base-sidebar {
    height: calc(100vh - 81px);
    border-right: 1px solid #eee;
    overflow: auto;
  }
  .base-main {
    overflow: auto;
  }
}
</style>
