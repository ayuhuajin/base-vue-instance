<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      多选按钮
    </template>
    <template v-slot:example>
      <hai-check-box></hai-check-box>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoCheckBox',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'CheckBox 多选',
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
