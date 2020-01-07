<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      Alert
    </template>
    <template v-slot:example>
      <hai-alert></hai-alert>
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
      title: 'Alert 提示',
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
