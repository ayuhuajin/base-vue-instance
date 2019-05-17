<template>
  <div class="git">
    <learn-git></learn-git>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LearnGit from '@/learn/git/LearnGit.vue';
export default Vue.extend({
  components: {
    LearnGit
  }
});
</script>
