<template>
  <div class="fblog-list">
    <ul>
      <li v-for="item in blogList" :key="item._id" @click="toDetail(item)">
        <img src="../../assets/images/icon_back.png" alt="" />
        <div>
          <h4>{{ item.title }}</h4>
          <!-- <p>{{ item.content }}</p> -->
        </div>
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
  },
  methods: {
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
      width: 40px;
      height: 40px;
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
