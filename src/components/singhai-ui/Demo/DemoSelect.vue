<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      选择器
    </template>
    <template v-slot:example>
      <hai-switch></hai-switch>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoSelect',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'Select 选择器',
      params: [
        {
          name: 'cname',
          desc: '自定义class名称',
          type: 'String',
          options: '---',
          default: '---',
          isMust: false
        }
      ]
    };
  },
  methods: {}
};
</script>
