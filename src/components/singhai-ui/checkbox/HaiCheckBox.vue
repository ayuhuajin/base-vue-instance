<template>
  <label class="ckeckBox-item">
    <input type="checkbox" v-model="checked" :value="label" :name="name" :disabled="disabled" />
    <i></i>
    <span><slot>多选框</slot></span>
  </label>
</template>

<script>
export default {
  name: 'HaiCheckBox',
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    name: {
      type: String,
      default: 'name'
    },
    text: {
      type: String,
      default: '多选框'
    }
  },

  data() {
    return {
      message: ''
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.ckeckBox-item {
  position: relative;
  &:hover {
    i {
      border: 1px solid #bcbcbc;
    }
  }
  input[type='checkbox'] {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    &:checked {
      & ~ i {
        border: 1px solid #eee;
        background: $mainColor;
        &:after {
          content: '';
          box-sizing: content-box;
          border: 1px solid #fff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 6px;
          position: absolute;
          top: 2px;
          width: 3px;
          transition: transform 0.15s ease-in 0.05s;
          transform-origin: center;
          transform: rotate(45deg) scaleY(1.2);
        }
      }
    }
    &:disabled {
      cursor: not-allowed;
      & ~ i {
        background: #f8f4f4;
      }
      & ~ span {
        color: #c0c4cc;
      }
    }
  }
  i {
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 6px;
    border: 1px solid #eee;
    border-radius: 4px;
    transition: all 0.3s;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}
</style>
