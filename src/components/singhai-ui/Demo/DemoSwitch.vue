<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      开关
    </template>
    <template v-slot:example>
      <ul class="example">
        <li>
          <p>开关状态：{{ switch1 }}</p>
          <hai-switch v-model="switch1"></hai-switch>
        </li>
        <li>
          <p>开关状态：{{ switch2 }}</p>
          <hai-switch v-model="switch2"></hai-switch>
        </li>
        <li>
          <p>开关状态：禁用</p>
          <hai-switch v-model="switch3" :disabled="disabled"></hai-switch>
        </li>
      </ul>
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
      switch1: false,
      switch2: true,
      switch3: true,
      disabled: true,
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
          desc: 'switch 按钮值',
          type: 'Boolean',
          options: '---',
          default: 'false',
          isMust: true
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
.switch-item {
  margin-right: 10px;
}
.example {
  display: flex;
  align-items: center;
  li {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      margin-left: 5px;
      margin-bottom: 4px;
    }
  }
}
</style>
