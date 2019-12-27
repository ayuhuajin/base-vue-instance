<template>
  <div class="user-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>查找</span>
        <el-input v-model="searchName" placeholder="请输入查找内容"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="handleAdd" type="warning">增加</el-button>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="userList">
      <el-table-column type="index" width="100" label="序号" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="account" label="用户" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" align="center" width="170">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleView(scope.row._id, scope.row)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id, scope.row)">删除</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 分页 -->
    <page-change :pageInfo="pageInfo"></page-change>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <div class="user">
        <span>用户名称</span>
        <el-input v-model="userName" placeholder="请输入用户名称"></el-input>
        <span>用户密码</span>
        <el-input v-model="password" placeholder="请输入用户密码"></el-input>
      </div>
      <div>
        <span class="save" @click="handleSave">保存</span>
        <span class="cancel" @click="closeDialog">取消</span>
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
import user from '@/store/modules/user.ts';
export default Vue.extend({
  name: 'UserList',
  components: {
    MainHeader,
    BaseTable,
    BaseDialog,
    PageChange
  },
  data() {
    return {
      title: '用户',
      userList: [],
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加用户',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 1, // 总页数
        pageFunc: (this as any).init, // 当前页数需要调用的函数
        pageSize: 10, // 一页几条数据
        class: 'pageClass'
      },
      // 表格列表
      tableData: [],
      id: '',
      date: '' as any,
      userName: '',
      password: '',
      searchName: ''
    };
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        let result = await user.dispatch('getAllUser');
        this.userList = result;
      } catch (err) {
        console.log(err);
      }
    },
    // 文章分类模糊搜索
    search() {
      this.pageInfo.pageNumber = 1;
      this.init();
    },
    // 获取视图
    async handleView(id: any, num: number) {
      this.id = id;
      this.showDialog = true;
      try {
        let obj = await user.dispatch('userView', { id: id });
        if (obj) {
          this.userName = obj[0].account;
          this.password = obj[0].password;
        }
      } catch (err) {
        console.log('报错');
      }
    },
    // 编辑
    async handleEdit(id: any, name: any) {
      let obj = await user
        .dispatch('updateUser', {
          id: id,
          account: this.userName,
          password: this.password
        })
        .then(() => {
          this.closeDialog();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除
    async handleDelete(id: any, num: number) {
      console.log(num);
      user
        .dispatch('delUser', { id: id })
        .then(() => {
          // this.categoryList.splice(num, 1);
          this.init();
        })
        .catch(err => {
          console.log('删除失败');
        });
    },
    // 添加数据
    handleAdd() {
      this.showDialog = true;
      this.id = '';
      this.userName = '';
      this.password = '';
    },
    // 点击保存
    async handleSave() {
      if (!this.id) {
        user
          .dispatch('addUser', { account: this.userName, password: this.password })
          .then(() => {
            this.init();
            this.closeDialog();
          })
          .catch(err => {
            console.log('失败');
          });
      } else {
        this.handleEdit(this.id, this.userName)
          .then(() => {
            this.init();
          })
          .catch((err: any) => {
            console.log('编辑失败');
          });
      }
    },
    // 关闭弹窗
    closeDialog() {
      this.showDialog = false;
    }
  }
});
</script>
<style lang="scss">
.user-dialog {
  .el-input__inner {
    line-height: 44px;
  }
}
</style>

<style lang="scss" scoped>
.user-list {
  > div:not(:first-child) {
    margin-top: 15px;
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
.user {
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
