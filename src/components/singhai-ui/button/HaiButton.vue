<template>
  <div class="button-item">
    <span :style="{ color: inputItem.color, width: inputItem.width }">{{ inputItem.msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'HaiButton',
  props: {
    inputItem: {
      type: Object,
      default: function() {
        return {
          msg: '默认按钮'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.button-item {
  display: inline-block;
  span {
    padding: 0 25px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    line-height: $lineHeight;
    font-size: 16px;
    color: #666;
    background: $normalColor;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      border: 1px solid $mainColor;
      color: $mainColor;
    }
  }
}
</style>
