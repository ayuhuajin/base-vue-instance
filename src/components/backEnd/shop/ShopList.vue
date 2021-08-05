<template>
  <div class="shop-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>查找</span>
        <el-input v-model="keyword" placeholder="请输入查找内容"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="handleAdd" type="warning">增加</el-button>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="shopData">
      <el-table-column prop="shopName" label="商品名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="img" label="商品" show-overflow-tooltip>
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="time" :formatter="formateTime" label="发布日期"> </el-table-column>
      <el-table-column prop="payCount" label="付款人数"></el-table-column>
      <el-table-column prop="payMoney" label="金额"></el-table-column>
      <el-table-column prop="shopSecret" label="权限密钥"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
          <span class="content-detail" @click="examDetail(scope.row._id)">详情</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <div class="bank">
        <span>商品名称</span>
        <el-input v-model="shopItem.shopName" placeholder="请输入商品名称"></el-input>
        <span>图片</span>
        <!-- <el-form-item label="图片上传"> -->
        <base-upload :uploadInfo="uploadInfo" @handleSuccess="handleSuccess"></base-upload>
        <!-- </el-form-item> -->
        <span>密钥</span>
        <el-input v-model="shopItem.shopSecret" placeholder="请输入商品密钥"></el-input>
        <span>内容</span>
        <el-input v-model="shopItem.content" placeholder="请输入商品内容"></el-input>
        <span>金额</span>
        <el-input v-model="shopItem.payMoney" placeholder="请输入商品金额"></el-input>
      </div>
      <div>
        <span class="save" @click="handleSave()">保存</span>
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
import PageChange from '@/components/common/PageChange.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import shop from '@/store/modules/shop';

import mixin from '@/assets/js/mixin.ts';
export default Vue.extend({
  name: 'ShopList',
  mixins: [mixin],
  components: {
    MainHeader,
    BaseTable,
    PageChange,
    BaseDialog,
    BaseUpload
  },
  data() {
    return {
      title: '商品列表',
      keyword: '',
      shopName: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      uploadInfo: {
        uploadURl: 'http://10.123.61.205:12306/upload/2',
        hide: false,
        uploadClass: 'uploadClass',
        desc: '',
        fileList: []
      },
      shopData: [
        // {
        //   shopName: '无用商品',
        //   time: '2021-04-08',
        //   payCount: '3',
        //   payMoney: 6,
        //   secretStr: '33566'
        // }
      ],
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加商品',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      shopItem: {
        shopName: ''
      }
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    formateTime(obj) {
      if (obj.time) {
        return timeFormate.timeformatDay(obj.time);
      }
    },
    async initData() {
      let result = await shop.dispatch('getAllShop', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber
        // title: this.name
      });
      this.shopData = result.data;
      console.log(result, 999);
    },
    // 查询
    search() {
      console.log('查询');
    },
    handleSave() {
      console.log(this.shopItem, 88899999);
      if (!this.shopItem._id) {
        shop.dispatch('addShop', this.shopItem).then(result => {
          this.initData();
          this.$message.success('添加商品成功');
          this.showDialog = false;
        });
      } else {
        this.shopItem.id = this.shopItem._id;
        shop.dispatch('updateShop', this.shopItem).then(result => {
          this.initData();
          this.$message.success('编辑商品成功');
          this.showDialog = false;
        });
      }
    },
    // 关闭弹窗
    closeDialog() {
      this.showDialog = false;
    },
    // 新增商品
    handleAdd() {
      this.showDialog = true;
      // this.$router.push({
      //   name: 'AddShop'
      // });
    },
    // 图片上传成功
    handleSuccess(url) {
      this.shopItem.img = url;
    },
    // 编辑商品
    handleEdit(id) {
      console.log('编辑');
      this.uploadInfo.fileList[0] = {};
      shop.dispatch('ShopView', id).then(result => {
        this.shopItem = result[0];
        console.log(result[0], 99999);
        this.uploadInfo.fileList[0].url = result[0].img;
        this.showDialog = true;
      });
    },
    // 删除商品
    handleDelete(id) {
      shop.dispatch('delShop', { id: id }).then(() => {
        this.$message.success('删除成功');
        this.initData();
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.shop-list {
}
</style>
