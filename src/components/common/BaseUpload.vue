<template>
  <div class="base-upload">
    <el-upload
      :action="uploadInfo.uploadURl"
      list-type="picture-card"
      :show-file-list="true"
      :file-list="fileList"
      :class="uploadInfo.uploadClass"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-error="handleError"
      :headers="{ Authorization: 'Bearer ' + token }"
    >
      <i class="el-icon-plus avatar-uploader-icon"> </i>
    </el-upload>
    <p class="desc" v-if="uploadInfo.desc">{{ uploadInfo.desc }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseUpload',
  props: {
    uploadInfo: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      title: '上传图片',
      fileList: [],
      token: localStorage.getItem('token')
    };
  },
  mounted() {},
  methods: {
    // 图片上传之前
    beforeUpload(file: any) {},
    //文件上传失败
    handleError(err: any, file: any, fileList: any) {},
    // 文件上传成功
    handleSuccess(res: any, file: any, fileList: any) {},
    // 文件移除
    handleRemove(file: any, fileList: any) {}
  }
});
</script>
