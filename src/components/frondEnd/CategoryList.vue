<template>
  <div class="fcategory-list">
    <ul>
      <li v-for="(item, index) in categoryList" :key="item._id" @click="toDetail(item)">
        <img :src="require(`../../assets/images/${(index + 1) % 5}.jpg`)" alt="" />
        <div>
          <h4>{{ item.name }}</h4>
          <p>{{ item.date }}</p>
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
import dateFormate from '@/assets/js/utils/timeFormate';
export default Vue.extend({
  name: 'UserCategoryList',
  mixins: [minxin],
  components: { NoData, PageChange },
  data() {
    return {
      noData: false,
      categoryList: [],
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
  async mounted() {
    try {
      let categoryObj = await index.dispatch('getCategoryList', {
        pageNumber: 1,
        pageSize: 100000,
        categoryId: '',
        name: ''
      });
      if (categoryObj.data !== null && categoryObj.data.length > 0) {
        this.categoryList = categoryObj.data;
        this.pageInfo.totalPages = categoryObj.total;
        this.noData = false;
      } else {
        this.categoryList = [];
        this.noData = true;
      }
    } catch (err) {
      this.showToast('error', err.response.data);
    }
  },
  methods: {
    // 格式化时间
    formate(date) {
      return this.dateFormate('timeformatDay', date);
    },
    // 跳转列表详情
    toDetail(item) {
      this.$router.push({
        name: 'UserList',
        query: {
          categoryId: item._id
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.fcategory-list {
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
