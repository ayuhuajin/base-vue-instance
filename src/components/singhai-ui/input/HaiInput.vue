<template>
  <div class="input" :class="cname">
    <input :type="type" :maxlength="maxlength" :disabled="disabled" :readonly="readonly" v-model="value" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'HaiInput',
  props: {
    cname: {
      type: String,
      default: ''
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
