<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :class="{ active: index == 1 }" :key="index">
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
      index: 1,
      list: [
        {
          name: '首页'
        },
        {
          name: '技能'
        },
        {
          name: '项目'
        },
        {
          name: '项目'
        },
        {
          name: '项目'
        },
        {
          name: '框架'
        },
        {
          name: '工具'
        }
      ],
      msg: '头部'
    };
  }
});
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  line-height: 88px;
  font-size: 18px;
  font-weight: bold;
  color: #ef7674;
  background: white;
  li {
    position: relative;
    width: 80px;
    margin: 0 16px;
    text-align: center;
    cursor: pointer;
    &:hover {
      // transform: scale(1.4);
      font-size: 22px;
      transition: all 0.4s;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #ef7674;
    }
  }
  .active {
    font-size: 22px;
  }
}
</style>
