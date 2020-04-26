<template>
  <div class="add-blog">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />增加试卷</div>
    <base-form :rules="rules" :ruleForm="ruleForm" :refObj="'form'" :formClass="'formClass'" @submitForm="submitForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="试卷分类" prop="category">
        <el-select v-model="ruleForm.categoryId" placeholder="文章分类" @change="changeCategory">
          <el-option
            v-for="(item, index) in categoryList"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
    </base-form>
    <!-- <span @click="preview">预览</span> -->
  </div>
</template>

<script>
import Vue from 'vue';
import BaseForm from '@/components/common/BaseForm.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import wangeditor from 'wangeditor';
import index from '@/store/modules/index.ts';
import blog from '@/store/modules/blog.ts';

export default Vue.extend({
  name: 'AddBank',
  components: {
    BaseForm
  },
  data() {
    return {
      value: '',
      title: '增加',
      categoryList: [],
      ruleForm: {
        id: this.$route.query.id,
        title: '',
        categoryId: '',
        content: '',
        img: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
        ],
        categoryId: [{ required: true, message: '请选择文章分类', trigger: 'blur' }],
        content: [{ message: '请选择文章分类', trigger: 'blur' }]
      },
      uploadInfo: {
        uploadURl: 'http://10.70.1.11:12306/upload',
        hide: false,
        uploadClass: 'uploadClass',
        desc: ''
      }
    };
  },
  async mounted() {
    if (this.$route.query.id) {
      blog.dispatch('blogView', this.$route.query.id).then(data => {
        this.ruleForm.title = data[0].title;
        this.ruleForm.categoryId = data[0].categoryId;
        this.value = data[0].content;
        this.editor.txt.html(data[0].content);
        this.ruleForm.img = data[0].img;
      });
    }
  },
  methods: {
    back() {
      this.$router.push({
        name: 'Banklist'
      });
    },
    // 预览
    preview() {
      console.log(444);
    },
    // 发布
    submitForm() {
      if (this.$route.query.id) {
        blog.dispatch('updateBlog', this.ruleForm).then(() => {
          this.$router.push({
            name: 'BlogList'
          });
        });
      } else {
        blog.dispatch('addBlog', this.ruleForm).then(() => {
          this.$router.push({
            name: 'BlogList'
          });
        });
      }
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
  .back {
    margin-right: 5px;
    cursor: pointer;
  }
  .title {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    background: white;
  }
}
</style>
