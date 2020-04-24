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
      isEnd: true,
      examData: {},
      examList: [],
      qsTopic: {},
      isAllAnswer: false
    };
  },
  mounted() {},
  methods: {
    qsNum() {
      console.log('qs');
    },
    question() {
      console.log('qs');
    },
    changeAnswer() {
      console.log('qs');
    },
    previousQs() {
      console.log('qs');
    },
    nextQs() {
      console.log('qs');
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
</style>
