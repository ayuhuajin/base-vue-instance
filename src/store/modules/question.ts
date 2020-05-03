import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('question', {
  actions: {
    //获取所有试题
    async getAllQuestion({ commit }, payload) {
      let result = await http.get(`/question/questionList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加试题
    async addQuestion({ commit }, payload) {
      let result = await http.post(`/question/addQuestion`, payload);
      return result.data;
    },
    // 删除试题
    async delQuestion({ commit }, payload) {
      let result = await http.post(`/question/delQuestion`, payload);
      return result.data;
    },
    //获取试卷详情
    async examDetail({ commit }, payload) {
      let result = await http.get(`/exam/examDetail?${qs.stringify(payload)}`);
      return result.data;
    }
  }
});
