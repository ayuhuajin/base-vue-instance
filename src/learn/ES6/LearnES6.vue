<template>
  <div class="learn-es6">
    <main-header></main-header>
    <base-table></base-table>
    <page-change></page-change>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
export default Vue.extend({
  name: 'LearnES6',
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '学习ES6'
    };
  },
  mounted() {},
  methods: {}
});
</script>
<style lang="scss" scoped>
.learn-es6 {
  > div {
    padding: 20px;
  }
  > div:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
