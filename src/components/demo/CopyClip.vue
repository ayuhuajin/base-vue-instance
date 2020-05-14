<template>
  <div class="copy-clip">
    <div @click="copy()">复制1</div>
    <div @click="copy2()">复制2</div>
    <button type="button" v-clipboard:copy="getMessage" v-clipboard:success="onCopy" v-clipboard:error="onError">
      Copy!
    </button>

    <button type="button" @click="doCopy">Copy!</button>
  </div>
</template>

<script>
import Vue from 'vue';
import tools from '@/store/modules/tools';
export default Vue.extend({
  data() {
    return {
      message: ''
    };
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      let result = await tools.dispatch('getAllToolView', {
        pageSize: 10000,
        pageNumber: 1
      });
      this.toolData = result.data;
      console.log(this.toolData[0]._id, 99);
      return this.toolData[0]._id;
    },
    dataProcessing(val) {
      // this.message = this.message + ' ' + val;
      setTimeout(() => {
        this.message = 'dsdfsd';
      }, 200);
    },
    async doCopy(val) {
      // this.dataProcessing(val);
      // let aa = await this.init();
      let result = await tools.dispatch('getAllToolView', {
        pageSize: 10000,
        pageNumber: 1
      });
      let aa = result.data[0].title;
      console.log(aa, 890);
      this.$copyText(aa).then(
        function(e) {
          console.log(e);
        },
        function(e) {
          alert('Can not copy');
          console.log(e);
        }
      );
    },
    onCopy: function(e) {
      alert('You just copied: ' + e.text);
    },
    onError: function(e) {
      alert('Failed to copy texts');
    },
    getMessage() {
      // setTimeout(() => {
      //   return '2342343';
      // }, 200);
      return 333;
    },
    //复制文本方法
    copyAddress(text) {
      console.log(666);
      var input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      const result = document.execCommand('Copy');
      if (result === 'unsuccessful') {
        console.error('Failed to copy text.');
      }
      document.body.removeChild(input);

      console.log('复制成功');
      // return text;
    },
    copy() {
      let aa = 'ddd';
      setTimeout(() => {
        console.log(24);
        aa = '';
        this.copyAddress('https://ykt100.at.baijiayun.com/web/room/prepare?room_id=20051498447626&code=ud8ja9');
      }, 200);
    },
    copy2() {
      let aa = 'aa';
      setTimeout(() => {
        console.log(23);
        aa = '';
        this.copyAddress('https://ykt100.at.baijiayun.com/web/room/prepare?room_id=20051498447626&code=AAAAA');
      }, 200);
    }
  }
});
</script>
