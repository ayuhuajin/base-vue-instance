<template>
  <div class="button-item" :class="[cname]">
    <span :class="[type, { disabled: disabled }]" @click="onClick"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'HaiButton',
  props: {
    cname: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.button-item {
  display: inline-block;
  @include userSelectNone;
  span.normal {
    @include btn(#dcdfe6, #666, $normalColor, $mainColor, $mainColor);
  }
  span.success {
    @include btn(#dcdfe6, #fff, #67c23a, #79e643, #fff, #79e643);
  }
  span.warning {
    @include btn(#dcdfe6, #fff, #e6a23c, #e6b76f, #fff, #e6b76f);
  }
  span.danger {
    @include btn(#dcdfe6, #fff, $mainColor, $secondaryColor, #fff, $secondaryColor);
  }
  span.disabled {
    @include btn(#dcdfe6, #999, #f3f3f3, #dcdfe6, #999, #f3f3f3);
    cursor: not-allowed;
  }
}
</style>
