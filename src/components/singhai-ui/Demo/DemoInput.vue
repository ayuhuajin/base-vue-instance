<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      输入框
    </template>
    <template v-slot:example>
      <hai-input></hai-input>
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
      title: 'Input 输入框',
      params: [
        {
          name: 'cname',
          desc: '自定义class名称',
          type: 'String',
          options: '---',
          default: 'normal',
          isMust: false
        }
      ]
    };
  },
  methods: {}
};
</script>
