import root from '@/store/root.ts';
import http from '@/services/http.ts';
let ip = 'http://10.70.1.11:12306';
export default root.registerModule('index', {
  actions: {
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get(`${ip}/categoryList`);
      return result.data;
    },
    async addCategory({ commit }, payload) {
      let result = await http.post(`${ip}/addCategory`, payload);
      return result.data;
    },
    async delCategory({ commit }, payload) {
      let result = await http.post(`${ip}/delCategory`, payload);
      return result.data;
    }
  }
});
