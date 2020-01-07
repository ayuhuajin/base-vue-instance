<template>
  <div class="switch-item">
    <input v-model="isChecked" type="checkbox" @change="onChange" />
    <span class="inner-text">{{ this.value ? this.text[0] : this.text[1] }}</span>
  </div>
</template>

<script>
export default {
  name: 'HaiSwitch',
  props: {
    value: {
      type: Boolean,
      require: true
    },
    text: {
      type: Array,
      default() {
        return ['开', '关'];
      }
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
      }
    }
  },
  data() {
    return {
      message: '暂无数据'
    };
  },
  methods: {
    onChange() {
      this.$emit('onChange', event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.switch-item {
  position: relative;
  display: inline-block;
  width: 60px;
  cursor: pointer;
}
input[type='checkbox'] {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:checked {
    & ~ .inner-text {
      background: $secondaryColor;
      padding-left: 10px;
      &:after {
        left: calc(100% - 31px);
      }
    }
  }
}
.inner-text {
  position: relative;
  display: block;
  height: 30px;
  padding-left: 38px;
  border-radius: 20px;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  background: #d6d6d6;
  transition: all 0.3s;
  &:after {
    position: absolute;
    content: '';
    width: 30px;
    height: 28px;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 30px;
    background: #fff;
    transition: all 0.3s;
  }
}
</style>
