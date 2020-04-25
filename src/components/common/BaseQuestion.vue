<template>
  <div class="base-question">
    <div class="topic">
      <p class="qs-number">
        <span class="number"> {{ index }}.</span>
        <span class="chooseType">{{ getType }}</span>
      </p>
      <div class="topic-wrap">
        <img v-if="isImg(topic)" :src="topic" alt />
        <div v-else style="white-space: pre-wrap;" v-html="topic">{{ topic }}</div>
      </div>
    </div>
    <div class="single-choice" v-if="questionType == 1">
      <el-radio-group v-model="radio">
        <el-radio v-for="(item, index) in answerOptions" :key="index" :label="item.answerId">
          <img v-if="isImg(item.answer)" :src="item.answer" alt />
          <div v-else v-html="item.answer">{{ item.answer }}</div>
        </el-radio>
      </el-radio-group>
    </div>
    <div class="multiple-choice" v-if="questionType == 2">
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(item, index) in answerOptions" :key="index" :label="item.answer"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseQuestion',
  props: {
    index: {
      type: Number,
      default: 1
    },
    questionType: {
      type: Number,
      default: 1
    },
    topic: {
      type: String
    },
    answerOptions: {
      type: Array
    },
    answer: {
      type: Object
    }
  },

  data() {
    return {
      checkList: [],
      radio: 3,
      activeIndex: 1
    };
  },
  computed: {
    getType() {
      let type = '';
      if (this.questionType == '1') {
        type = '单选题';
      } else if (this.questionType == '2') {
        type = '多选题';
      } else if (this.questionType == '3') {
        type = '填空题';
      }
      return type;
    }
  },
  methods: {
    // 判断是否为图片
    isImg(str) {
      if (str) {
        let isImg = str.match(/.*(.png|.jpg|.jpeg|.gif)$/);
        if (isImg) {
          return true;
        } else {
          return false;
        }
      }
    },
    // 提交
    handlerChange(e, item) {
      if (e == 'single') {
        this.$emit('changeAnswer', this.radio, item[0].questionId);
      } else if (e == 'multi') {
        this.$emit('changeAnswer', this.checkList.toString(), item[0].questionId);
      }
    }
  }
};
</script>
<style lang="scss">
.base-question {
  /deep/.el-radio {
    display: flex;
    margin-top: 35px;
    margin-right: 0px;
    white-space: normal;
    color: #333;
  }
  /deep/.el-radio__label {
    white-space: normal;
    margin-top: -2px;
    line-height: 1.4;
  }
  /deep/.el-checkbox {
    display: flex;
    margin-top: 35px;
    margin-right: 0px;
    white-space: normal;
  }
  /deep/.el-checkbox__label {
    margin-top: -2px;
    white-space: normal;
    color: #333;
  }
}
</style>

<style lang="scss" scoped>
.base-question {
  padding: 12px;
  padding-bottom: 60px;
  font-size: 2vw;
  color: #333;
  .qs-number {
    float: left;
    margin-right: 4px;
    .number {
      font-size: 14px;
    }
  }
  .chooseType {
    line-height: 24px;
    padding: 2px 4px;
    border-radius: 4px;
    color: #fff;
    background: #3ca3f8;
  }
  .topic-wrap {
    > div {
      font-size: 16px;
    }
  }
}
</style>
