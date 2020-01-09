<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      Radio 单选
    </template>
    <template v-slot:example>
      <hai-radio></hai-radio>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoRadio',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'Radio 单选',
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
