import root from '@/store/root.ts';
import http from '@/services/http.ts';
export default root.registerModule('index', {
  actions: {
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.post('http://scwdt.nxin.com/api/Account/Login');
      return result.data;
    }
  }
});
