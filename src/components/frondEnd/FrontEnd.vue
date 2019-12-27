<template>
  <div>
    <blog-list></blog-list>
  </div>
</template>

<script>
import Vue from 'vue';
import BlogList from '@/components/frondEnd/BlogList';
export default Vue.extend({
  name: 'FrontEnd',
  components: {
    BlogList
  },
  data() {
    return {
      tit: '首页'
    };
  },
  mounted() {},
  methods: {}
});
</script>
