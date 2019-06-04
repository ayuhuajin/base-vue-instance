<template>
  <div class="base-main">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseMain',
  data() {
    return {
      title: 'BaseMain'
    };
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
.base-main {
  flex: 1;
  padding: 20px;
}
// 过度动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
