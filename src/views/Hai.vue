<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hai',
  data() {
    return {
      title: '前端首页'
    };
  },
  mounted() {},
  methods: {}
});
</script>
