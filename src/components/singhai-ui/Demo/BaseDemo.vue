<template>
  <div class="demo-doc">
    <h2>组件说明文档</h2>
    <demo-button></demo-button>
    <demo-input></demo-input>
    <demo-loading></demo-loading>
    <demo-switch></demo-switch>
    <demo-alert></demo-alert>
    <demo-radio></demo-radio>
    <demo-check-box></demo-check-box>
    <demo-select></demo-select>
    <demo-tree></demo-tree>
  </div>
</template>

<script>
import DemoButton from './DemoButton';
import DemoInput from './DemoInput';
import DemoSelect from './DemoSelect';
import DemoLoading from './DemoLoading';
import DemoSwitch from './DemoSwitch';
import DemoAlert from './DemoAlert';
import DemoTree from './DemoTree';
import DemoRadio from './DemoRadio';
import DemoCheckBox from './DemoCheckBox';
export default {
  name: 'BaseDemo',
  components: {
    DemoButton,
    DemoInput,
    DemoSelect,
    DemoLoading,
    DemoAlert,
    DemoSwitch,
    DemoTree,
    DemoRadio,
    DemoCheckBox
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
