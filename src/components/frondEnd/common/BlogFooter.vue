<template>
  <div>
    <div class="footer">版权所有:1236546546545</div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BlogFooter',
  data() {
    return {
      tit: '底部'
    };
  },
  mounted() {},
  methods: {}
});
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 60px;
  color: #666;
  font-size: 16px;
  text-align: center;
  background: #fff;
}
</style>
