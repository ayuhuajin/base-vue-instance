<template>
  <div class="page-change" :class="pageInfo.class">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="pageChange"
      :current-page="pageInfo.pageNumber"
      :page-size="pageInfo.pageSize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.totalPages"
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
      console.log(`每页 ${val} 条`);
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
  text-align: right;
}
</style>
