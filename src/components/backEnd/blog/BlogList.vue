<template>
  <div class="blog-list">
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
      <el-table-column prop="title" label="标题" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="time" label="日期"> </el-table-column>
      <el-table-column prop="categoryId" label="分类"></el-table-column>
      <el-table-column label="操作" align="center" width="170">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
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
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import index from '@/store/modules/index.ts';
import blog from '@/store/modules/blog';
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
      category: '',
      categoryId: '',
      categoryList: [] as any,
      name: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: (this as any).initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      // 表格列表
      blogData: [] as any,
      value: ''
    };
  },
  async mounted() {
    await this.getCategoryList();
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

      this.blogData = this.getNameById(result.data);
      this.pageInfo.totalPages = result.total;
    },
    // 获取分类下拉列表
    async getCategoryList() {
      let result = await index.dispatch('getAllCategory', {
        pageNumber: 1,
        pageSize: 999,
        name: ''
      });
      this.categoryList = result.data;
      this.categoryList.unshift({
        name: '全部',
        _id: ''
      });
    },
    getNameById(arr: any) {
      return arr.map((item: any) => {
        item.time = timeFormate.timeformat(item.time);
        item.categoryId = this.findName(item.categoryId);
        return item;
      });
    },
    // 寻找分类名称
    findName(id: any) {
      let obj: any = this.categoryList.find((item: any) => {
        return item._id == id;
      });
      if (obj) {
        return obj.name;
      }
    },
    handleEdit(id: any) {
      this.$router.push({
        name: 'AddBlog',
        query: {
          id: id
        }
      });
    },
    handleDelete(id: string) {
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
    // 添加数据
    handleAdd() {
      this.$router.push({
        name: 'AddBlog'
      });
    },
    search() {
      console.log(444);
      this.pageInfo.pageNumber = 1;
      this.initData();
    },
    changeCategory(e: string) {
      this.pageInfo.pageNumber = 1;
      this.initData();
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
