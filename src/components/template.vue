<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Template',
  data() {
    return {
      title: '学习'
    };
  },
  mounted() {},
  methods: {}
});
</script>
