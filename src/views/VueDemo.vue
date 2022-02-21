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

export default Vue.extend({
  components: {
    demo1,
    demo2,
    demo3
  },
  data() {
    return {
      activeName: 'demo3',
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
