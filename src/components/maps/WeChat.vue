<template>
  <div class="we-chat">
    <ul class="list">
      <li v-for="(item, index) in chatList" :key="index">
        <span @click="addFriend(item)">{{ item.wechat }}</span>
        <a href="weixin://contacts/profile/sisixiaobai">sisixiaobai</a>
        <a href="weixin://addfriend/sisixiaobai">微江门KWON</a>
        <a href="http://weixin.qq.com/r/ykzexmzEPzFArSil9xnY">kkk</a>
        <a href="weixin://profile/gh_34bd692a9835">ggg</a>
        <a href="weixin://qr/gh_34bd692a9835">jjj</a>
        <a href="https://wxaurl.cn/ApS3VBKkA6a">lll</a>
      </li>
    </ul>
    <div @click="jumpAccount">视觉好物</div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BdMap',
  data() {
    return {
      chatList: [
        {
          name: '1111',
          phone: '18859067063',
          wechat: '18859067063'
        },
        {
          name: '2222',
          phone: '18859067063',
          wechat: '12345'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 跳转微信公众号 关注页
    jumpAccount() {
      var ua = window.navigator.userAgent.toLowerCase();
      console.log(ua, 23234);
      //通过正则表达式匹配ua中是否含有MicroMessenger字符串
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        window.location.href =
          'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIxMDYyOTkxNQ==#wechat_redirect';
        return true;
      } else {
        this.$message.success('请在微信打开哦');
      }
    },
    // 加微信好友
    addFriend(item) {
      console.log(item, 7878);
      this.copyUrl(item.wechat);
      window.location.href = 'weixin://';
      // alert(333)
      //  window.location.href='weixin://profile/gh_34bd692a9835';
      //  window.location.href='weixin://contacts/profile/sisixiaobai';
      //  window.location.href='weixin://qr/gh_34bd692a9835';
    },
    // 复制方法
    copyUrl(text) {
      let input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);

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
.we-chat {
  .list {
    height: 300px;
    overflow: auto;
    font-size: 18px;
  }
}
</style>
