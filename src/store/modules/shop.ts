import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('shop', {
  actions: {
    //获取所有商品
    async getAllShop({ commit }, payload) {
      let result = await http.get(`/shop/shopList?${qs.stringify(payload)}`);
      return result.data;
    },
    //界面展示获取所有博客
    async getShopList({ commit }, payload) {
      let result = await http.get(`/shop/getShopList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加商品
    async addShop({ commit }, payload) {
      let result = await http.post(`/shop/addShop`, payload);
      return result.data;
    },
    // 删除商品
    async delShop({ commit }, payload) {
      let result = await http.post(`/shop/delShop`, payload);
      return result.data;
    },
    // 编辑商品
    async updateShop({ commit }, payload) {
      let result = await http.post(`/shop/updateShop`, payload);
      return result.data;
    },
    // 获取商品详情
    async ShopView({ commit }, payload) {
      let result = await http.get(`/shop/ShopView?id=${payload}`);
      return result.data;
    },
    // 获取商品详情
    async getShopByIdSecret({ commit }, payload) {
      let result = await http.get(`/shop/getshopView?${qs.stringify(payload)}`);
      return result.data;
    }
  }
});
