<template>
  <div class="no-data">
    <img src="../../assets/images/no_fount.png" alt="" />
    <span>暂无数据</span>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  data() {
    return {
      message: '暂无数据'
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.no-data {
  color: #999;
  font-size: 16px;
}
</style>
