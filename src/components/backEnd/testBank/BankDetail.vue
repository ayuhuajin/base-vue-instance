<template>
  <div class="bank-detail">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />试卷详情</div>
    <div>dfssdfs</div>
  </div>
</template>

<script>
import Vue from 'vue';
import question from '@/store/modules/question.ts';
export default Vue.extend({
  name: 'BankDetail',
  data() {
    return {
      value: '',
      id: this.$route.query.id
    };
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      await question.dispatch('examDetail', {
        pageSize: 100000,
        pageNumber: 1,
        examId: this.$route.query.id
      });
    },
    back() {
      this.$router.push({
        name: 'Banklist'
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.bank-detail {
  border-radius: 5px;
  background: white;
  .back {
    margin-right: 5px;
    cursor: pointer;
  }
  .title {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    background: white;
  }
}
</style>
