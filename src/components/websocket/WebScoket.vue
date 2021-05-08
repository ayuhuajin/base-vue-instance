<template>
  <div class="web-socket">
    <input v-model="value" />
    <el-button @click="sendMes">发送</el-button>
    <div v-for="(item, index) in message" :key="index">{{ item }}</div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  name:'WebScoket',
  data(){
    return{
      value:111,
      ws:null,
      message:[]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    // 发送信息
    sendMes(){
      console.log('fasong');
      this.ws.send(this.value);
    },
    init(){
      var ws = new WebSocket("ws://10.123.61.14:11223");
      let that = this
      this.ws = ws
      this.ws.onopen = function(){that.ws.send("Test!4444"); };
      this.ws.onmessage = function(evt){console.log(evt.data,888);that.message.push(evt.data)};
      this.ws.onclose = function(evt){console.log(1111);};
      this.ws.onerror = function(evt){console.log(222);ws.close();};
      // console.log(333);
    }
  }
});
</script>

<style lang="scss" scoped>
.web-socket {
  color: #666;
}
</style>
