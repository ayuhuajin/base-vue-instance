<template>
  <div class="contact-list">
    <span @click="getList">获取联系列表</span>
    <span @click="addContact">添加联系人</span>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div>
          <span>{{ item.name }} </span>
          <span>{{ item.phone }}</span>
        </div>
        <div>
          <span @click="addWechat(item)">微信：{{ item.wechat }}</span>
          <span>{{ item.isAddContactWX ? '已添加' : '未添加' }}</span>
        </div>
        <span>{{ item.addr }}</span>
        <!-- <span @click="delContact(item)">删除</span>
        <span @click="updateContact(item)">添加</span>
        <span @click="addWechat(item)">添加微信</span> -->
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import contact from '@/store/modules/contact'
export default Vue.extend({
  components: {
  },
  data(){
    return {
      list:[],
      contactList:[{
        name:'测试名',
        nickName:'昵称'
      }]
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){
      contact.dispatch('getContactList',{
        query:1
        }).then((result)=>{
          this.list = result.data
          console.log(result.data,123);
        })
    },
    // 添加联系人
    addContact(){
      contact.dispatch('addContact',this.contactList).then((result)=>{
        this.getList()
      })
    },
    // 删除联系人
    delContact(item){
      contact.dispatch('delContact',item).then((result)=>{
        this.getList()
      })
    },
    // 编辑联系人
    updateContact(item){
      item.isAddContactWX = true
      contact.dispatch('updateContact',item).then((result)=>{
        this.getList()
      })
    },
    // 添加微信
    addWechat(item){
      this.copyUrl(item.phone)
      window.location.href='weixin://';
    },
    // 复制方法
    copyUrl(text){
      let input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length)

      if (document.execCommand) {
        document.execCommand('Copy');
        this.$message.success('复制成功');
      } else {
        this.$message.error('复制失败');
      }
      document.body.removeChild(input);
    }
  }
});
</script>

<style lang="scss" scoped>
.contact-list {
  color: #666;
  li {
    margin: 4%;
    padding: 10px 15px;
    border-radius: 4px;
    background: #fff;
  }
}
</style>
