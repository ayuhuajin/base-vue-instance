<template>
  <div class="node-demo">
      <!-- 1.CRUD -->
      <ul>
          <li v-for="(item,index) in list " :key="index">
              <el-input v-model="item.title" placeholder="请输入标题"></el-input>
              <el-input v-model="item.content" placeholder="请输入内容"></el-input>
              <el-button @click="updateItem(item)" type="primary">更新</el-button>
              <el-button @click="delItem(item)" type="danger">删除</el-button>
              <el-button v-if="list.length-1==index" @click="addItem" type="primary">添加</el-button>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'NodeDemo',
  components: {
  },
  data() {
    return {
        url:"http://192.168.1.104:12306",
        list:[
            {
             title:"demo1",
             content:"sdfgsdfsdfsfasdfsf"
            },
            {
             title:"demo2",
             content:"sdfgsdfsdfsfasdfsf"
            }
        ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
        axios.get(`${this.url}/getBlogList`, {
            params: {
                pageNumber: 1,
                pageSize:10
            }
        })
        .then( (response)=> {
            console.log(response,789);
            
            this.list = response.data.data
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    addItem(){
        axios.post(`${this.url}/addBlog`, {
            title: 'Fred',
            content: 'Flintstone'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // axios({
        //     method: 'post',
        //     url:`${this.url}/addBlog`,
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     },
        //     headers:{
        //         "Authorization":"12323"
        //     }
        // });
        
    },
    delItem(item){
       axios.post(`${this.url}/delBlog`, {
            id:item._id
        })
        .then( (response) =>{
            this.init()
        })
        .catch( (error)=> {
            console.log(error);
        });
    },
    updateItem(item){
        axios.post(`${this.url}/updateBlog`, {
            id:item._id,
            title:item.title,
            content:item.content
        })
        .then( (response) =>{
            this.init()
        })
        .catch( (error)=> {
            console.log(error);
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.node-demo{
    padding: 20px;
}
li{
    margin-top: 10px;
    .el-input{
        width: 200px;
        margin-left: 10px;
    }
    .el-button{
        margin-left: 10px;
    }
}
</style>