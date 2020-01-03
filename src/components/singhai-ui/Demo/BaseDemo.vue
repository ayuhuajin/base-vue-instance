<template>
  <div class="demo-doc">
    <h2>组件说明文档</h2>
    <demo-button></demo-button>
    <demo-input></demo-input>
  </div>
</template>

<script>
import DemoButton from './DemoButton';
import DemoInput from './DemoInput';
export default {
  name: 'BaseDemo',
  components: {
    DemoButton,
    DemoInput
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.demo-doc {
  h2 {
    font-size: 24px;
    color: $mainColor;
  }
  padding: 20px;
}
</style>
