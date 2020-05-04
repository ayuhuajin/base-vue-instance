<template>
  <div class="set-question">
    <div class="question-num">
      <span>题号:</span>
      <el-input v-model="questionInfo.questionNum" placeholder="请输入内容"></el-input>
    </div>
    <div>
      <span>题型:</span>
      <el-select v-model="questionInfo.questionType" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>
    <div>
      <span>科目</span>
      <div>
        <el-select v-model="questionInfo.subject" placeholder="请选择">
          <el-option v-for="(item, index) in subjectList" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>难度</span>
      <div>
        <el-select v-model="questionInfo.level" placeholder="请选择">
          <el-option v-for="(item, index) in levelList" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>所属试卷</span>
      <div>
        <el-select v-model="questionInfo.testPaper" placeholder="请选择">
          <el-option
            v-for="(item, index) in testPaperList"
            :key="index"
            :label="item.title"
            :value="item._id"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>题目:</span>
      <textarea
        v-model="questionInfo.questionTitle"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请输入题目"
      ></textarea>
    </div>
    <div class="answer">
      <span>答案:</span>
      <div
        v-for="(item, index) in questionInfo.options"
        :key="index"
        class="option-item"
        :class="{ check: item.isCheck }"
        @click="chooseOption(item, index)"
      >
        <span>{{ item.name }}</span>
      </div>
      <span class="add-item" @click="addChooseItem">添加选项</span>
    </div>
    <div class="options">
      <span>选项：</span>
      <div v-for="(item, index) in questionInfo.options" :key="index">
        <span>{{ item.name }}：</span>
        <el-input v-model="item.value" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div>
      <span>答案解析:</span>
      <textarea
        v-model="questionInfo.questionDesc"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请输入答案解析"
      ></textarea>
    </div>
    <div>
      <span class="save" @click="handleSave">保存</span>
      <span class="cancel" @click="closeDialog">取消</span>
    </div>
  </div>
</template>

<script>
import exam from '@/store/modules/exam';
import mixin from '@/assets/js/mixin.ts';
export default {
  name: 'SetQuestion',
  mixins: [mixin],
  props: {
    questionInfo: {
      type: Object
    }
  },
  data() {
    return {
      subject: '',
      level: '',
      questionType: '',
      testPaperList: [],
      testPaper: '',
      questionDesc: '',
      answer: [],
      // 选项
      chooseItem: [
        {
          name: 'A',
          value: '',
          isCheck: false
        },
        {
          name: 'B',
          value: '',
          isCheck: false
        },
        {
          name: 'C',
          value: '',
          isCheck: false
        },
        {
          name: 'D',
          value: '',
          isCheck: false
        },
        {
          name: 'E',
          value: '',
          isCheck: false
        },
        {
          name: 'F',
          value: '',
          isCheck: false
        },
        {
          name: 'G',
          value: '',
          isCheck: false
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await exam.dispatch('getAllExam', {
        pageSize: 1000000,
        pageNumber: 1
      });
      this.testPaperList = result.data;
    },
    // 添加选项
    addChooseItem() {
      let len = this.questionInfo.options.length;
      if (len < 7) {
        this.questionInfo.options.push(this.chooseItem[len]);
      }
    },
    // 选中选项
    chooseOption(item) {
      this.questionInfo.answer = [];
      if (this.questionInfo.questionType == 1) {
        this.questionInfo.options.forEach(item => {
          item.isCheck = false;
        });
        item.isCheck = !item.isCheck;
        this.questionInfo.answer.push(item.name);
      } else {
        item.isCheck = !item.isCheck;
        this.questionInfo.options.forEach(item => {
          if (item.isCheck == true) {
            this.questionInfo.answer.push(item.name);
          }
        });
      }
    },
    // 取消
    closeDialog() {
      this.$emit('handleCancel');
    },
    // 提交
    handleSave() {
      this.$emit('handleSave', this.questionInfo);
    }
  }
};
</script>
<style lang="scss">
.set-question {
  color: #666;
  .question-num {
    .el-input {
      width: 300px;
    }
  }
}
</style>

<style lang="scss" scoped>
.set-question {
  > div {
    margin-top: 15px;
    > span {
      font-size: 16px;
      color: #666;
    }
  }
}
.option-item {
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background: #d4cdcd;
}
.check {
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
  background: #409eff;
}
textarea {
  width: 100%;
  padding: 10px 15px;
}
.options {
  > div {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
}
.answer {
  display: flex;
  align-items: center;
  .add-item {
    margin-left: 5px;
    color: #666;
  }
}
</style>
