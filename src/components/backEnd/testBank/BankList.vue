<template>
  <div class="bank-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>分类</span>
        <el-select v-model="categoryId" placeholder="请选择" @change="changeCategory($event)">
          <el-option
            v-for="(item, index) in categoryList"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
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
    <base-table :tableData="blogData">
      <el-table-column prop="title" label="试卷标题" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="time" label="发布日期"> </el-table-column>
      <el-table-column prop="categoryId" label="科目"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-detail" @click="examDetail(scope.row._id)">详情</span>
          <span class="content-import" @click="importExam(scope.row._id)">导入试卷</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 分页 -->
    <page-change :pageInfo="pageInfo"></page-change>
  </div>
</template>

<script>
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import index from '@/store/modules/index.ts';
import blog from '@/store/modules/blog';
export default Vue.extend({
  name: 'BankList',
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '试卷',
      category: '',
      categoryId: '',
      categoryList: [{ name: '前端', _id: '1' }],
      name: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      // 表格列表
      blogData: [
        {
          title: '试卷',
          category: '',
          categoryId: ''
        }
      ],
      value: ''
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    // 初始化表单
    async initData() {
      let result = await blog.dispatch('getAllBlog', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber,
        categoryId: this.categoryId,
        name: this.name
      });
      this.pageInfo.totalPages = result.total;
    },
    handleEdit(id) {
      this.$router.push({
        name: 'AddBank',
        query: {
          id: id
        }
      });
    },
    handleDelete(id) {
      blog
        .dispatch('delBlog', {
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
      console.log('试卷详情');
    },
    importExam() {
      console.log('导入试卷');
    },
    // 添加数据
    handleAdd() {
      this.$router.push({
        name: 'AddBlog'
      });
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
</style>
