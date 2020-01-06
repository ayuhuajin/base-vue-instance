<template>
  <div class="button-item" :class="[cname]">
    <span :class="type"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'HaiButton',
  props: {
    inputItem: {
      type: Object,
      default() {
        return {};
      }
    },
    cname: {
      type: String
    },
    type: {
      type: String,
      default: 'normal'
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
}
</style>
