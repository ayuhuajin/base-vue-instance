<template>
  <div class="blog-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>分类</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>查找</span>
        <el-input v-model="input" placeholder="请输入查找内容"></el-input>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button @click="handleAdd" type="warning">增加</el-button>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="tableData">
      <el-table-column prop="title" label="标题" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="category" label="分类"> </el-table-column>
      <el-table-column prop="authority" label="权限"> </el-table-column>
      <el-table-column label="操作" align="center" width="170">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.$index, scope.row)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.$index, scope.row)">删除</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 分页 -->
    <page-change :pageInfo="pageInfo"></page-change>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
export default Vue.extend({
  name: 'BlogList',
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '海因子',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '全部',
          label: '全部'
        }
      ],
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: (this as any).getPageData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      // 表格列表
      tableData: [
        {
          title: '腾讯新闻腾讯新闻腾讯新闻',
          name: '王小虎',
          date: '2016-05-02',
          category: 'js',
          authority: '只读'
        },
        {
          title: '腾讯新闻腾讯新闻腾讯新闻',
          name: '王小虎',
          date: '2016-05-02',
          category: 'js',
          authority: '只读'
        }
      ],
      value: '',
      input: ''
    };
  },
  mounted() {},
  methods: {
    handleEdit() {
      console.log('编辑');
    },
    handleDelete() {
      console.log('删除');
    },
    // 添加数据
    handleAdd() {
      this.$router.push({
        name: 'AddBlog'
      });
    },
    // 获取分页数据
    getPageData() {
      console.log('11111,', '#44dce7');
    }
  }
});
</script>
<style lang="scss" scoped>
.blog-list {
  > div:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
