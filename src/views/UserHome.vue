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
