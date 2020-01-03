<template>
  <demo-item>
    <template v-slot:desc>
      按钮有四种颜色，两种状态 <br />
      按钮有四种颜色，两种状态
    </template>
    <hai-input></hai-input>
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
    return {};
  },
  methods: {}
};
</script>
