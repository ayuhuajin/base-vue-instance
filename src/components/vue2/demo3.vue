<template>
  <div class="demo3">
    <!-- 1.插槽内容 -->
    <slot-demo>
      <div>的地方大师傅但是</div>
    </slot-demo>
    <!-- 2.插槽内容 不设置会使用默认的内容 -->
    <slot-demo> </slot-demo>
    <!-- 3.使用具名插槽 -->
    <slot-demo>
      <template v-slot="header">
        234234
      </template>
    </slot-demo>
    <!-- 4.作用域插槽，简单的来说就是子组件提供给父组件的参数，该参数仅限于插槽中使用 -->
    <slot-demo>
      <template v-slot:content="list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{ list }}
            884
          </li>
        </ul>
      </template>
    </slot-demo>
    <slot-demo>
      <template v-slot:test="childValue">
        {{ childValue }}678
      </template>
    </slot-demo>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import slotDemo from '@/components/vue2/components/slot.vue';
export default Vue.extend({
  name: 'Demo3',
  components: {
    slotDemo
  },
  data() {
    return {
      // list: [{}]
    };
  },
  methods: {
    handleClick(tab: any, event: any) {}
  }
});
</script>
