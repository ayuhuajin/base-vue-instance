<template>
  <div class="set-question">
    <div>
      <span>题型</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div>
      <span>题号</span>
      <el-input v-model="questionNum" placeholder="请输入内容"></el-input>
    </div>
    <div>
      <span>题目</span>
      <textarea v-model="questionTitle" name="" id="" cols="30" rows="10"></textarea>
      <!-- <input type="text" value="3333"> -->
    </div>
    <div>
     答案
      <div v-for="(item,index) in chooseList" :key="index" :class="{check:item.isCheck}" @click="chooseOption(item,index)">
        <span>{{item.name}}</span>
      </div>
      <span @click="addChooseItem">添加选项</span>
    </div>
    <div>
      选项
      <div v-for="(item,index) in chooseList"  :key="index">
        <span>{{item.name}}</span><input type="text" value="3333">
      </div>
    </div>
    <div>
      <span @click="handleSubmit">确定</span>
      <span>取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetQuestion",
  props:{
    questionType:{
      type:Number,
      default:1
    },
    questionNum:{
      type:Number,
      default:1
    },
    questionTitle:{
      type:String,
      default:'这是什么题目'
    }
  },
  data() {
    return {
      data:'test',
      options: [
        {
          value: '选项1',
          label: "单选题"
        }, {
          value: '选项2',
          label: '多选题'
        }, {
          value: '选项3',
          label: '问答题'
        }
      ],
      value: '',
      //questionType:'multi', //题型
      // questionNum:1,// 题号
      // questionTitle:'这是什么题目',
      // 选项
      chooseItem:[
        {
          name:'A',
          value:1,
          isCheck:false
        },
        {
          name:'B',
          value:2,
          isCheck:false
        },
        {
          name:'C',
          value:3,
          isCheck:false
        },
        {
          name:'D',
          value:4,
          isCheck:false
        },{
          name:'E',
          value:5,
          isCheck:false
        },
        {
          name:'F',
          value:6,
          isCheck:false
        },
        {
          name:'G',
          value:7,
          isCheck:false
        }
      ],
      chooseList:[{name:"A", value:1,isCheck:false},{name:'B', value:2,isCheck:false},{name:'C', value:3,isCheck:true}]
    }
  },
  methods:{
    // 添加选项
    addChooseItem(){
      let len = this.chooseList.length
      console.log(len)
      if(len<7) {
        this.chooseList.push(this.chooseItem[len])
      }
    },
    // 选中选项
    chooseOption(item){
      if(this.questionType =='multi') {
        console.log("最多选择3项")
        this.chooseList.forEach((item)=>{
          item.isCheck = false
        })
        item.isCheck = !item.isCheck
      } else {
        item.isCheck = !item.isCheck
      }
    },
    // 提交
    handleSubmit(){
      console.log('提交')
    }
  }
};
</script>
<style>
.set-question{
  color: #666;
}
</style>

<style lang="scss" scoped>
.check{
  color: #fff;
  background: #409EFF;
}
</style>
