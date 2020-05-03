<template>
  <div class="bank-detail">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />试卷详情</div>
    <div class="question-list" v-for="(item, index) in data" :key="index">
      <div class="question">
        <p>{{ item.questionTitle }}</p>
        <span @click="editQuestion">编辑</span>
      </div>
      <div v-for="(m, num) in item.opTions" :key="num">{{ m.name }}：{{ m.value }}</div>
    </div>
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
      id: this.$route.query.id,
      data: []
    };
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      let result = await question.dispatch('examDetail', {
        pageSize: 100000,
        pageNumber: 1,
        examId: this.$route.query.id
      });
      this.data = result.data;
    },
    // 编辑试题
    editQuestion() {
      console.log('编辑试题');
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
  .question-list {
    padding: 15px 20px;
    .question {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
  }
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
