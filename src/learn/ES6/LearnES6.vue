<template>
  <div class="learn-es6">
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
        <el-button type="warning">增加</el-button>
      </div>
    </main-header>
    <base-table></base-table>
    <page-change :pageInfo="pageInfo"></page-change>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
export default Vue.extend({
  name: 'LearnES6',
  components: {
    MainHeader,
    BaseTable,
    PageChange
  },
  data() {
    return {
      title: '学习ES6',
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
      value: '',
      input: '',
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: (this as any).getPageData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      }
    };
  },
  mounted() {},
  methods: {
    getPageData() {
      console.log('11111,', '#44dce7');
    }
  }
});
</script>
<style lang="scss" scoped>
.learn-es6 {
  > div:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
