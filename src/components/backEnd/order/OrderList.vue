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
        <!-- <el-button @click="handleAdd" type="warning">增加</el-button> -->
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="orderList">
      <el-table-column prop="orderId" label="订单号"></el-table-column>
      <el-table-column prop="shopName" label="商品名称" show-overflow-tooltip> </el-table-column>
      <!-- <el-table-column prop="img" label="商品" show-overflow-tooltip>
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column> -->
      <el-table-column prop="payMoney" label="订单金额"></el-table-column>
      <el-table-column prop="status" label="订单状态"></el-table-column>
      <el-table-column prop="time" :formatter="formateTime" label="订单日期"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleRevoke(scope.row)">撤销订单</span>
          <span class="content-edit" @click="handleRefund(scope.row)">退款</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除订单</span>
          <span class="content-detail" @click="examDetail(scope.row._id)">订单详情</span>
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
import order from '@/store/modules/order';
import ali from '@/store/modules/ali';

import mixin from '@/assets/js/mixin.ts';
export default Vue.extend({
  name: 'OrderList',
  mixins: [mixin],
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '订单列表',
      keyword: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      orderList: []
    };
  },
  async mounted() {
    this.initData();
    // this.handleSave();
  },
  methods: {
    formateTime(obj) {
      if (obj.time) {
        return timeFormate.timeformatDay(obj.time);
      }
    },
    async initData() {
      let result = await order.dispatch('getOrderList', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber
      });
      console.log(result, 999);
      this.orderList = result.data;
    },
    // 查询
    search() {
      console.log('查询');
    },
    handleSave() {
      order.dispatch('addOrder', { shopName: 'cesg' }).then(result => {
        this.$message.success('添加订单成功');
        this.initData();
      });
    },
    // 撤销订单
    handleRevoke(item) {
      ali.dispatch('revokeOrder', { out_trade_no: item.orderId }).then(result => {
        this.initData();
      });
    },
    // 退款
    handleRefund(item) {
      console.log('退款');
      ali.dispatch('refundOrder', { out_trade_no: item.orderId, total_amount: item.payMoney }).then(result => {
        this.initData();
      });
    },
    // 删除商品
    handleDelete(id) {
      order.dispatch('delOrder', { id: id }).then(() => {
        this.$message.success('删除成功');
        this.initData();
      });
    }
  }
});
</script>
