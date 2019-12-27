<template>
  <div>
    <ul>
      <li v-for="item in blogList" :key="item._id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import BlogList from '@/components/frondEnd/BlogList';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
import minxin from '@/assets/js/mixin';
export default Vue.extend({
  name: 'FBlogList',
  mixins: [minxin],
  data() {
    return {
      blogList: []
    };
  },
  async mounted() {
    try {
      this.blogList = await blog.dispatch('getBlogList', {
        pageNumber: 1,
        pageSize: 100000,
        categoryId: '',
        name: ''
      });
      this.blogList = this.blogList.data;
    } catch (err) {
      this.showToast('error', err.response.data);
    }

    // let result1 = await index.dispatch('getCategoryList', {
    //   pageSize: 100000,
    //   pageNumber: 1,
    //   categoryId: '',
    //   name: ''
    // });
    // let result2 = await blog.dispatch('getBlogView', '5e058077a1ec1f4d68d8a8d6');
  },
  methods: {}
});
</script>
