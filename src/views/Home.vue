<template>
  <div class="home">
    <base-sidebar></base-sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSidebar from '@/components/common/BaseSidebar.vue';
export default Vue.extend({
  name: 'home',
  components: {
    BaseSidebar
  },
  methods: {}
});
</script>
