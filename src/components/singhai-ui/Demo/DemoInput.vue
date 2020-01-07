<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      输入框
    </template>
    <template v-slot:example>
      <ul class="example">
        <li>
          <p>普通文本框：{{ inputValue }}</p>
          <hai-input v-model="inputValue" :cname="cname" :maxlength="maxlength" :placeholder="placeholder"></hai-input>
        </li>
        <li>
          <p>密码框：{{ inputValue2 }}</p>
          <hai-input v-model="inputValue2" :type="type" :placeholder="placeholder"></hai-input>
        </li>
        <li>
          <p>禁用：</p>
          <hai-input v-model="inputValue3" :placeholder="placeholder" :disabled="true"></hai-input>
        </li>
      </ul>
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
      inputValue: '嗨前端',
      inputValue2: '看不见我',
      inputValue3: '禁用状态',
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
        },
        {
          name: 'on-change',
          desc: '当输入框的值发生改变，并且失去焦点的时候触发的回调函数，参数(event)',
          type: '---',
          options: '---',
          default: '---',
          isMust: '---'
        },
        {
          name: 'on-focus',
          desc: '在 Input 获得焦点时触发回调',
          type: '---',
          options: '(event: Event)',
          default: '---',
          isMust: '---'
        },
        {
          name: 'on-blur',
          desc: '在 Input 失去焦点时触发回调',
          type: '---',
          options: '(event: Event)',
          default: '---',
          isMust: '---'
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.button-input {
  display: inline-block;
  margin-right: 15px;
}
.example {
  display: flex;
  align-items: center;
  li {
    p {
      color: #999;
      font-size: 12px;
      margin-left: 5px;
      margin-bottom: 4px;
    }
  }
}
</style>
