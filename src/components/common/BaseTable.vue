<template>
  <div class="base-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="category" label="分类"> </el-table-column>
      <el-table-column prop="authority" label="权限"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" align="center" width="170">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.$index, scope.row)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.$index, scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseTable',
  data() {
    return {
      tableData: [
        {
          title: '腾讯新闻腾讯新闻腾讯新闻',
          name: '王小虎',
          date: '2016-05-02',
          category: 'js',
          authority: '只读',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          title: '腾讯新闻腾讯新闻腾讯新闻',
          name: '王小虎',
          date: '2016-05-02',
          category: 'js',
          authority: '只读',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleEdit() {
      console.log('编辑');
    },
    handleDelete() {
      console.log('删除');
    }
  }
});
</script>
<style lang="scss">
.base-table {
  th,
  tr {
    .cell {
      text-align: center;
    }
  }
}
</style>

<style lang="scss" scoped>
.base-table {
  border: 1px solid #ddd;
  background: white;
}
.content-edit {
  font-size: 14px;
  color: #3389ff;
  cursor: pointer;
}
.content-delete {
  margin-left: 20px;
  font-size: 14px;
  color: #ff3817;
  cursor: pointer;
}
</style>
