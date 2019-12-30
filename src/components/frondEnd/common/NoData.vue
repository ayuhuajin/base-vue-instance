<template>
  <div class="f-no-data">
    <div v-if="haveData">
      <img src="../../../assets/images/nodata.png" alt="" />
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'FNoData',
  props: {
    haveData: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      tit: '暂无数据'
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.f-no-data {
  margin-top: 30vh;
  text-align: center;
  > div {
    display: inline-block;
    text-align: center;
    img {
      width: 120px;
      height: 120px;
    }
    p {
      margin-top: 10px;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
