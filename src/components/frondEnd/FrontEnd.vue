<template>
  <div class="frond-end">
    <blog-header></blog-header>
    <router-view class="kk"></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import BlogHeader from '@/components/frondEnd/common/BlogHeader';
import BlogFooter from '@/components/frondEnd/common/BlogFooter';
export default Vue.extend({
  name: 'FrontEnd',
  components: {
    BlogHeader,
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

<style lang="scss">
.kk {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
