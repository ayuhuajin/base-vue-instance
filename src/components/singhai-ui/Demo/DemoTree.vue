<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      树形
    </template>
    <template v-slot:example>
      <hai-tree></hai-tree>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'Demotree',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'Tree 树形',
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
