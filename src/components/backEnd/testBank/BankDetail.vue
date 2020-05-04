<template>
  <div class="bank-detail">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />试卷详情</div>
    <div class="question-list" v-for="(item, index) in data" :key="index">
      <div class="question">
        <p>{{ item.questionTitle }}</p>
        <span @click="editQuestion(item._id)">编辑</span>
      </div>
      <div v-for="(m, num) in item.options" :key="num">{{ m.name }}：{{ m.value }}</div>
    </div>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <set-question :questionInfo="questionInfo" @handleSave="handleSave" @handleCancel="handleCancel"></set-question>
    </base-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
import setQuestion from '@/components/common/SetQuestion';
import question from '@/store/modules/question.ts';
export default Vue.extend({
  name: 'BankDetail',
  components: {
    BaseDialog,
    setQuestion
  },
  data() {
    return {
      value: '',
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加试题',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      id: this.$route.query.id,
      data: [],
      questionInfo: {
        questionNum: '',
        questionType: '',
        questionTitle: '',
        level: '',
        subject: '',
        type: '',
        testPaper: '',
        questionDesc: '',
        options: [
          { name: 'A', value: '', isCheck: false },
          { name: 'B', value: '', isCheck: false },
          { name: 'C', value: '', isCheck: false }
        ]
      }
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
    async editQuestion(id) {
      console.log('编辑试题');
      this.$nextTick(async () => {
        this.showDialog = true;
        let obj = await question.dispatch('questionView', id);
        this.questionInfo = obj[0];
      });
    },
    closeDialog() {
      this.showDialog = false;
    },
    back() {
      this.$router.push({
        name: 'Banklist'
      });
    },
    handleSave(obj) {
      question.dispatch('updateQuestion', obj).then(() => {
        this.showDialog = false;
      });
    },
    handleCancel() {
      this.showDialog = false;
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
