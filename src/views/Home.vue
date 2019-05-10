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
  created() {
    console.log('home-created');
  },
  mounted() {
    console.log('home-mounted');
  },
  methods: {}
});
</script>
