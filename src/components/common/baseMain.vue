<template>
  <div class="base-main">
    我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID
    各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment)
    来达到这个效果： 来达到这个效果： 来达到这个效果： 来达到这个效果： 来达到这个效果：
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
  margin: 20px;
  padding: 20px;
  background: white;
}
</style>
