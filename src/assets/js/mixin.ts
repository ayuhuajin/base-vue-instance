import Vue from 'vue';
import timeFormate from '@/assets/js/utils/timeFormate';
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
    },
    // 时间格式化
    dateFormate(type: string, date: any) {
      return (timeFormate as any)[type](date);
    }
  }
});
