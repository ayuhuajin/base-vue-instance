<template>
  <div class="demo-input" :class="cname">
    <input
      :type="type"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'HaiInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: Number,
      default: 3000
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data() {
    return {};
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    },
    onFocus(event) {
      this.$emit('on-focus', event);
    },
    onBlur(event) {
      this.$emit('on-blur', event);
    },
    // 值改变，失焦触发
    onChange(event) {
      this.$emit('on-change', event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.demo-input {
  display: inline-block;
  margin-right: 10px;
}
input {
  padding-left: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  line-height: $lineHeight;
  font-size: 14px;
  color: #333;
  transition: all 0.3s;
  &:disabled {
    color: #aaa;
    background: #f3f3f3;
    &:hover {
      cursor: not-allowed;
    }
  }
  &:hover:not(:disabled) {
    border-color: #bcbcbc;
  }
  &:focus {
    border-color: #409eff !important;
  }
}
</style>
