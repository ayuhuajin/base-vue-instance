<template>
  <div :class="type" v-if="isShow">
    <div class="loading1">
      <slot>
        <img src="../../../assets/images/0.jpg" alt="" />
        <p>加载中</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HaiLoading',
  props: {
    cname: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'global'
    },
    text: {
      type: String,
      default: '加载中'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: '暂无数据'
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.global {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  img {
    width: 100px;
    height: 100px;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
.normal {
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  img {
    width: 100px;
    height: 100px;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>
