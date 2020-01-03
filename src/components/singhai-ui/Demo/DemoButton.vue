<template>
  <demo-item>
    <template v-slot:desc>
      按钮有四种颜色，两种状态 <br />
      按钮有四种颜色，两种状态
    </template>
    <template v-slot:example>
      <hai-button></hai-button>
      <hai-button></hai-button>
      <hai-button></hai-button>
      <hai-button></hai-button>
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
    return {};
  },
  methods: {}
};
</script>
