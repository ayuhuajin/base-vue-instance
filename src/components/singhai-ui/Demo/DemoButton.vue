<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      按钮有四种颜色，两种状态
    </template>
    <template v-slot:example>
      <hai-button cname="pinkBtn" type="normal">默认按钮</hai-button>
      <hai-button type="success">成功按钮</hai-button>
      <hai-button type="warning">警告按钮</hai-button>
      <hai-button type="danger">危险按钮</hai-button>
      <hai-button type="danger" :disabled="true">禁用按钮</hai-button>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoInput',
  components: {
    DemoItem
  },
  data() {
    return {
      inputItem: {
        color: '#67C23A'
      },
      title: 'Button 按钮',
      params: [
        {
          name: 'cname',
          desc: '自定义class名称',
          type: 'String',
          options: '---',
          default: 'normal',
          isMust: false
        },
        {
          name: 'type',
          desc: '按钮类型 ',
          type: 'String',
          options: 'normal/success/warning/danger',
          default: '---',
          isMust: false
        },
        {
          name: 'disabled',
          desc: '按钮状态 ',
          type: 'Bollean',
          options: 'true/false',
          default: 'false',
          isMust: false
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.button-item {
  margin-right: 15px;
}
</style>
