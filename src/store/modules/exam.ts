import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('exam', {
  actions: {
    //获取所有试卷
    async getAllExam({ commit }, payload) {
      let result = await http.get(`/exam/examList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加试卷
    async addExam({ commit }, payload) {
      let result = await http.post(`/exam/addExam`, payload);
      return result.data;
    },
    // 删除试卷
    async delExam({ commit }, payload) {
      let result = await http.post(`/exam/delExam`, payload);
      return result.data;
    },
    // 编辑试卷
    async updateBlog({ commit }, payload) {
      let result = await http.post(`/exam/updateExam`, payload);
      return result.data;
    },
    // 获取试卷
    async examView({ commit }, payload) {
      console.log(payload);
      let result = await http.get(`/exam/examView?id=${payload.id}`);
      return result.data;
    }
  }
});
