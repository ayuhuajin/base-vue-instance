<template>
  <div class="fblog-list">
    <ul v-if="blogList.length > 0">
      <li v-for="(item, index) in blogList" :key="item._id" @click="toDetail(item)">
        <img :src="item.img.length > 0 ? item.img : require(`../../assets/images/${(index + 1) % 5}.jpg`)" alt="" />
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{ formate(item.time) }}</p>
        </div>
      </li>
    </ul>
    <page-change :pageInfo="pageInfo" :layout="layout"></page-change>
    <no-data :haveData="noData"></no-data>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
import PageChange from '@/components/common/PageChange';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
import minxin from '@/assets/js/mixin';
import Bus from '@/assets/js/bus';
import dateFormate from '@/assets/js/utils/timeFormate';
export default Vue.extend({
  name: 'FBlogList',
  mixins: [minxin],
  components: { NoData, PageChange },
  data() {
    return {
      noData: false,
      categoryId: '',
      blogName: '',
      blogList: [],
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 1, // 总页数
        pageFunc: this.init, // 当前页数需要调用的函数
        pageSize: 10, // 一页几条数据
        class: 'pageClass',
        background: false
      },
      layout: 'prev, pager, next'
    };
  },
  watch: {
    $route() {
      this.init();
    }
  },
  async mounted() {
    this.init();
    Bus.$on('search', val => {
      this.blogName = val;
      this.init();
    });
  },
  methods: {
    async init() {
      try {
        let blogObj = await blog.dispatch('getBlogList', {
          pageNumber: 1,
          pageSize: 100000,
          categoryId: this.$route.query.categoryId,
          name: this.blogName
        });
        if (blogObj.data !== null && blogObj.data.length > 0) {
          this.blogList = blogObj.data;
          this.pageInfo.totalPages = blogObj.total;
          this.noData = false;
        } else {
          this.noData = true;
          this.blogList = [];
        }
      } catch (err) {
        this.showToast('error', err);
      }
    },
    // 格式化时间
    formate(date) {
      return this.dateFormate('timeformatDay', date);
    },
    // 跳转详情
    toDetail(item) {
      this.$router.push({
        name: 'UserDetail',
        query: {
          id: item._id
        }
      });
    }
  }
});
</script>
<style lang="scss">
@import '@/assets/css/common.scss';
.fblog-list {
  .pageClass {
    .el-pager {
      .number {
        color: #666;
      }
      li.active {
        color: $mainColor;
      }
      li:hover {
        color: $mainColor;
      }
      .el-icon-arrow-left:before,
      .el-icon-arrow-right:before {
        color: #666;
      }
    }
  }
  .el-paginationbutton:hover {
    color: $mainColor !important;
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.fblog-list {
  max-width: 1200px;
  margin: 0 auto;
  ul {
    margin-top: 25px;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    background: #fff;
    &:hover {
      cursor: pointer;
      background: #fbfbfb;
    }
    img {
      margin-right: 20px;
      width: 60px;
      height: 60px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    > div {
      h4 {
        @include ellipsis;
        width: 500px;
        font-size: 20px;
        font-weight: bold;
        color: $mainColor;
      }
    }
  }
}
</style>
