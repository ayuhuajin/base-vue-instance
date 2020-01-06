<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      输入框
    </template>
    <template v-slot:example>
      <hai-input :cname="cname" :maxlength="maxlength" :placeholder="placeholder"></hai-input>
      <hai-input :type="type" :placeholder="placeholder"></hai-input>
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
      type: 'password',
      placeholder: '请输入',
      maxlength: 10,
      disabled: true,
      readonly: true,
      cname: 'demo-input',
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
          desc: '输入框type',
          type: 'String',
          options: 'password/button/submit',
          default: 'text',
          isMust: false
        },
        {
          name: 'placeholder',
          desc: '名称',
          type: 'String',
          options: '---',
          default: '---',
          isMust: false
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'Bollean',
          options: '---',
          default: 'false',
          isMust: false
        },
        {
          name: 'readonly',
          desc: '是否只读',
          type: 'Bollean',
          options: '---',
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
.button-input {
  margin-right: 15px;
}
</style>
