<template>
  <div class="no-fount">
    <img src="../../assets/images/nodata.png" alt="" />
    <p>404 找不到文件或目录</p>
  </div>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
      activeIndex: 1
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.no-fount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  img {
    width: 160px;
    height: 160px;
    margin-top: 180px;
  }
  p {
    margin-top: 10px;
  }
}
</style>
