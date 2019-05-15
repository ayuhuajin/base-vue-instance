<template>
  <div class="base-main">
    <router-view></router-view>
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
