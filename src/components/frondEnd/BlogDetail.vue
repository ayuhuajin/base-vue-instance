<template>
  <div class="fblog-detail">
    <section class="head">
      <h4>{{ blog[0].title }}</h4>
      <div>
        <p>时间:{{ formate(blog[0].time) }}</p>
        <p v-if="blog[0].author">作者:{{ blog[0].author }}</p>
        <p v-if="blog[0].category">分类:{{ blog[0].category }}</p>
      </div>
    </section>
    <section class="content">
      <div v-highlight v-html="html_decode(blog[0].content)"></div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
import minxin from '@/assets/js/mixin';
export default Vue.extend({
  name: 'FBlogDetail',
  mixins: [minxin],
  data() {
    return {
      id: this.$route.query.id,
      blog: [
        {
          content: '<p>3666565</p>',
          time: '2019-12-27T03:54:31.461Z',
          title: '3333',
          author: '',
          category: '',
          __v: 0
        }
      ],
      categoryList: []
    };
  },
  async mounted() {
    this.blog = await blog.dispatch('getBlogView', this.id);
    this.categoryList = await index.dispatch('getCategoryList', {
      pageNumber: 1,
      pageSize: 999,
      name: ''
    });
    if (this.categoryList.data.length > 0) {
      let obj = this.categoryList.data.find(item => {
        return item._id === this.blog[0].categoryId;
      });
      if (obj) {
        this.$set(this.blog[0], 'category', obj.name);
        this.$set(this.blog[0], 'author', obj.author);
      }
    }
  },
  methods: {
    // 格式化时间
    formate(date) {
      return this.dateFormate('timeformatDay', date);
    },
    //html_decode
    html_decode(str) {
      var s = '';
      if (str.length === 0) return '';
      s = str.replace(/&amp;/g, '&');
      s = s.replace(/&lt;/g, '<');
      s = s.replace(/&gt;/g, '>');
      // s = s.replace(/&nbsp;/g, ' ');
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      s = s.replace(/<br\/>/g, '\n');
      return s;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.fblog-detail {
  max-width: 1200px;
  margin: 20px auto 20px;
  padding: 30px 45px;
  border-radius: 5px;
  background: #fff;
  .head {
    text-align: center;
    h4 {
      font-size: 20px;
      color: $mainColor;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      color: #999;
      p {
        padding: 0 10px;
      }
    }
  }
  .content {
    margin-top: 25px;
  }
}
</style>
