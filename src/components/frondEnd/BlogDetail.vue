<template>
  <div class="fblog-detail">
    <section class="head">
      <h4>{{ blog[0].title }}</h4>
      <div>
        <p>时间：{{ formate(blog[0].time) }}</p>
        <p v-if="blog[0].author">作者：{{ blog[0].author }}</p>
        <p v-if="blog[0].category">分类：{{ blog[0].category }}</p>
      </div>
    </section>
    <section class="content">
      <!-- markdown 编辑 -->
      <mavon-editor
        v-model="blog[0].content"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
        :toolbarsFlag="false"
      />
      <!-- 代码高亮编辑 -->
      <!-- <div v-highlight v-html="html_decode(blog[0].content)"></div> -->
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
import minxin from '@/assets/js/mixin';
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default Vue.extend({
  name: 'FBlogDetail',
  mixins: [minxin],
  components: {
    mavonEditor
  },
  data() {
    return {
      id: this.$route.query.id,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      blog: [
        {
          content: '',
          time: '',
          title: '',
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
    console.log(this.blog[0].content);
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
      font-size: 24px;
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
        font-size: 14px;
      }
    }
  }
  .content {
    margin-top: 25px;
  }
}
</style>
