<template>
  <div class="test-bank">
    <div @click="startTest">开始测试</div>
    <p @click="testHistory">测试历史记录</p>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TestBank',
  data() {
    return {};
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
  padding-top: 150px;
  background: #fff;
}
</style>
