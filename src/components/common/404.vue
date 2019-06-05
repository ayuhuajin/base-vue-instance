<template>
  <div class="no-fount">
    <img src="../../assets/images/no_fount.png" alt="" />
    <span>404 找不到文件或目录</span>
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
  font-size: 20px;
  img {
    margin-top: 180px;
  }
  span {
    margin-top: -60px;
  }
}
</style>
