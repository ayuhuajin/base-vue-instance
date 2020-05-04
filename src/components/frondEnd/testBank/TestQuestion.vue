<template>
  <div>
    <div v-if="isEnd" class="test-question">
      <base-question
        :index="currentQuestion.questionNum"
        :questionType="currentQuestion.questionType"
        :topic="currentQuestion.questionTitle"
        :answerOptions="currentQuestion.options"
        :answer="currentQuestion.reply"
        @changeAnswer="changeAnswer"
      ></base-question>
      <div class="qs-footer">
        <div class="topic" @click="question">
          <img src="../../../assets/images/icon_answer.png" alt />
          <span>题目</span>
        </div>
        <div :class="{ deactivated: currentNum == 0 }" class="previous operation" @click="previousQs">上一题</div>
        <div :class="{ deactivated: currentNum == examList.length }" class="next operation" @click="nextQs">下一题</div>
      </div>
    </div>
    <div v-if="!isEnd" class="submit-wrap">
      <div class="total-numer">
        <div
          @click="currentNumber(index)"
          v-for="(item, index) in examList"
          :class="[{ disable: !item.reply }]"
          :key="index"
        >
          {{ item.questionNum }}
        </div>
      </div>
      <div @click="handlerSubmit" class="submit" :class="{ isDisAble: !isAllAnswer }">提交并查看结果</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseQuestion from '@/components/common/BaseQuestion';
import question from '@/store/modules/question.ts';

export default Vue.extend({
  name: 'TestQuestion',
  components: { BaseQuestion },
  data() {
    return {
      currentNum: 0,
      isEnd: true,
      examList: [
        // {
        //   questionNumber: 1,
        //   questionType: 1,
        //   questionTitle: '阅读下面的文字,按要求作答。睿智的思想,高尚的情感,灵动的才智,无不贮藏于根深叶茂的文学之树',
        //   options: [{ answer: 'A', answerId: 1 }, { answer: 'B', answerId: 2 }],
        //   answer: null
        // },
        // {
        //   questionNumber: 2,
        //   questionType: 2,
        //   questionTitle: '阅读下面的文字,按要求作答。睿智的思想,高尚的情感,灵动的才智,无不贮藏于根深叶茂的文学之树',
        //   options: [{ answer: 'A', answerId: 1 }, { answer: 'B', answerId: 2 }],
        //   answer: null
        // },
        // {
        //   questionNumber: 3,
        //   questionType: 3,
        //   questionTitle: '说出栈和队列的区别?',
        //   options: '',
        //   answer: null
        // }
      ],
      currentQuestion: {},
      isAllAnswer: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await question.dispatch('examDetail', {
        pageSize: 100000,
        pageNumber: 1,
        examId: '5ead9adab5bd814c084e6e6f'
      });
      this.examList = result.data;
      this.currentQuestion = this.examList[0];
    },
    // 点击题号
    currentNumber(num) {
      this.currentNum = num;
      this.currentQuestion = this.examList[this.currentNum];
      this.isEnd = true;
    },
    question() {
      this.isEnd = false;
      this.judgeAllAnswer();
    },
    previousQs() {
      if (this.currentNum <= 0) {
        this.currentNum = 0;
        return;
      }
      this.currentNum--;
      this.currentQuestion = this.examList[this.currentNum];
    },
    nextQs() {
      if (this.currentNum >= this.examList.length - 1) {
        this.isEnd = false;
        this.currentNum = this.examList.length - 1;
        this.judgeAllAnswer();
        return;
      }
      this.currentNum++;
      this.currentQuestion = this.examList[this.currentNum];
    },
    // 判断是否已全部做完
    judgeAllAnswer() {
      let obj = this.examList.find(item => {
        return item.reply == '';
      });
      if (obj) {
        this.isAllAnswer = false;
      } else {
        this.isAllAnswer = true;
      }
    },
    changeAnswer(answer) {
      this.putAnswer(answer, this.currentNum);
    },
    putAnswer(answer, index) {
      if (this.examList[index].questionType == '3') {
        if (answer == '') {
          this.examList[index].reply = '';
        } else {
          this.examList[index].reply = answer;
        }
      } else if (this.examList[index].questionType == '2') {
        if (answer == '') {
          this.examList[index].reply = '';
        } else {
          this.examList[index].reply = answer;
        }
        console.log('多选题');
      } else {
        if (answer == '') {
          this.examList[index].reply = '';
        } else {
          this.examList[index].reply = answer;
        }
        console.log('单选题');
      }
    },
    handlerSubmit() {
      this.$router.push({
        name: 'testResult'
      });
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
