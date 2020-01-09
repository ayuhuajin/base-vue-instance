<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      Radio 单选
    </template>
    <template v-slot:example>
      <ul class="example">
        <li>
          <p>性别：{{ sex }}</p>
          <hai-radio v-model="sex" :label="'5'" :name="'sex'" :disabled="true">sex</hai-radio>
          <hai-radio v-model="sex" :label="'男'" :name="'sex'">男</hai-radio>
          <hai-radio v-model="sex" :label="'女'" :name="'sex'">女</hai-radio>
        </li>
      </ul>
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
      sex: '男',
      diasbled: true,
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
          name: 'v-model',
          desc: '单选按钮最终选择的值',
          type: 'String, Number, Boolean',
          options: '---',
          default: '---',
          isMust: true
        },
        {
          name: 'label',
          desc: '单选按钮候选值',
          type: 'String, Number, Boolean',
          options: '---',
          default: '---',
          isMust: true
        },
        {
          name: 'name',
          desc: '原生name属性，相同name属性的单选按钮视为一组',
          type: 'String',
          options: '---',
          default: 'name',
          isMust: false
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'Boolean',
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
.radio-item {
  margin-right: 10px;
}
</style>
