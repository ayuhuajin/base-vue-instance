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
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="examData">
      <el-table-column prop="title" label="试卷标题" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="time" label="发布日期"> </el-table-column>
      <el-table-column prop="subject" label="科目"></el-table-column>
      <el-table-column prop="level" label="难度"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
          <span class="content-detail" @click="examDetail(scope.row._id)">详情</span>
          <span class="content-import" @click="importExam(scope.row._id)">导入试卷</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <div class="bank">
        <span>试卷名称</span>
        <el-input v-model="examTitle" placeholder="请输入用户名称"></el-input>
        <span>科目</span>
        <div>
          <el-select v-model="subject" placeholder="请选择">
            <el-option
              v-for="(item, index) in subjectList"
              :key="index"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </div>
        <span>难度</span>
        <div>
          <el-select v-model="level" placeholder="请选择">
            <el-option v-for="(item, index) in levelList" :key="index" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </div>
      </div>
      <div>
        <span class="save" @click="handleSave">保存</span>
        <span class="cancel" @click="closeDialog">取消</span>
      </div>
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
import BaseDialog from '@/components/common/BaseDialog.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import exam from '@/store/modules/exam';
export default Vue.extend({
  name: 'BankList',
  components: {
    MainHeader,
    BaseTable,
    PageChange,
    BaseDialog
  },
  data() {
    return {
      title: '试卷',
      examTitle: '',
      subjectList: [{ name: '前端', _id: 1 }],
      subject: '',
      levelList: [{ name: '入门', _id: 1 }, { name: '一般', _id: 2 }, { name: '困难', _id: 3 }],
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
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加试卷',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      // 表格列表
      examData: []
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    // 初始化表单
    async initData() {
      let result = await exam.dispatch('getAllExam', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber,
        title: this.name,
        subject: this.subject
      });
      this.examData = result.data;
      this.pageInfo.totalPages = result.total;
    },
    async handleEdit(id, num) {
      this.id = id;
      this.showDialog = true;

      try {
        let obj = await exam.dispatch('examView', { id: id });
        if (obj) {
          this.examTitle = obj[0].title;
          this.level = obj[0].level;
          this.subject = obj[0].subject;
        }
      } catch (err) {
        console.log('报错');
      }
    },
    handleDelete(id) {
      exam
        .dispatch('delExam', {
          id: id
        })
        .then(() => {
          this.initData();
        })
        .catch(err => {
          console.log('删除失败');
        });
    },
    // 试卷详情
    examDetail() {
      this.$router.push({
        name: 'BankDetail'
      });
    },
    importExam() {
      console.log('导入试卷');
    },
    handleSave() {
      if (!this.id) {
        exam
          .dispatch('addExam', {
            title: this.examTitle,
            subject: this.subject,
            level: this.level,
            date: timeFormate.timeformatDay(new Date())
          })
          .then(() => {
            this.initData();
            this.closeDialog();
          })
          .catch(err => {
            console.log('失败');
          });
      } else {
        exam
          .dispatch('updateBlog', {
            id: this.id,
            title: this.examTitle,
            subject: this.subject,
            level: this.level,
            date: timeFormate.timeformatDay(new Date())
          })
          .then(() => {
            this.initData();
            this.showDialog = false;
          });
      }
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
    }
  }
});
</script>
<style lang="scss" scoped>
.bank-list {
  > div:not(:first-child) {
    margin-top: 15px;
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
