import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('company', {
  actions: {
    //获取所有商品
    // async getAllCompany({ commit }, payload) {
    //   let result = await http.get(`/company/companyList?${qs.stringify(payload)}`);
    //   return result.data;
    // },
    //界面展示获取所有博客
    async getCompanyList({ commit }, payload) {
      let result = await http.get(`/company/getCompanyList?${qs.stringify(payload)}`);
      return result.data;
    }
    // // 添加商品
    // async addCompany({ commit }, payload) {
    //   let result = await http.post(`/company/addCompany`, payload);
    //   return result.data;
    // },
    // // 删除商品
    // async delCompany({ commit }, payload) {
    //   let result = await http.post(`/company/delCompany`, payload);
    //   return result.data;
    // },
    // // 编辑商品
    // async updateCompany({ commit }, payload) {
    //   let result = await http.post(`/company/updateCompany`, payload);
    //   return result.data;
    // },
    // // 获取商品详情
    // async CompanyView({ commit }, payload) {
    //   let result = await http.get(`/company/CompanyView?id=${payload}`);
    //   return result.data;
    // },
    // // 获取商品详情
    // async getCompanyByIdSecret({ commit }, payload) {
    //   let result = await http.get(`/company/getcompanyView?${qs.stringify(payload)}`);
    //   return result.data;
    // }
  }
});
