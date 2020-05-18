<template>
  <div class="excel-demo">

    <el-button @click="excelImport">导入</el-button>
    <el-button @click="excelExport">导出</el-button>
    <!-- 表格 -->
    <base-table :tableData="tableData">
      <el-table-column prop="index" label="序号" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="avatar" label="头像" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="name" label="学生姓名"></el-table-column>
      <el-table-column prop="grade" label="年级"></el-table-column>
      <el-table-column prop="userId" label="学号"></el-table-column>
    </base-table>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';
export default Vue.extend({
  components: {
    BaseTable,
  },
  data() {
    return {
      data: '导入导出',
      //导出excel 表头
      tableTitleData:[
        {
          label: '序号',
          prop: 'index'
        },
        {
          label: '头像',
          prop: 'avatar'
        },
        {
          label: '学生姓名',
          prop: 'name'
        },
        {
          label: '年级',
          prop: 'grade'
        },
        {
          label: '学号',
          prop: 'userId'
        }
      ],
      // 表格数据
      tableData:[
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.tableData = [
        {
          index:1,
          avatar:'',
          name:"张三",
          grade:'1年级',
          userId:"xm2019222"
        },
        {
          index:1,
          avatar:'',
          name:"李四",
          grade:'1年级',
          userId:"xm2019222"
        }
      ]
    },
    // 导入
     excelImport() {
      console.log('导入');
    },
    // 导出
    excelExport() {
      // 导出表格的表头设置
      let allColumns = this.tableTitleData;
      var columnNames = [];
      var columnValues = [];
      for (var i = 0; i < allColumns.length; i++) {
        columnNames[i] = allColumns[i].label;
        columnValues[i] = allColumns[i].prop;
      }
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../assets/js/excel/Export2Excel');
        const tHeader = columnNames;
        const filterVal = columnValues;
        console.log(this.tableData,89898)
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        console.log(data,999);
        export_json_to_excel(tHeader, data, '学生管理');
      });
    },
    // 格式化数据
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
  }
});
</script>
<style lang="scss" scoped></style>
