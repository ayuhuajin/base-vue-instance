<template>
  <div class="bank-detail">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />试卷详情</div>
    <div>dfssdfs</div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BankDetail',
  data() {
    return {
      value: ''
    };
  },
  async mounted() {},
  methods: {
    back() {
      this.$router.push({
        name: 'Banklist'
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.bank-detail {
  border-radius: 5px;
  background: white;
  .back {
    margin-right: 5px;
    cursor: pointer;
  }
  .title {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    background: white;
  }
}
</style>
