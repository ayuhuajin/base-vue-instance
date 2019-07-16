<template>
  <div>
    <template v-if="list.length != 0">
      <div v-highlight>
        <pre>
          <code>
            '+html+'
            import './plugins/element.js';
            import './plugins/echarts.js';
            import './plugins/video.js';
            import hljs from 'highlight.js';
            import 'highlight.js/styles/googlecode.css'; //样式文件
          </code>
        </pre>
      </div>
    </template>
    <no-data v-else class="nodata"></no-data>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NoData from '@/components/common/NoData.vue';
export default Vue.extend({
  name: 'FHeader',
  components: {
    NoData
  },
  data() {
    return {
      title: 'Hello world',
      list: [] as any
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = [{ name: 'aaaa' }];
    }, 500);
  },
  methods: {
    // 监听postmessage 传过来的事件
    monitorMessage() {
      window.addEventListener(
        'message',
        function(event) {
          console.log(111);
          console.log(event);
          // 通过origin属性判断消息来源地址
          if (event.origin == 'http://localhost:8081') {
            console.log(event.data);
            console.log(event.source);
          }
        },
        false
      );
    },
    // 对iframe 进行传递信息
    trans() {
      var iframe: any = document.getElementById('myFrame');
      var targetOrigin = 'http://10.70.1.21:8081/'; // 若写成'http://b.com/c/proxy.html'效果一样
      // 若写成'http://c.com'就不会执行postMessage了
      console.log(455445455451100);
      iframe.contentWindow.postMessage('data to send', targetOrigin);
    }
  }
});
</script>
<style lang="scss" scoped>
.nodata {
  display: none;
}
</style>
