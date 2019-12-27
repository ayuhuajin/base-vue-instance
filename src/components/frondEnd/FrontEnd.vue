<template>
  <div>
    <blog-header></blog-header>
    <blog-list></blog-list>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import BlogHeader from '@/components/frondEnd/common/BlogHeader';
import BlogList from '@/components/frondEnd/BlogList';
import BlogFooter from '@/components/frondEnd/common/BlogFooter';
export default Vue.extend({
  name: 'FrontEnd',
  components: {
    BlogHeader,
    BlogList,
    BlogFooter
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
