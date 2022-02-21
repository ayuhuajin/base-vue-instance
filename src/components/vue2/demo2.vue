<template>
  <div class="demo2">
    <!--1. watch 基础用法 监听 -->
    <el-input v-model="userName" placeholder="请输入内容"></el-input>
    <!--2. 监听对象 -->
    <div @click="changeUserInfo">更改userinfo</div>
    <!--3. 监听深度对象 -->
    <div @click="changeOrganization">更改organ</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'VueDemo2',
  components: {},
  data() {
    return {
      userAge: '1234',
      userName: '车车',
      userInfo: { name: '李白', age: '1372' },
      organization: { name: '嗨前端', organ: { name: 'javascript' } }
    };
  },
  watch: {
    userAge: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, 'userAge立即监听');
      }
    },
    userName(newVal, oldVal) {
      console.log(newVal, oldVal, 'userName普通监听');
    },
    // 监听但无法知道哪个属性被修改
    userInfo: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, 'userInfo');
      }
    },
    // 监听userInfo.name 的属性
    'userInfo.name'(newVal, oldVal) {
      console.log(newVal, oldVal, '‘对象名.属性名’方式进行监听');
    },
    organization: {
      deep: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, '深度监听organ'); // {a:1}
      }
    }
  },
  methods: {
    changeUserInfo() {
      console.log(this.userInfo);
      this.userInfo.name = 'a';
    },
    changeOrganization() {
      this.organization.organ.name = 'addddd';
    }
  }
});
</script>
