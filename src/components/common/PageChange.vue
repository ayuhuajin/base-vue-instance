<template>
  <div class="page-change">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="pageChange"
      :current-page="pageInfo.pageNumber"
      :page-size="10"
      background
      layout="prev, pager, next"
      :total="200"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PageChange',
  props: {
    pageInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleSizeChange(val: number) {
      // console.log(`每页 ${val} 条`);
      this.pageInfo.pageSize = val;
      this.pageInfo.pageFunc(this.pageInfo.pageNumber, this.pageInfo.pageSize);
    },
    pageChange(newIndex: number) {
      console.log(newIndex);
      // 控制页码
      this.pageInfo.pageNumber = newIndex;
      this.pageInfo.pageFunc(this.pageInfo.pageNumber);
    }
  }
});
</script>
<style lang="scss">
.el-pagination {
  padding: 10px;
  background: white;
}
</style>
