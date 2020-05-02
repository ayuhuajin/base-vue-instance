<template>
  <div class="set-question">
    <div class="question-num">
      <span>题号:</span>
      <el-input v-model="questionNum" placeholder="请输入内容"></el-input>
    </div>
    <div>
      <span>题型:</span>
      <el-select v-model="type" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>
    <div>
      <span>科目</span>
      <div>
        <el-select v-model="subject" placeholder="请选择">
          <el-option v-for="(item, index) in subjectList" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>难度</span>
      <div>
        <el-select v-model="level" placeholder="请选择" @change="changeLevel">
          <el-option v-for="(item, index) in levelList" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>所属试卷</span>
      <div>
        <el-select v-model="testPaper" placeholder="请选择">
          <el-option
            v-for="(item, index) in testPaperList"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span>题目:</span>
      <textarea v-model="questionTitle" name="" id="" cols="30" rows="10"></textarea>
      <!-- <input type="text" value="3333"> -->
    </div>
    <div class="answer">
      <span>答案:</span>
      <div
        v-for="(item, index) in chooseList"
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
      <div v-for="(item, index) in chooseList" :key="index">
        <span>{{ item.name }}</span>
        <el-input v-model="questionNum" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div>
      <span>答案解析:</span>
      <textarea v-model="questionDesc" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div>
      <span class="save" @click="handleSave">保存</span>
      <span class="cancel" @click="closeDialog">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetQuestion',
  props: {
    questionNum: {
      type: Number,
      default: 1
    },
    questionType: {
      type: Number,
      default: 1
    },
    questionTitle: {
      type: String,
      default: '这是什么题目'
    }
  },
  data() {
    return {
      data: 'test',
      subjectList: [{ name: '前端', _id: 1 }],
      subject: '',
      levelList: [{ name: '入门', _id: 1 }, { name: '一般', _id: 2 }, { name: '困难', _id: 3 }],
      level: '',
      options: [
        {
          value: 1,
          label: '单选题'
        },
        {
          value: 2,
          label: '多选题'
        },
        {
          value: 3,
          label: '问答题'
        }
      ],
      type: '',
      testPaperList: [{ name: 12, _id: 1 }, { name: 'ddd', _id: 2 }],
      testPaper: '',
      questionDesc: '',
      // 选项
      chooseItem: [
        {
          name: 'A',
          value: 1,
          isCheck: false
        },
        {
          name: 'B',
          value: 2,
          isCheck: false
        },
        {
          name: 'C',
          value: 3,
          isCheck: false
        },
        {
          name: 'D',
          value: 4,
          isCheck: false
        },
        {
          name: 'E',
          value: 5,
          isCheck: false
        },
        {
          name: 'F',
          value: 6,
          isCheck: false
        },
        {
          name: 'G',
          value: 7,
          isCheck: false
        }
      ],
      chooseList: [
        { name: 'A', value: 1, isCheck: false },
        { name: 'B', value: 2, isCheck: false },
        { name: 'C', value: 3, isCheck: true }
      ],
      questionObj: {
        questionNum: this.questionNum,
        questionType: this.questionType,
        questionTitle: this.questionTitle,
        level: this.level,
        subject: this.subject,
        type: this.type,
        testPaper: this.testPaper,
        questionDesc: this.questionDesc
      }
    };
  },
  methods: {
    // 添加选项
    addChooseItem() {
      let len = this.chooseList.length;
      console.log(len);
      if (len < 7) {
        this.chooseList.push(this.chooseItem[len]);
      }
    },
    // 选中选项
    chooseOption(item) {
      if (this.questionType == 'multi') {
        console.log('最多选择3项');
        this.chooseList.forEach(item => {
          item.isCheck = false;
        });
        item.isCheck = !item.isCheck;
      } else {
        item.isCheck = !item.isCheck;
      }
    },
    // 取消
    closeDialog() {
      this.$emit('handleCancel');
      console.log('取消');
    },
    changeLevel(e) {
      console.log(e, 9999, this.level);
    },
    // 提交
    handleSave() {
      let questionObj = {
        questionNum: this.questionNum,
        questionType: this.questionType,
        questionTitle: this.questionTitle,
        level: this.level,
        subject: this.subject,
        type: this.type,
        testPaper: this.testPaper,
        questionDesc: this.questionDesc
      };
      this.$emit('handleSave', questionObj);
      console.log('提交');
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
}
.options {
  > div {
    display: flex;
    align-items: center;
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
