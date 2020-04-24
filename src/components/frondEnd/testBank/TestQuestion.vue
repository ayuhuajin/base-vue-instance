<template>
  <div>
    <div v-if="isEnd" class="test-question">
      <base-question
        :index="qsTopic.questionNumber"
        :questionType="qsTopic.questionType"
        :topic="qsTopic.questionTitle"
        :chooseArr="qsTopic.options"
        :answer="qsTopic.answer"
        @changeAnswer="changeAnswer"
      ></base-question>
      <div class="qs-footer">
        <div class="topic" @click="question">
          <img src="../../../assets/images/icon_answer.png" alt />
          <span>题目</span>
        </div>
        <div :class="{ deactivated: qsNum == 0 }" class="previous operation" @click="previousQs">上一题</div>
        <div :class="{ deactivated: qsNum == examList.length }" class="next operation" @click="nextQs">下一题</div>
      </div>
    </div>
    <div v-if="!isEnd" class="submit-wrap">
      <div class="total-numer">
        <div
          @click="qsNumber(index)"
          v-for="(item, index) in examList"
          :class="[{ disable: !item.answer }, { isHolder: item.questionType == 'holder_question' }]"
          :key="index"
        >
          {{ item.questionNumber }}
        </div>
      </div>
      <div @click="handlerSubmit" class="submit" :class="{ isDisAble: !isAllAnswer }">交卷并查看结果</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseQuestion from '@/components/common/BaseQuestion';
export default Vue.extend({
  name: 'TestQuestion',
  components: { BaseQuestion },
  data() {
    return {
      qsNum: 0,
      isEnd: true,
      examData: {},
      examList: [{ questionNumber: 111 }],
      qsTopic: {},
      isAllAnswer: false
    };
  },
  mounted() {},
  methods: {
    qsNumber(num) {
      this.qsNum = num;
      this.qsTopic = this.examList[this.qsNum];
      this.isEnd = true;
    },
    question() {
      this.isEnd = false;
      this.judgeAllAnswer();
    },
    previousQs() {
      if (this.qsNum <= 0) {
        this.qsNum = 0;
        return;
      }
      this.qsNum--;
      this.qsTopic = this.examList[this.qsNum];
    },
    nextQs() {
      if (this.qsNum >= this.examList.length - 1) {
        this.isEnd = false;
        this.qsNum = this.examList.length - 1;
        this.judgeAllAnswer();
        return;
      }
      this.qsNum++;
      this.qsTopic = this.examList[this.qsNum];
    },
    judgeAllAnswer() {},
    changeAnswer() {
      console.log('qs');
    },
    handlerSubmit() {
      console.log('提交试卷');
    }
  }
});
</script>
<style lang="scss" scoped>
.test-question {
  .qs-footer {
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
    padding-bottom: 8px;
    padding-top: 10px;
    border-top: 0.1333vw solid #f0f0f0;
    display: flex;
    align-items: center;
    background: #fff;
    .topic {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      font-size: 10px;
      color: #666;
      img {
        width: 16px;
        height: 16px;
        margin-top: 4px;
      }
    }
    .operation {
      flex: 0 0 40%;
      line-height: 36px;
      text-align: center;
      background: #3ca3f8;
      border-radius: 18px;
      font-size: 17px;
      color: white;
    }
    .next {
      margin: 0 12px 0 8px;
    }
    .deactivated {
      background: #cfcfcf;
    }
  }
}
.submit-wrap {
  .total-numer {
    display: flex;
    flex-wrap: wrap;
    padding: 9.3333vw 8.5vw;
    > div {
      margin-top: 5.3333vw;
      margin-right: 5.3333vw;
      width: 10.6667vw;
      height: 10.6667vw;
      padding: 2px;
      line-height: 10.6667vw;
      text-align: center;
      border-radius: 50%;
      font-size: 20px;
      color: #fff;
      background: #3ca3f8;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
    .deactivated {
      color: #cfcfcf !important;
    }
    .disable {
      color: #fff;
      background: #cfcfcf;
    }
    .isHolder {
      color: #666;
      background: none;
    }
  }
  .submit {
    position: fixed;
    bottom: 15px;
    width: 94%;
    margin-left: 2%;
    border-radius: 16px;
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: #3ca3f8;
  }
  .isDisAble {
    background: #cfcfcf;
    color: #fff;
  }
}
</style>
