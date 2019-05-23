<template>
  <div class="category-list">
    <!-- 头部 -->
    <main-header :titleName="title">
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
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <div class="category">
        <span>分类名称</span>
        <el-input v-model="input" placeholder="请输入分类名称"></el-input>
      </div>
      <div>
        <span class="save" @click="handleSave">保存</span>
        <span class="cancel" @click="handleCancel">取消</span>
      </div>
    </base-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
import PageChange from '@/components/common/PageChange.vue';
export default Vue.extend({
  name: 'CategoryList',
  components: {
    MainHeader,
    BaseTable,
    BaseDialog,
    PageChange
  },
  data() {
    return {
      title: '分类',
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加分类',
        dialogWidth: '800px',
        activeClass: 'category-dialog'
      },
      showDialog: false,
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
      this.showDialog = true;
    },
    handleSave() {
      this.showDialog = false;
      console.log('保存');
    },
    handleCancel() {
      this.showDialog = false;
      console.log('取消');
    },
    // 关闭弹窗
    closeDialog() {
      console.log(5555);
      this.showDialog = false;
    },
    // 获取分页数据
    getPageData() {
      console.log('11111,', '#44dce7');
    }
  }
});
</script>
<style lang="scss">
.category-dialog {
  .el-input__inner {
    line-height: 44px;
  }
}
</style>

<style lang="scss" scoped>
.category-list {
  > div:not(:first-child) {
    margin-top: 20px;
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
.category {
  > span {
    font-size: 16px;
    color: #333;
  }
  .el-input {
    margin-top: 10px;
  }
}
</style>
