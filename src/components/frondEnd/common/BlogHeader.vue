<template>
  <div class="header">
    <div>
      <ul>
        <li v-for="(item, index) in list" :class="{ active: index == num }" @click="tabView(item, index)" :key="index">
          <a>{{ item.name }}</a>
        </li>
      </ul>
      <base-search v-if="$route.path === '/'"></base-search>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseSearch from '@/components/common/BaseSearch';
export default Vue.extend({
  name: 'BlogHeader',
  components: { BaseSearch },
  data() {
    return {
      num: 0,
      list: [
        {
          id: 0,
          name: '首页',
          path: '/',
          routerName: 'FuserList'
        },
        {
          id: 1,
          name: '技能',
          path: '/baseSkill',
          routerName: 'baseSkill'
        },
        {
          id: 2,
          name: '项目',
          path: '/myProject',
          routerName: 'myProject'
        },
        {
          id: 3,
          name: '分类',
          path: '/categoryList',
          routerName: 'UserCategoryList'
        },
        {
          id: 4,
          name: '框架',
          path: '/uiFrame',
          routerName: 'uiFrame'
        },
        {
          id: 5,
          name: '工具',
          path: '/tools',
          routerName: 'tools'
        },
        {
          id: 6,
          name: '友情链接',
          path: '/friendLinks',
          routerName: 'friendLinks'
        }
      ],
      msg: '头部'
    };
  },
  watch: {
    $route() {
      // 获取当前路径
      let path = this.$route.path;
      console.log(path);
      // 检索当前路径
      this.checkRouterLocal(path);
    }
  },
  mounted() {
    let path = this.$route.path;
    // 检索当前路径
    this.checkRouterLocal(path);
  },
  methods: {
    tabView(item, index) {
      this.num = index;
      this.$router.push({
        name: item.routerName
      });
    },
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      let obj = this.list.find(item => item.path === path);
      if (obj) {
        this.num = obj.id;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.header {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  background: white;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
}
ul {
  display: flex;
  line-height: 64px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  li {
    min-width: 60px;
    margin: 0 10px;
    margin: 0 16px;
    text-align: center;
    color: #666;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      font-size: 22px;
    }
  }
  .active {
    font-size: 22px;
    color: $mainColor;
    a {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 10px;
        height: 2px;
        width: 100%;
        background: $mainColor;
      }
    }
  }
}
</style>
