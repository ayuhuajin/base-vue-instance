<template>
  <div class="add-blog">
    <div class="title"><img @click="back" class="back" src="../../../assets/images/icon_back.png" />增加文章</div>
    <base-form :rules="rules" :ruleForm="ruleForm" :refObj="'form'" :formClass="'formClass'" @submitForm="submitForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="category">
        <el-select v-model="ruleForm.categoryId" placeholder="文章分类" @change="changeCategory">
          <el-option
            v-for="(item, index) in categoryList"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图片上传">
        <base-upload :uploadInfo="uploadInfo"></base-upload>
      </el-form-item>
      <!-- <el-form-item label="文章正文" prop="content">
        <div id="editor" style="min-width:700px;max-width:1200px;margin: 0 auto;"></div>
      </el-form-item> -->
      <el-form-item label="文章正文" prop="content">
        <mavon-editor v-model="value" :toolbars="toolbars" />
      </el-form-item>
    </base-form>
    <!-- <span @click="preview">预览</span> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseForm from '@/components/common/BaseForm.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import wangeditor from 'wangeditor';
import index from '@/store/modules/index.ts';
import blog from '@/store/modules/blog.ts';

export default Vue.extend({
  name: 'AddBlog',
  components: {
    BaseForm,
    BaseUpload
  },
  data() {
    return {
      value: '',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      editor: null as any,
      title: '增加',
      categoryList: [],
      ruleForm: {
        id: this.$route.query.id,
        title: '',
        categoryId: '',
        content: '',
        img: ''
      } as any,
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
    let result = await index.dispatch('getAllCategory', {
      pageNumber: 1,
      pageSize: 999,
      name: ''
    });
    this.categoryList = result.data;
    this.createEditor();
    if (this.$route.query.id) {
      blog.dispatch('blogView', this.$route.query.id).then(data => {
        this.ruleForm.title = data[0].title;
        this.ruleForm.categoryId = data[0].categoryId;
        this.value = data[0].content;
        console.log(this.value);
        this.editor.txt.html(data[0].content);
        this.ruleForm.img = data[0].img;
      });
    }
  },
  methods: {
    // 创建编辑器
    createEditor() {
      this.editor = new wangeditor('#editor');
      this.editor.create();
    },
    changeCategory(e: String) {
      this.ruleForm.categoryId = e;
    },
    back() {
      this.$router.push({
        name: 'BlogList'
      });
    },
    // 预览
    preview() {
      console.log(444);
    },
    // 发布
    submitForm() {
      // console.log(this.editor.txt.html());
      // this.ruleForm.content = this.editor.txt.html();
      this.ruleForm.content = this.value;
      console.log(this.value);
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
