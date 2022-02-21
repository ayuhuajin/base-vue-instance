<template>
  <div class="demo3">
    <slot-demo></slot-demo>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import slotDemo from '@/components/vue2/components/slot.vue';
export default Vue.extend({
  components: {
    slotDemo
  }
});
</script>
