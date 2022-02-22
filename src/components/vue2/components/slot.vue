<template>
  <div class="slot">
    <slot>
      默认的slot内容
    </slot>
    <slot name="header"></slot>
    <slot name="content" :data="data"></slot>
    <!-- 作用域插槽，简单的来说就是子组件提供给父组件的参数，该参数仅限于插槽中使用 -->
    <slot name="test" :childValue="childValue"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SlotDemo',
  components: {},
  data() {
    return {
      childValue: '120',
      data: [{ name: '李白', age: 20 }, { name: '杜甫', age: 25 }]
    };
  },
  methods: {
    handleClick(tab: any, event: any) {}
  }
});
</script>
