<template>
  <div class="hello">4444</div>
</template>

<script lang="ts">
import Vue from 'vue';
import index from '@/store/modules/index.ts';
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let aa = await index.dispatch('getAllCategory');
    }
  }
});
</script>
