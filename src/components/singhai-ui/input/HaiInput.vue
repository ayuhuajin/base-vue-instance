<template>
  <div class="input" :class="cname">
    <input
      :type="type"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      v-model="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'HaiInput',
  props: {
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
    return {
      value: ''
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
input {
  padding-left: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  line-height: $lineHeight;
  font-size: 14px;
  color: #333;
}
</style>
