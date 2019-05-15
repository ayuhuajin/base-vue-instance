<template>
  <div class="home">
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
import BaseMain from '@/components/common/baseMain.vue';
export default Vue.extend({
  name: 'home',
  components: {
    BaseHeader,
    BaseSidebar,
    BaseMain
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  height: calc(100vh - 81px);
  .base-sidebar {
    height: calc(100vh - 81px);
    overflow: auto;
  }
}
</style>
