<template>
  <div>
    学习git
    <span> git log --no-merges master.. 查看当前分支log</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LearnGit',
  data() {
    return {
      title: '学习git'
    };
  },
  mounted() {},
  methods: {}
});
</script>
