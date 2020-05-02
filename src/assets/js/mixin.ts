import Vue from 'vue';
import timeFormate from '@/assets/js/utils/timeFormate';
export default Vue.extend({
  data() {
    return {
      cname: '嗨前端',
      subjectList: [{ name: '前端', _id: 1 }],
      levelList: [{ name: '入门', _id: 1 }, { name: '一般', _id: 2 }, { name: '困难', _id: 3 }],
      options: [
        {
          value: 1,
          label: '单选题'
        },
        {
          value: 2,
          label: '多选题'
        },
        {
          value: 3,
          label: '问答题'
        }
      ]
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
