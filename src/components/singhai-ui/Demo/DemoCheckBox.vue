<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      多选按钮
    </template>
    <template v-slot:example>
      <ul class="example">
        <li>
          <p>多选：{{ subjects }}</p>
          <hai-check-box v-model="subjects" :label="'Vue'" :name="'subject'">Vue</hai-check-box>
          <hai-check-box v-model="subjects" :label="'React'" :name="'subject'">React</hai-check-box>
          <hai-check-box v-model="subjects" :label="'Angular'" :name="'subject'" :disabled="true"
            >Angular</hai-check-box
          >
          <hai-check-box v-model="subjects" :label="'java'" :name="'subject'">java</hai-check-box>
        </li>
        <li>
          <p>多选：{{ sports }}</p>
          <hai-check-box v-model="sports" :label="'篮球'" :name="'sport'">篮球</hai-check-box>
          <hai-check-box v-model="sports" :label="'网球'" :name="'sport'">网球</hai-check-box>
          <hai-check-box v-model="sports" :label="'足球'" :name="'sport'" :disabled="true">足球</hai-check-box>
          <hai-check-box v-model="sports" :label="'乒乓球'" :name="'sport'">乒乓球</hai-check-box>
        </li>
      </ul>
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
      subjects: [],
      sports: ['篮球'],
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
          name: 'v-model',
          desc: '复选框选中的值，必须是数组类型',
          type: 'Array',
          options: '[]',
          default: '---',
          isMust: false
        },
        {
          name: 'label',
          desc: '多选按钮候选值',
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
.ckeckBox-item {
  margin-right: 10px;
}
</style>
