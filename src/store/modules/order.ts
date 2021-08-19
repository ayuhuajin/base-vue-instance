import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('shop', {
  actions: {
    //获取所有商品
    async getOrderList({ commit }, payload) {
      let result = await http.get(`/order/orderList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加订单
    async addOrder({ commit }, payload) {
      let result = await http.post(`/order/addOrder`, payload);
      return result.data;
    },
    // 删除订单
    async delOrder({ commit }, payload) {
      let result = await http.post(`/order/delOrder`, payload);
      return result.data;
    },
    // 查询订单
    async queryOrderById({ commit }, payload) {
      let result = await http.get(`/order/queryOrderById?${qs.stringify(payload)}`);
      return result.data;
    }
  }
});
