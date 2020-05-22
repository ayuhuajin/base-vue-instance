import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('demo', {
  actions: {
    // 获取微信code
    async getWxToken({ commit }, payload) {
      let result = await http.get(`/wxtoken?code=${payload}`);
      return result;
    },
    async createWxMenu({ commit }, payload) {
      let result = await http.post(`/createWxMenu`);
      return result;
    }
  }
});
