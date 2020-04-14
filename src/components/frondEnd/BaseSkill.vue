<template>
  <div>
    <div class="base-skill">
      <base-question
        :index="qsTopic.index"
        :questionType="qsTopic.questionType"
        :topic="qsTopic.topic"
        :chooseArr="qsTopic.options"
      ></base-question>
      <div>
        <div @click="question">题目</div>
        <div @click="previousQs">上一题</div>
        <div @click="nextQs">下一题</div>
      </div>
      <no-data :haveData="noData" :messages="noMsg"></no-data>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
import BaseQuestion from '@/components/common/BaseQuestion';
export default Vue.extend({
  name: 'BaseSkill',
  components: { NoData, BaseQuestion },
  data() {
    return {
      noData: false,
      noMsg: '技能暂未开放，敬请期待',
      qsTopic: {
        index: 2,
        questionType: 2,
        topic: 'Every night, he would hand mehis ____ and say,Good girl, help Daddy clean it, ok?',
        options: [
          {
            id: 3,
            name: '这是第一题'
          },
          {
            id: 6,
            name: '这是第二题'
          },
          {
            id: 9,
            name: '这是第三题'
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    question() {
      console.log('问题');
    },
    previousQs() {
      console.log('上一题');
    },
    nextQs() {
      this.qsTopic = {
        index: 1,
        questionType: 1,
        topic: '士大夫士大夫士大夫士大夫撒旦是谁的',
        options: [
          {
            id: 3,
            name: '嘟嘟'
          },
          {
            id: 6,
            name: '是'
          },
          {
            id: 9,
            name: '这是第三题'
          }
        ]
      };
    }
  }
});
</script>
<style lang="scss" scoped>
.base-skill {
  padding-top: 150px;
}
</style>
