<template>
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

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FHeader',
  data() {
    return {
      title: 'Hello world'
    };
  },
  mounted() {},
  methods: {}
});
</script>
