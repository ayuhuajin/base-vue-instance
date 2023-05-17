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
        <el-radio
          v-for="(item, index) in answerOptions"
          :key="index"
          :label="item.name"
          @change="handlerChange('single')"
        >
          <img v-if="isImg(item.answer)" :src="item.answer" alt />
          <div v-else v-html="item.value">{{ item.value }}</div>
        </el-radio>
      </el-radio-group>
    </div>
    <div class="multiple-choice" v-if="questionType == 2">
      <el-checkbox-group v-model="checkList">
        <el-checkbox
          v-for="(item, index) in answerOptions"
          :key="index"
          :label="item.name"
          @change="handlerChange('multiple')"
          >{{ item.value }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <div class="reply" v-if="questionType == 3">
      <textarea
        id=""
        name=""
        :value="textareaStr"
        cols="30"
        rows="10"
        placeholder="请输入答案"
        @input="changeAnswer($event)"
      ></textarea>
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
      type: [Array, String, Number]
    },
    answer: {
      type: [Object, Array, String]
    }
  },

  data() {
    return {
      checkList: [], //多选
      radio: '' // 单选
    };
  },
  watch: {
    answer: {
      handler(newName, oldName) {
        this.checkList = [];
        this.radio = '';
        if (this.answer) {
          if (this.questionType == '1') {
            this.radio = this.answer;
          } else if (this.questionType == '2') {
            this.checkList = this.answer;
          }
        }
      },
      deep: true
    }
  },

  computed: {
    getType() {
      let type = '';
      if (this.questionType == '1') {
        type = '单选题';
      } else if (this.questionType == '2') {
        type = '多选题';
      } else if (this.questionType == '3') {
        type = '问答题';
      } else if (this.questionType == '4') {
        type = '填空题';
      }
      return type;
    },
    textareaStr: {
      get() {
        return this.answerOptions;
      },
      set(val) {
        this.answerOptions = val;
      }
    }
  },
  mounted() {
    this.checkList = [];
    this.radio = '';
    if (this.answer) {
      if (this.questionType == '1') {
        this.radio = this.answer;
      } else if (this.questionType == '2') {
        this.checkList = this.answer;
      }
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
    // 改变选项
    handlerChange(e, item) {
      if (e == 'single') {
        this.$emit('changeAnswer', this.radio);
      } else if (e == 'multiple') {
        this.$emit('changeAnswer', this.checkList);
      }
    },
    // 改变textarea内容
    changeAnswer(e) {
      this.$emit('changeAnswer', e.target.value);
    }
  }
};
</script>
<style lang="scss">
.base-question {
  ::v-deep.el-radio {
    display: flex;
    margin-top: 35px;
    margin-right: 0px;
    white-space: normal;
    color: #333;
  }
  ::v-deep.el-radio__label {
    white-space: normal;
    margin-top: -2px;
    line-height: 1.4;
  }
  ::v-deep.el-checkbox {
    display: flex;
    margin-top: 35px;
    margin-right: 0px;
    white-space: normal;
  }
  ::v-deep.el-checkbox__label {
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
    display: flex;
    align-items: center;
    margin-right: 4px;
    .number {
      font-size: 16px;
    }
  }
  .chooseType {
    line-height: 24px;
    padding: 0 4px;
    border-radius: 4px;
    color: #fff;
    background: #3ca3f8;
  }
  .topic-wrap {
    > div {
      font-size: 16px;
    }
  }
  .reply {
    margin-top: 10px;
    textarea {
      width: 100%;
      padding: 5px 10px;
      font-size: 16px;
      border-radius: 5px;
    }
  }
}
</style>
