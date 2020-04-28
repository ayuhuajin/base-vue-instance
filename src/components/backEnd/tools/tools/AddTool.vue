<template>
  <div class="add-tool">
    <div class="title"><img @click="back" class="back" src="../../../../assets/images/icon_back.png" />增加工具</div>
    <base-form :rules="rules" :ruleForm="ruleForm" :refObj="'form'" :formClass="'formClass'" @submitForm="submitForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="工具描述" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="link">
        <el-input v-model="ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="工具分类" prop="category">
        <el-select v-model="ruleForm.categoryId" placeholder="工具分类" @change="changeCategory">
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
    </base-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseForm from '@/components/common/BaseForm.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import toolType from '@/store/modules/toolType.ts';
import tools from '@/store/modules/tools.ts';

export default Vue.extend({
  name: 'AddTool',
  components: {
    BaseForm,
    BaseUpload
  },
  data() {
    return {
      title: '增加',
      categoryList: [],
      ruleForm: {
        id: this.$route.query.id,
        title: '',
        categoryId: '',
        desc: '',
        link: '',
        img: ''
      } as any,
      rules: {
        title: [
          { required: true, message: '请输入工具名', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
        ],
        categoryId: [{ required: true, message: '请选择工具分类', trigger: 'blur' }],
        desc: [{ message: '请输入工具描述', trigger: 'blur' }],
        link: [{ message: '输入工具链接', trigger: 'blur' }]
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
    let result = await toolType.dispatch('getAllCategory', {
      pageNumber: 1,
      pageSize: 999,
      name: ''
    });
    this.categoryList = result.data;
    if (this.$route.query.id) {
      tools.dispatch('toolView', this.$route.query.id).then(data => {
        this.ruleForm.title = data[0].title;
        this.ruleForm.categoryId = data[0].categoryId;
        this.ruleForm.desc = data[0].desc;
        this.ruleForm.link = data[0].link;
        this.ruleForm.img = data[0].img;
      });
    }
  },
  methods: {
    changeCategory(e: String) {
      this.ruleForm.categoryId = e;
    },
    back() {
      this.$router.push({
        name: 'toolList'
      });
    },
    // 发布
    submitForm() {
      if (this.$route.query.id) {
        tools.dispatch('updateTool', this.ruleForm).then(() => {
          this.$router.push({
            name: 'toolList'
          });
        });
      } else {
        tools.dispatch('addTool', this.ruleForm).then(() => {
          this.$router.push({
            name: 'toolList'
          });
        });
      }
    }
  }
});
</script>
<style lang="scss">
.add-tool {
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
.add-tool {
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
