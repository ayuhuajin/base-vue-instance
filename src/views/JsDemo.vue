<template>
  <div class="js-demo">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label" :name="item.name">
        <component v-if="item.name == activeName" :is="'demo' + item.index"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import demo1 from '@/components/jsdemo/demo1.vue';
import demo2 from '@/components/jsdemo/demo2.vue';
import demo3 from '@/components/jsdemo/demo3.vue';
import demo4 from '@/components/jsdemo/demo4.vue';
import demo5 from '@/components/jsdemo/demo5.vue';
import demo6 from '@/components/jsdemo/demo6.vue';

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
      activeName: 'demo6',
      tabList: [
        {
          label: '发布订阅者',
          name: 'demo1',
          index: 1
        },
        {
          label: 'promise',
          name: 'demo2',
          index: 2
        },
        {
          label: 'async await',
          name: 'demo3',
          index: 3
        },
        {
          label: 'module',
          name: 'demo4',
          index: 4
        },
        {
          label: 'Class',
          name: 'demo5',
          index: 5
        },
        {
          label: '解构赋值',
          name: 'demo6',
          index: 6
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
});
</script>
