<template>
  <div class="fblog-detail">
    <section class="head">
      <h4>{{ blog[0].title }}</h4>
      <div>
        <p>时间:{{ blog[0].time }}</p>
        <p>作者:{{ blog[0].author }}</p>
        <p>分类:{{ blog[0].category }}</p>
      </div>
    </section>
    <section class="content">
      <p v-html="html_decode(blog[0].content)"></p>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import blog from '@/store/modules/blog';
export default Vue.extend({
  name: 'FBlogDetail',
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
      ]
    };
  },
  async mounted() {
    this.blog = await blog.dispatch('getBlogView', this.id);
  },
  methods: {
    //html_decode
    html_decode(str) {
      var s = '';
      if (str.length === 0) return '';
      s = str.replace(/&amp;/g, '&');
      s = s.replace(/&lt;/g, '<');
      s = s.replace(/&gt;/g, '>');
      s = s.replace(/&nbsp;/g, ' ');
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
  margin-top: 20px;
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
