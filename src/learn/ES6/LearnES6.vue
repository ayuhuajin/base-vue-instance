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
        <el-button @click="handleAdd" type="warning">增加</el-button>
      </div>
    </main-header>
    <base-table></base-table>
    <page-change :pageInfo="pageInfo"></page-change>
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog"></base-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import PageChange from '@/components/common/PageChange.vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
export default Vue.extend({
  name: 'LearnES6',
  components: {
    MainHeader,
    BaseTable,
    PageChange,
    BaseDialog
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
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '文章列表',
        dialogWidth: '800px',
        activeClass: 'es6'
      },
      showDialog: false,
      value: '',
      input: ''
    };
  },
  mounted() {},
  methods: {
    // 添加数据
    handleAdd() {
      this.$router.push({
        name: 'AddList'
      });
    },
    // 获取分页数据
    getPageData() {
      console.log('11111,', '#44dce7');
    },
    // 关闭弹窗
    closeDialog() {
      console.log(5555);
      this.showDialog = false;
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
