<template>
  <demo-item :title="title" :params="params">
    <template v-slot:desc>
      Alert
    </template>
    <template v-slot:example>
      <hai-button type="normal" @onClick="onClick(2)">正常提示</hai-button>
      <hai-button type="success" @onClick="onClick(1)">成功提示</hai-button>
      <hai-button type="warning" @onClick="onClick(3)">警告提示</hai-button>
      <hai-button type="danger" @onClick="onClick(4)">错误提示</hai-button>
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
        },
        {
          name: 'type',
          desc: 'Alert 类型',
          type: 'String',
          options: 'success/warning/info/error',
          default: 'normal',
          isMust: false
        },
        {
          name: 'content',
          desc: 'Alert 标题',
          type: 'String',
          options: '---',
          default: '---',
          isMust: true
        },
        {
          name: 'duration',
          desc: '显示时间',
          type: 'String',
          options: '---',
          default: '1500',
          isMust: false
        }
      ]
    };
  },
  methods: {
    onClick(index) {
      switch (index) {
        case 1:
          this.alert('success', 3000, '这是成功提示');
          break;
        case 2:
          this.alert('normal', 3000, '这是正常提示');
          break;
        case 3:
          this.alert('warning', 3000, '这是警告提示');
          break;
        case 4:
          this.alert('error', 3000, '这是错误提示');
          break;
      }
    },
    alert(type, duration, msg) {
      this.$Alert.info({
        type: type,
        duration: duration,
        content: msg
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.button-item {
  margin-right: 10px;
}
</style>
