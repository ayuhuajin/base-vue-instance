<template>
  <div class="bank-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>学科</span>
        <el-select v-model="subject" placeholder="请选择">
          <el-option v-for="(item, index) in subjectList" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </div>
      <div>
        <span>查找</span>
        <el-input v-model="name" placeholder="请输入查找内容"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="handleAdd" type="warning">增加</el-button>
        <label class="up-load" @click="importExcel" for="import" type="primary">导入</label>
        <input
          class="up-input"
          type="file"
          id="import"
          @change="handleImport"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
    application/vnd.ms-excel"
        />
        <el-button @click="exportExcel" type="success">导出</el-button>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="questionData">
      <!-- <el-table-column prop="index" label="序号" show-overflow-tooltip> </el-table-column> -->
      <el-table-column prop="questionTitle" label="题目" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="subject" label="科目"></el-table-column>
      <el-table-column prop="questionType" label="题型"></el-table-column>
      <el-table-column prop="testPaper" label="所属试卷"></el-table-column>
      <el-table-column prop="level" label="难度"></el-table-column>
      <el-table-column prop="answer" label="答案"></el-table-column>
      <el-table-column prop="questionDesc" label="答案解析"></el-table-column>
      <el-table-column prop="time" label="发布日期"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
        </template>
      </el-table-column>
    </base-table>

    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <set-question :questionInfo="questionInfo" @handleSave="handleSave" @handleCancel="handleCancel"></set-question>
    </base-dialog>
    <!-- 分页 -->
    <page-change :pageInfo="pageInfo"></page-change>
  </div>
</template>

<script>
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
import setQuestion from '@/components/common/SetQuestion';
import BaseDialog from '@/components/common/BaseDialog.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import question from '@/store/modules/question';
import exam from '@/store/modules/exam';
import mixin from '@/assets/js/mixin.ts';
import XLSX from 'xlsx';
export default Vue.extend({
  name: 'QuestionList',
  mixins: [mixin],
  components: {
    MainHeader,
    BaseTable,
    PageChange,
    BaseDialog,
    setQuestion
  },
  data() {
    return {
      id: '',
      title: '试题管理',
      examTitle: '',
      subject: '',
      level: '',
      name: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      // 设置试题设置
      questionInfo: {
        questionNum: '',
        questionType: '',
        questionTitle: '',
        level: '',
        subject: '',
        type: '',
        testPaper: '',
        questionDesc: '',
        options: [
          { name: 'A', value: '', isCheck: false },
          { name: 'B', value: '', isCheck: false },
          { name: 'C', value: '', isCheck: false }
        ],
        reply: ''
      },
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加试题',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      // 表格列表
      questionData: [],
      examList: [],
      tableTitleData: [
        {
          label: '题号',
          prop: 'questionNum'
        },
        {
          label: '题型',
          prop: 'questionType'
        },
        {
          label: '科目',
          prop: 'subject'
        },
        {
          label: '难度',
          prop: 'level'
        },
        {
          label: '所属试卷',
          prop: 'testPaper'
        },
        {
          label: '题目',
          prop: 'questionTitle'
        },
        {
          label: '答案',
          prop: 'answer'
        },
        {
          label: 'A',
          prop: 'A'
        },
        {
          label: 'B',
          prop: 'B'
        },
        {
          label: 'C',
          prop: 'C'
        },
        {
          label: 'D',
          prop: 'D'
        },
        {
          label: '答案解析',
          prop: 'questionDesc'
        }
      ]
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    // 初始化表单
    async initData() {
      let examList = await exam.dispatch('getAllExam', {
        pageSize: 100000,
        pageNumber: 1
      });
      this.examList = examList.data;

      let result = await question.dispatch('getAllQuestion', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber
      });
      this.questionData = this.getNameById(result.data);
      this.pageInfo.totalPages = result.total;
    },
    getNameById(arr) {
      return arr.map(item => {
        item.time = timeFormate.timeformat(item.time);
        item.subject = this.findName('_id', 'name', item.subject, this.subjectList);
        item.level = this.findName('_id', 'name', item.level, this.levelList);
        item.questionType = this.findName('value', 'label', item.questionType, this.options);
        item.testPaper = this.findName('_id', 'title', item.testPaper, this.examList);
        return item;
      });
    },
    // 寻找分类名称
    findName(key, value, id, list) {
      let obj = list.find(item => {
        return item[key] == id;
      });
      if (obj) {
        return obj[value];
      }
    },
    async handleEdit(id) {
      this.id = id;
      this.showDialog = true;
      let obj = await question.dispatch('questionView', id);
      this.questionInfo = obj[0];
    },
    handleDelete(id) {
      question
        .dispatch('delQuestion', {
          id: id
        })
        .then(() => {
          this.initData();
        })
        .catch(err => {
          console.log('删除失败');
        });
    },
    handleSave(obj) {
      if (!this.id) {
        question
          .dispatch('addQuestion', [obj])
          .then(() => {
            this.initData();
            this.closeDialog();
          })
          .catch(err => {
            console.log('失败');
          });
      } else {
        question.dispatch('updateQuestion', obj).then(() => {
          this.initData();
          this.showDialog = false;
        });
      }
    },
    handleCancel() {
      this.showDialog = false;
    },
    // 关闭弹窗
    closeDialog() {
      this.showDialog = false;
    },
    // 添加数据
    handleAdd() {
      this.showDialog = true;
    },
    search() {
      this.pageInfo.pageNumber = 1;
      this.initData();
    },
    changeCategory(e) {
      this.pageInfo.pageNumber = 1;
      this.initData();
    },
    // 导入excel
    importExcel() {
      console.log('导入');
    },
    // 导出excel
    exportExcel() {
      console.log('导出');
      // 导出表格的表头设置
      let allColumns = this.tableTitleData;
      var columnNames = [];
      var columnValues = [];
      for (var i = 0; i < allColumns.length; i++) {
        columnNames[i] = allColumns[i].label;
        columnValues[i] = allColumns[i].prop;
      }
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../../assets/js/excel/Export2Excel');
        const tHeader = columnNames;
        const filterVal = columnValues;
        const list = this.splitOption(this.questionData);
        console.log(tHeader, filterVal, list, 87);

        const data = this.formatJson(filterVal, list);
        console.log(data, 999);
        export_json_to_excel(tHeader, data, '试题excel');
      });
    },
    splitOption(list) {
      return list.map(item => {
        if (item.options) {
          item.options.forEach(m => {
            item[m.name] = m.value;
          });
          return item;
        }
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j];
        })
      );
    },
    handleImport() {
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
            obj.options = [];
            obj.questionNum = item['题号'];
            obj.questionTitle = item['题目'];
            obj.subject = item['科目'];
            obj.questionType = item['题型'];
            obj.testPaper = item['所属试卷'];
            obj.level = item['难度'];
            obj.answer = item['答案'];
            obj.questionDesc = item['答案解析'];
            obj.time = item['发布日期'];
            obj.options[0] = { name: 'A', value: item['A'], isCheck: obj.answer.includes('A') };
            obj.options[1] = { name: 'B', value: item['B'], isCheck: obj.answer.includes('B') };
            obj.options[2] = { name: 'C', value: item['C'], isCheck: obj.answer.includes('C') };
            obj.options[3] = { name: 'D', value: item['D'], isCheck: obj.answer.includes('D') };
            arr.push(obj);
          });
          this.tableData = [...arr];
          console.log(this.tableData);
          question
            .dispatch('addQuestion', this.tableData)
            .then(() => {
              this.initData();
              this.closeDialog();
            })
            .catch(err => {
              console.log('失败');
            });
        } catch (e) {
          console.log(e, 565);

          window.alert('文件类型不正确！');
          return false;
        }
      };
      // 读取文件 成功后执行上面的回调函数
      fileReader.readAsBinaryString(file);
    }
  }
});
</script>
<style lang="scss" scoped>
.bank-list {
  > div:not(:first-child) {
    margin-top: 15px;
  }
  .up-load {
    width: 120px;
    margin-right: 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #24e4c1;
  }
  .up-input {
    width: 0;
  }
  .content-detail {
    margin-left: 20px;
    font-size: 14px;
    color: #ff812d;
    cursor: pointer;
  }
  .content-import {
    margin-left: 20px;
    font-size: 14px;
    color: #24e4c1;
    cursor: pointer;
  }
}
.save,
.cancel {
  margin-top: 20px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #409eff;
  text-align: center;
  line-height: 40px;
  color: white;
  cursor: pointer;
  background: #66b1ff;
}
.cancel {
  margin-left: 20px;
  border: 1px solid #dcdfe6;
  color: #333;
  background: white;
}
.bank {
  > span {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
  .el-input {
    margin-top: 10px;
  }
}
</style>
