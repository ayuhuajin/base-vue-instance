import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('ali', {
  actions: {
    // 新建订单
    async createOrder({ commit }, payload) {
      let result = await http.post(`/ali/createOrder`, payload);
      return result;
    },
    // 查询订单
    async queryOrder({ commit }, payload) {
      let result = await http.get(`/ali/queryOrder?id=${payload}`);
      return result;
    }
  }
});
