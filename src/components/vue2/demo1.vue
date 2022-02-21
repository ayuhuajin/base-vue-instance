<template>
  <div class="demo1">
    <!-- 1.computed 基础属性 -->
    <el-input v-model="firstName" placeholder="请输入内容"></el-input>
    <el-input v-model="lastName" placeholder="请输入内容"></el-input>
    <!-- 不可直接对fullname修改（浏览器报错Computed property "fullName" was assigned to but it has no setter.），因为默认只有getter，我们可以提供一个setter:  见第三点 userinfo示例 -->
    <!-- <el-input v-model="fullName" placeholder="请输入内容"></el-input> -->
    <div>{{ fullName }}</div>
    <!-- 2.computed 传参 -->
    <div v-for="(item, index) in list" :key="index">
      {{ getListName(item) }}
    </div>
    <!-- 3.computed set get 用法  -->
    <el-input v-model="userInfo" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'VueDemo1',
  components: {},
  data() {
    return {
      activeName: 'demo1',
      firstName: 'Foo',
      lastName: 'Bar',
      list: [{ name: '李', nickName: '白' }, { name: '杜', nickName: '甫' }],
      userList: [{ name: '王XX', age: 20 }, { name: '李XX', age: 23 }]
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    // 传参
    getListName() {
      return function(item) {
        // setTimeout(() => {
        //   return item.name + item.nickName;
        // });
        // console.log(item, 7897);
        return item.name + item.nickName;
      };
    },
    // 设置get set
    userInfo: {
      get: function() {
        console.log('调用了getter 属性');
        return this.firstName;
      },
      set: function(val) {
        console.log('更改userInfo触发调用了setter 属性', val);
        this.firstName = val;
      }
    }
  },
  watch: {
    userInfo: {
      // immediate: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, '监听computed 中的userinfo');
      }
    }
  },
  methods: {}
});
</script>
