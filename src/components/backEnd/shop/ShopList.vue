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
      <el-table-column prop="time" :formatter="formateTime" label="发布日期"> </el-table-column>
      <el-table-column prop="payCount" label="付款人数"></el-table-column>
      <el-table-column prop="payMoney" label="金额"></el-table-column>
      <el-table-column prop="secretStr" label="权限密钥"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
          <span class="content-detail" @click="examDetail(scope.row._id)">详情</span>
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
import PageChange from '@/components/common/PageChange.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import shop from '@/store/modules/shop';

import mixin from '@/assets/js/mixin.ts';
export default Vue.extend({
  name: 'ShopList',
  mixins: [mixin],
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '商品列表',
      keyword: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      shopData: [
        {
          shopName: '无用商品',
          time: '2021-04-08',
          payCount: '3',
          payMoney: 6,
          secretStr: '33566'
        }
      ]
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
        pageNumber: this.pageInfo.pageNumber,
        title: this.name
      });
      console.log(result, 999);
    },
    // 查询
    search() {
      console.log('查询');
    },
    // 新增商品
    handleAdd() {
      console.log('新增');
    },
    // 编辑商品
    handleEdit() {
      console.log('编辑');
    },
    // 删除商品
    handleDelete() {
      console.log('删除商品');
    }
  }
});
</script>
<style lang="scss" scoped>
.shop-list {
}
</style>
