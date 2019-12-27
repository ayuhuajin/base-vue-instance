import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      cname: '嗨前端'
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 公共提示组件
    showToast(type: string, msg: string) {
      this.$message({
        type: type,
        message: msg
      });
    }
  }
});
