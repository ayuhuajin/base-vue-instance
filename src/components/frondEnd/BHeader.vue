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
  methods: {}
});
</script>
<style lang="scss" scoped>
.nodata {
  display: none;
}
</style>
