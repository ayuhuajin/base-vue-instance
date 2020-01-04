<template>
  <div class="fpage-change">
    <el-pagination layout="prev, pager, next" :total="30"> </el-pagination>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'UserPageChange',
  data() {
    return {
      msg: '翻页'
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.fpage-change {
  text-align: right;
}
</style>
