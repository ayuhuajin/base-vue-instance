<template>
  <el-dialog
    :title="dialogInfo.titleName"
    :width="dialogInfo.dialogWidth"
    :before-close="handleClose"
    class="base-dialog"
    :class="dialogInfo.activeClass"
    modal-append-to-body
    append-to-body
    :visible="showDialog"
    @update:visible="$emit('update:showDialog')"
  >
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    showDialog: {
      default: false,
      type: Boolean
    },
    dialogInfo: {
      type: Object,
      require: true,
      dialogWidth: {
        default: '10.8rem'
      }
    }
  },
  data() {
    return {};
  },
  watch: {
    settingDialog: {
      handler(newValue, old) {
        console.log(newValue);
      },
      deep: true
    }
  },
  methods: {
    handleClose() {
      this.$emit('closeDialog');
    }
  }
};
</script>

<style lang="scss">
.base-dialog {
  .el-dialog__body {
    padding: 40px 40px;
  }
  .el-dialog {
    border-radius: 6px;
    overflow: hidden;
  }
  .el-icon-close:before {
    position: absolute;
    top: 2px;
    left: -22px;
    width: 13px;
    height: 13px;
  }
  .el-dialog__header {
    display: flex;
    align-items: center;
    height: 54px;
    padding: 0 0 0 32px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    line-height: 54px;
    .el-dialog__title {
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>
