<template>
  <demo-item :title="title" :params="params" style="position:relative">
    <template v-slot:desc>
      loading
    </template>
    <template v-slot:example>
      <hai-button @onClick="onClick(1)">加载局部loading</hai-button>
      <hai-button @onClick="onClick(2)">加载全局loading</hai-button>
      <hai-loading :isShow="isShow" :type="type"></hai-loading>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoLoading',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'Loading 加载',
      isShow: false,
      type: 'global',
      params: [
        {
          name: 'cname',
          desc: '自定义class名称',
          type: 'String',
          options: '---',
          default: '---',
          isMust: false
        },
        {
          name: 'type',
          desc: 'loading 类型',
          type: 'String',
          options: 'global/normal',
          default: 'global',
          isMust: false
        },
        {
          name: 'text',
          desc: 'loading 文字描述',
          type: 'String',
          options: '---',
          default: '加载中',
          isMust: false
        },
        {
          name: 'slot',
          desc: '自定义loading',
          type: '---',
          options: '---',
          default: '---',
          isMust: '---'
        }
      ]
    };
  },
  methods: {
    onClick(num) {
      if (num === 1) {
        this.type = 'normal';
      } else {
        this.type = 'global';
      }
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.button-item {
  margin-right: 10px;
}
</style>
