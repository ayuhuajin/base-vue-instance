<template>
  <div class="test-history">
    <ul>
      <li @click="gotoResult(item)" v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TestHistory',
  data() {
    return {
      list: [{ name: '第一次测试' }]
    };
  },
  mounted() {},
  methods: {
    gotoResult(item) {
      this.$router.push({
        name: 'testResult'
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.test-history {
  padding-top: 150px;
  background: #fff;
}
</style>
