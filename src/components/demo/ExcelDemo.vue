<template>
  <div class="excel-demo">

    <!-- <el-button @click="excelImport">导入</el-button> -->
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
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
    //上传文件时处理方法
      handleChange(file, fileList){
          this.fileTemp = file.raw;
          if(this.fileTemp){
              if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                  || (this.fileTemp.type == 'application/vnd.ms-excel')){
                  // this.importfxx(this.fileTemp);
                  this.excelImport();
              } else {
                  this.$message({
                      type:'warning',
                      message:'附件格式错误，请删除后重新上传！'
                  })
              }
          } else {
              this.$message({
                  type:'warning',
                  message:'请上传附件！'
              })
          }
      },
      //超出最大上传文件数量时的处理方法
      handleExceed(){
          this.$message({
              type:'warning',
              message:'超出最大上传文件数量的限制！'
          })
          return;
      },
      //移除文件的操作方法
      handleRemove(file,fileList){
          this.fileTemp = null
      },
      //  importfxx(obj) {
      //       let _this = this;
      //       let inputDOM = this.$refs.inputer;
      //       // 通过DOM取文件数据

      //       this.file = event.currentTarget.files[0];

      //       var rABS = false; //是否将文件读取为二进制字符串
      //       var f = this.file;

      //       var reader = new FileReader();
      //       //if (!FileReader.prototype.readAsBinaryString) {
      //       FileReader.prototype.readAsBinaryString = function(f) {
      //           var binary = "";
      //           var rABS = false; //是否将文件读取为二进制字符串
      //           var pt = this;
      //           var wb; //读取完成的数据
      //           var outdata;
      //           var reader = new FileReader();
      //           reader.onload = function(e) {
      //               var bytes = new Uint8Array(reader.result);
      //               var length = bytes.byteLength;
      //               for (var i = 0; i < length; i++) {
      //                   binary += String.fromCharCode(bytes[i]);
      //               }
      //               //此处引入，用于解析excel
      //               var XLSX = require("xlsx");
      //               if (rABS) {
      //                   wb = XLSX.read(btoa(fixdata(binary)), {
      //                   //手动转化
      //                   type: "base64"
      //                   });
      //               } else {
      //                   wb = XLSX.read(binary, {
      //                   type: "binary"
      //                   });
      //               }
      //               outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      //               //outdata就是读取的数据（不包含标题行即表头，表头会作为对象的下标）
      //               //此处可对数据进行处理
      //               // let arr = [];
      //               // outdata.map(v => {
      //               //     let obj = {}
      //               //     obj.code = v['Code']
      //               //     obj.name = v['Name']
      //               //     obj.pro = v['province']
      //               //     obj.cit = v['city']
      //               //     obj.dis = v['district']
      //               //     arr.push(obj)
      //               // });
      //               // _this.da=arr;
      //               // _this.dalen=arr.length;
      //               return arr;
      //           };
      //           reader.readAsArrayBuffer(f);
      //       };
      //       if (rABS) {
      //           reader.readAsArrayBuffer(f);
      //       } else {
      //           reader.readAsBinaryString(f);
      //       }
      //   },

    // 导入
     excelImport() {
      console.log('导入');
      let fileReader = new FileReader();
      var file = event.currentTarget.files[0];
      // 回调函数
      fileReader.onload = ev => {
        try {
          let data = ev.target.result;
          let workbook = XLSX.read(data, {
            type: 'binary'
          });
          // excel读取出的数据
          let excelData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          // 将上面数据转换成 table需要的数据
          console.log(excelData);

          let arr = [];
          excelData.forEach(item => {
            let obj = {};
            obj.questionTitle = item['题目'];
            obj.subject = item['科目'];
            obj.questionType = item['题型'];
            obj.testPaper = item['所属试卷'];
            obj.level = item['难度'];
            obj.answer = item['答案'];
            obj.questionDesc = item['答案解析'];
            obj.time = item['发布日期'];
            arr.push(obj);
          });
          this.tableData = [...arr];
          console.log(this.tableData);
        } catch (e) {
          window.alert('文件类型不正确！');
          return false;
        }
      };
      // 读取文件 成功后执行上面的回调函数
      fileReader.readAsBinaryString(file);
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
