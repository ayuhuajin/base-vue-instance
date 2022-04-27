<template>
  <div class="node-demo">
    <!-- 1.CRUD -->
    <!-- <ul>
      <li v-for="(item, index) in list" :key="index">
        <el-input v-model="item.title" placeholder="请输入标题"></el-input>
        <el-input v-model="item.content" placeholder="请输入内容"></el-input>
        <el-button @click="updateItem(item)" type="primary">更新</el-button>
        <el-button @click="delItem(item)" type="danger">删除</el-button>
        <el-button @click="getItem(item)" type="primary">查看</el-button>
        <el-button v-if="list.length - 1 == index" @click="addItem" type="primary">添加</el-button>
      </li>
    </ul>
    <div style="margin-top:10px;">
      <p>标题：{{ demoObj.title || '--' }}</p>
      <p>内容：{{ demoObj.content || '--' }}</p>
    </div> -->

    <!-- 2. 静态文件 -->
    <!-- <div style="margin-top:20px;">2.静态文件</div>
    <img style="width:600px;height:300px;margin-top:5px;" :src="`${url}/images/map.png`" alt="" /> -->

    <!-- 3.上传附件 -->
    <!-- <el-upload
      style="margin-top:20px;"
      class="upload-demo"
      :action="`${url}/upload/1`"
      :on-change="handleChange"
      :file-list="fileList"
      :headers="{ Authorization: 'Bearer ' + token }"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload> -->

    <!-- 4.jwt 验证 -->
    <div style="margin-top:20px">
      <div>
        <span>账号：</span>
        <el-input v-model="account" type="text" placeholder="请输入账号" />
      </div>
      <div>
        <span>密码：</span>
        <el-input v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <el-button size="small" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import index from '@/store/modules/index';
import secret from '@/assets/js/utils/secret';

export default Vue.extend({
  name: 'NodeDemo',
  components: {},
  data() {
    return {
      url: 'http://192.168.42.2:3000',
      list: [
        {
          title: 'demo1',
          content: 'sdfgsdfsdfsfasdfsf'
        },
        {
          title: 'demo2',
          content: 'sdfgsdfsdfsfasdfsf'
        }
      ],
      demoObj: {},
      title: '登录',
      account: '',
      password: '',
      token: localStorage.getItem('token')
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios
        .get(`${this.url}/demoList`, {
          params: {
            pageNumber: 1,
            pageSize: 10
          },
          headers: { Authorization: 'Bearer ' + this.token }
        })
        .then(response => {
          console.log(response, 789);

          this.list = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addItem() {
      axios
        .post(`${this.url}/addDemo`, {
          title: 'Fred',
          content: 'Flintstone'
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    delItem(item) {
      console.log(item, 8989, item._id);
      axios
        .delete(`${this.url}/delDemo`, {
          data: { id: item._id }
        })
        .then(response => {
          this.init();
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateItem(item) {
      axios
        .put(`${this.url}/updateDemo`, {
          id: item._id,
          title: item.title,
          content: item.content
        })
        .then(response => {
          this.init();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getItem(item) {
      axios
        .get(`${this.url}/getDemoById`, {
          params: {
            id: item._id
          }
        })
        .then(response => {
          console.log(response.data, 789);
          this.demoObj = response.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleChange() {
      console.log('附件上传');
    },
    login() {
      console.log(1111);
      index
        .dispatch('login', {
          account: this.account,
          password: secret.Encrypt(this.password)
        })
        .then(data => {
          if (data.data.code == 200) {
            localStorage.setItem('token', data.data.data);
            localStorage.setItem('token_exp', new Date().getTime());
            this.init();
            // this.$router.replace({
            //   path: this.$route.query.redirect ? this.$route.query.redirect : '/backEnd'
            // });
          } else {
            this.$message({
              type: 'error',
              message: data.data.msg
            });
          }
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.node-demo {
  padding: 20px;
}
li {
  margin-top: 10px;
  .el-input {
    width: 200px;
    margin-left: 10px;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>
