<template>
  <div class="base-question">
    <div class="topic">
      <p class="qs-number">
        {{ index }}.<span>{{ questionType == 1 ? '单选题' : '多选题' }}</span>
      </p>
      <div>Every night, he would hand mehis ____ and say," Good girl, help Daddy clean it, ok?"</div>
    </div>
    <div class="single-choice" v-if="questionType == 1">
      <el-radio-group v-model="radio">
        <el-radio v-for="(item, index) in chooseArr" :key="index" :label="item.id">{{ item.name }}</el-radio>
        <!-- <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio> -->
      </el-radio-group>
    </div>
    <div class="multiple-choice" v-if="questionType == 2">
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(item, index) in chooseArr" :key="index" :label="item.name"></el-checkbox>
        <!-- <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox> -->
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
    chooseArr: {
      type: Array
    }
  },
  data() {
    return {
      checkList: [],
      radio: 3,
      activeIndex: 1
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.base-question {
  font-size: 12px;
  .qs-number {
    float: left;
  }
}
</style>
