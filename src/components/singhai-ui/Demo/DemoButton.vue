<template>
  <demo-item>
    <template v-slot:desc>
      按钮有四种颜色，两种状态 <br />
      按钮有四种颜色，两种状态
    </template>
    <template v-slot:example>
      <hai-button cname="pinkBtn" type="normal">按钮</hai-button>
      <hai-button :inputItem="inputItem" type="success">成功按钮</hai-button>
      <hai-button :inputItem="inputItem" type="warning">警告按钮</hai-button>
      <hai-button :inputItem="inputItem" type="danger">危险按钮</hai-button>
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
      inputItem: {
        color: '#67C23A'
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.button-item {
  margin-right: 15px;
}
</style>
