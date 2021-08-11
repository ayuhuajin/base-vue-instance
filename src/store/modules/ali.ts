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
    // 新建订单
    async createAliOrder({ commit }, payload) {
      let result = await http.post(`/aliPay/createOrder`, payload);
      return result;
    },
    // 查询订单
    async queryOrder({ commit }, payload) {
      let result = await http.get(`/ali/queryOrder?id=${payload}`);
      return result;
    },
    // 新建H5付款订单
    async createH5Order({ commit }, payload) {
      let result = await http.post(`/ali/createH5Order`, payload);
      return result;
    },
    // 撤销订单
    async revokeOrder({ commit }, payload) {
      console.log(234234);

      let result = await http.post(`/ali/revokeOrder`, payload);
      return result;
    },
    // 退款
    async refundOrder({ commit }, payload) {
      let result = await http.post(`/ali/refundOrder`, payload);
      return result;
    }
  }
});
