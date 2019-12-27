<template>
  <div>
    45621233
  </div>
</template>

<script>
import Vue from 'vue';
import BlogList from '@/components/frondEnd/BlogList';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
export default Vue.extend({
  name: 'FBlogList',
  data() {
    return {
      tit: '列表'
    };
  },
  async mounted() {
    let result = await blog.dispatch('getBlogList', {
      pageSize: 100000,
      pageNumber: 1,
      categoryId: '',
      name: ''
    });
    let result1 = await index.dispatch('getCategoryList', {
      pageSize: 100000,
      pageNumber: 1,
      categoryId: '',
      name: ''
    });
    let result2 = await blog.dispatch('getBlogView', '5e058077a1ec1f4d68d8a8d6');
  },
  methods: {}
});
</script>
