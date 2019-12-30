<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :class="{ active: index == num }" @click="tabView(item, index)" :key="index">
        <a>{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BlogHeader',
  data() {
    return {
      num: 0,
      list: [
        {
          id: 0,
          name: '首页',
          routerName: 'UserList'
        },
        {
          id: 1,
          name: '技能',
          routerName: 'UserList'
        },
        {
          id: 2,
          name: '项目',
          routerName: 'UserList'
        },
        {
          id: 3,
          name: '项目',
          routerName: 'UserList'
        },
        {
          id: 4,
          name: '框架',
          routerName: 'UserList'
        },
        {
          id: 5,
          name: '工具',
          routerName: 'UserList'
        },
        {
          id: 6,
          name: '友情链接',
          routerName: 'UserList'
        }
      ],
      msg: '头部'
    };
  },
  methods: {
    tabView(item, index) {
      this.num = index;
      this.$router.push({
        name: item.routerName
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
ul {
  display: flex;
  justify-content: center;
  line-height: 88px;
  font-size: 18px;
  font-weight: bold;

  background: white;
  li {
    min-width: 60px;
    margin: 0 10px;
    margin: 0 16px;
    text-align: center;
    color: #666;
    cursor: pointer;
    &:hover {
      font-size: 22px;
      transition: all 0.4s;
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
