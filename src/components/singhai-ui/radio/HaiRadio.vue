<template>
  <label class="radio-item">
    <input v-model="checked" :value="label" :name="name" :disabled="disabled" type="radio" />
    <i class="icon"></i>
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'HaiRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'name'
    },
    label: {
      type: [String, Number, Boolean],
      required: true
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
.radio-item {
  position: relative;
  &:hover {
    i {
      border-color: #bcbcbc;
    }
  }
  input[type='radio'] {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    &:checked {
      & ~ i {
        border-color: $secondaryColor;
        background: $mainColor;
        &:after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
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
    margin-right: 4px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    transition: all 0.3s;
  }
  span {
    vertical-align: middle;
  }
}
</style>
