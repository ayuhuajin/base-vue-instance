<template>
  <div>
    <div class="footer">Copyright © 2018-2020 All Rights Reserved.</div>
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
  line-height: 40px;
  color: #666;
  font-size: 14px;
  text-align: center;
  background: #fff;
}
</style>
