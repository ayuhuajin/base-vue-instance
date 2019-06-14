<template>
  <div class="base-form">
    <el-form :model="ruleForm" :rules="rules" :ref="refObj" :class="formClass" label-width="100px">
      <slot></slot>
      <el-form-item class="operation">
        <el-button type="primary" @click="submitForm(refObj)">立即创建</el-button>
        <el-button @click="resetForm(refObj)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseForm',
  props: {
    rules: {
      type: Object
    },
    ruleForm: {
      type: Object
    },
    refObj: {
      type: String
    },
    formClass: {
      type: String
    }
  },
  data() {
    return {
      title: 'BaseForm'
    };
  },
  mounted() {},
  methods: {
    submitForm(formName: any) {
      (this as any).$refs[formName].validate((valid: any) => {
        if (valid) {
          this.$emit('submitForm');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName: any) {
      (this as any).$refs[formName].resetFields();
    }
  }
});
</script>
<style lang="scss">
.base-form {
  .operation {
    margin-top: 20px;
  }
}
</style>
