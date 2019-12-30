<template>
  <div class="user-home">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'UserHome',
  data() {
    return {
      title: '前端首页'
    };
  },
  mounted() {},
  methods: {}
});
</script>
<style lang="scss">
@import '@/assets/css/base.scss';
.user-home {
  @include scrollbar;
  padding-bottom: 65px;
  overflow: auto;
}
</style>
