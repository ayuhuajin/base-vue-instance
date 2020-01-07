<template>
  <div class="demo-doc">
    <h2>组件说明文档</h2>
    <demo-button></demo-button>
    <demo-input></demo-input>
    <!-- <demo-select></demo-select> -->
    <demo-loading></demo-loading>
  </div>
</template>

<script>
import DemoButton from './DemoButton';
import DemoInput from './DemoInput';
import DemoSelect from './DemoSelect';
import DemoLoading from './DemoLoading';
export default {
  name: 'BaseDemo',
  components: {
    DemoButton,
    DemoInput,
    DemoSelect,
    DemoLoading
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
