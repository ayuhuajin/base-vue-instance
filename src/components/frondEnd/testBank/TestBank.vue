<template>
  <div class="test-bank">
    <section class="logo">
      <img src="../../../assets/images/0.jpg" alt="" />
      <p>嗨前端</p>
    </section>
    <section class="choose">
      <div>
        <span>
          科目:
        </span>
        <el-select v-model="value" placeholder="请选择科目">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>
          难度:
        </span>
        <el-select v-model="value" placeholder="请选择难度">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
    </section>
    <section class="start">
      <div @click="startTest" class="start-btn">开始测试</div>
      <p @click="testHistory" class="history">测试历史记录</p>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TestBank',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '入门'
        },
        {
          value: '选项2',
          label: '一般'
        },
        {
          value: '选项3',
          label: '困难'
        }
      ],
      options1: [
        {
          value: '选项1',
          label: 'CSS'
        },
        {
          value: '选项2',
          label: '综合'
        },
        {
          value: '选项3',
          label: 'JS'
        }
      ],
      value: ''
    };
  },
  mounted() {},
  methods: {
    startTest() {
      this.$router.push({
        name: 'testQuestion'
      });
    },
    testHistory() {
      this.$router.push({
        name: 'testHistory'
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.test-bank {
  text-align: center;
  height: 100vh;
  background: #fff;
  img {
    width: 200px;
    height: 200px;
  }
  .logo {
    padding-top: 10%;
    p {
      font-size: 18px;
      color: #666;
    }
  }
  .choose {
    margin-top: 30px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      span {
        margin-right: 5px;
      }
    }
  }
  .start {
    position: fixed;
    width: 100%;
    bottom: 10%;
    text-align: center;
    color: #3ca3f8;
    .start-btn {
      width: 80%;
      margin: 0 auto;
      border-radius: 5px;
      line-height: 45px;
      font-size: 16px;
      color: #fff;
      background: #3ca3f8;
    }
    .history {
      margin-top: 15px;
      font-size: 14px;
    }
  }
}
</style>
