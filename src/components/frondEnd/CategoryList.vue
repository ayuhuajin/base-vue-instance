<template>
  <div class="fcategory-list">
    <ul>
      <li v-for="(item, index) in categoryList" :key="item._id" @click="toDetail(item)">
        <img :src="require(`../../assets/images/${(index + 1) % 3}.jpg`)" alt="" />
        <div>
          <h4>{{ item.name }}</h4>
          <p>{{ item.date }}</p>
        </div>
      </li>
    </ul>
    <no-data :haveData="noData"></no-data>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
import blog from '@/store/modules/blog';
import index from '@/store/modules/index';
import minxin from '@/assets/js/mixin';
import dateFormate from '@/assets/js/utils/timeFormate';
export default Vue.extend({
  name: 'UserCategoryList',
  mixins: [minxin],
  components: { NoData },
  data() {
    return {
      noData: false,
      categoryList: []
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
        this.noData = false;
      } else {
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
