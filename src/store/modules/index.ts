import root from '@/store/root.ts';
import http from '@/services/http.ts';
export default root.registerModule('index', {
  actions: {
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get('http://192.168.99.196:12306/categoryList');
      return result.data;
    },
    async addCategory({ commit }, payload) {
      let result = await http.post('http://192.168.99.196:12306/addCategory', payload);
      return result.data;
    }
  }
});
