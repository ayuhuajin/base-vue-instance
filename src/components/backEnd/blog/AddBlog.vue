<template>
  <div class="add-blog">
    <div class="title">增加文章</div>
    <base-form :rules="rules" :ruleForm="ruleForm" :refObj="'form'" :formClass="'formClass'">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="category">
        <el-select v-model="ruleForm.category" placeholder="文章分类">
          <el-option label="分类一" value="shanghai"></el-option>
          <el-option label="分类二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图片上传">
        <base-upload :uploadInfo="uploadInfo"></base-upload>
      </el-form-item>
      <el-form-item label="文章正文" prop="content">
        <div id="editor" style="min-width:700px;max-width:1200px;margin: 0 auto;"></div>
      </el-form-item>
    </base-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseForm from '@/components/common/BaseForm.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import wangeditor from 'wangeditor';
export default Vue.extend({
  name: 'AddBlog',
  components: {
    BaseForm,
    BaseUpload
  },
  data() {
    return {
      title: '增加',
      ruleForm: {
        title: '',
        category: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
        ],
        category: [{ required: true, message: '请选择文章分类', trigger: 'blur' }],
        content: [{ required: true, message: '请选择文章分类', trigger: 'blur' }]
      },
      uploadInfo: {
        uploadURl: 'http://www.baidu.com',
        hide: false,
        uploadClass: 'uploadClass',
        desc: ''
      }
    };
  },
  mounted() {
    this.createEditor();
  },
  methods: {
    // 创建编辑器
    createEditor() {
      var editor = new wangeditor('#editor');
      editor.create();
    }
  }
});
</script>
<style lang="scss">
.add-blog {
  .formClass {
    width: 80%;
    margin: 30px auto;
    padding: 30px 0;
    .el-form-item__label {
      position: relative;
      width: 80px !important;
      text-align-last: justify;
      text-align: justify;
      text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
      &:before {
        position: absolute;
        left: -20px;
        color: #f65b5b;
        font-size: 24px;
        top: 5px;
      }
    }
    .el-input__inner {
      width: 500px;
    }
  }
}
.el-select-dropdown {
  z-index: 99999 !important;
}
</style>

<style lang="scss" scoped>
.add-blog {
  border-radius: 5px;
  background: white;
  .title {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    background: white;
  }
}
</style>
