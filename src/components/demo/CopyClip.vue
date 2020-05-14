<template>
  <div class="copy-clip">
    <div @click="copy()">复制1</div>
    <div @click="copy2()">复制2</div>
  </div>
</template>

<script>
import Vue from 'vue';
import ExcelDemo from '@/components/demo/ExcelDemo.vue';
export default Vue.extend({
  components: {
    ExcelDemo
  },
  methods:{
    //复制文本方法
    copyAddress(text) {
      console.log(666)
      var input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
      document.body.removeChild(input);
      console.log("复制成功");
      return text;
    },
    copy(){
      let aa = 'ddd'
      setTimeout(()=>{
        console.log(24)
        aa = ''
        this.copyAddress('https://ykt100.at.baijiayun.com/web/room/prepare?room_id=20051498447626&code=ud8ja9')
      },200)
    },
    copy2(){
      let aa = 'aa'
      setTimeout(()=>{
        console.log(23)
        aa = ''
        this.copyAddress('https://ykt100.at.baijiayun.com/web/room/prepare?room_id=20051498447626&code=AAAAA')
      },200)
    }
  }
});
</script>
