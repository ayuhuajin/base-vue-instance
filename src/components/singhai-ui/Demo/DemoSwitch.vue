<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      开关
    </template>
    <template v-slot:example>
      <hai-switch v-model="testSwitch"></hai-switch>
    </template>
  </demo-item>
</template>

<script>
import DemoItem from './DemoItem';
export default {
  name: 'DemoSwitch',
  components: {
    DemoItem
  },
  data() {
    return {
      title: 'Switch 开关',
      testSwitch: true,
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
