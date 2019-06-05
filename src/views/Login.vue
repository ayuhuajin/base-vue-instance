<template>
  <div class="login">
    <div class="mask">
      <div class="login-box">
        <h3>wsinghai博客</h3>
        <div>
          <span>账号：</span>
          <input type="text" placeholder="请输入账号" />
        </div>
        <div>
          <span>密码：</span>
          <input type="password" placeholder="请输入密码" />
        </div>
        <div class="login-btn">登录</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Login',
  data() {
    return {
      title: '登录'
    };
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: url('../assets/images/bg.jpg');
  background-size: cover;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .login-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 600px;
    height: 400px;
    margin: auto;
    border-radius: 5px;
    overflow: hidden;
    background: white;
    h3 {
      margin-bottom: 60px;
      font-size: 32px;
      text-align: center;
      line-height: 60px;
      color: white;
      background: #409eff;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      text-align: center;
      span {
        font-size: 16px;
        color: #666;
      }
      input {
        width: 250px;
        border: 1px solid #ddd;
        padding-left: 20px;
        border-radius: 5px;
        overflow: hidden;
        line-height: 40px;
        outline: none;
      }
    }
    .login-btn {
      width: 300px;
      margin: 35px auto;
      border-radius: 5px;
      line-height: 40px;
      overflow: hidden;
      color: white;
      cursor: pointer;
      background: #409eff;
    }
  }
}
</style>
