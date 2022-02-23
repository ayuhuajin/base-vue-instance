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

export default Vue.extend({
  components: {
    demo1
  },
  data() {
    return {
      activeName: 'demo1',
      tabList: [
        {
          label: '发布订阅者',
          name: 'demo1',
          index: 1
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
