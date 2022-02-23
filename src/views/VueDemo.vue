<template>
  <div class="vue-demo">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label" :name="item.name">
        <component v-if="item.name == activeName" :is="'demo' + item.index"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import demo1 from '@/components/vue2/demo1.vue';
import demo2 from '@/components/vue2/demo2.vue';
import demo3 from '@/components/vue2/demo3.vue';
import demo4 from '@/components/vue2/demo4.vue';
import demo5 from '@/components/vue2/demo5.vue';
import demo6 from '@/components/vue2/demo6.vue';

export default Vue.extend({
  components: {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo6
  },
  data() {
    return {
      activeName: 'demo4',
      tabList: [
        {
          label: 'computed',
          name: 'demo1',
          index: 1
        },
        {
          label: 'watch',
          name: 'demo2',
          index: 2
        },
        {
          label: 'slot',
          name: 'demo3',
          index: 3
        },
        {
          label: '生命周期',
          name: 'demo4',
          index: 4
        },
        {
          label: '传参',
          name: 'demo5',
          index: 5
        },
        {
          label: 'prvide',
          name: 'demo6',
          index: 6
        }
      ]
    };
  },
  methods: {
    handleClick(tab: any, event: any) {
      console.log(tab, event);
    }
  }
});
</script>
