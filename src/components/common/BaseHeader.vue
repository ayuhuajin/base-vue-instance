<template>
  <div class="base-header">
    <img src="../../assets/images/logo.jpg" alt="logo" />
    <span class="name">嗨前端</span>
    <span @click="loginOut" class="loginOut">退出</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseHeader',
  data() {
    return {
      title: 'BaseHeader'
    };
  },
  mounted() {},
  methods: {
    loginOut() {
      localStorage.setItem('token', '');
      this.$router.push({
        name: 'login'
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.base-header {
  height: 80px;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
  line-height: 80px;
  background: #fff;
  img {
    width: 60px;
    height: 60px;
  }
  .name {
    margin-left: 20px;
    font-size: 18px;
    color: #666;
  }
  .loginOut {
    float: right;
    font-size: 18px;
    color: #333;
    cursor: pointer;
  }
}
</style>
