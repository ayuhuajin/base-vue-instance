<template>
  <div class="home">
    <sing-hai />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SingHai from '@/components/SingHai.vue'; // @ is an alias to /src
export default Vue.extend({
  name: 'home',
  components: {
    SingHai
  },
  methods: {
    init() {
      console.log('144');
    }
  }
});
</script>
