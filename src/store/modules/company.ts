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
      let result = await http.post(`/company/getCompanyList?${qs.stringify(payload)}`, payload);
      return result.data;
    },
    // 添加商品
    async addCompany({ commit }, payload) {
      let result = await http.post(`/company/addCompany`, payload);
      return result.data;
    },
    // 删除商品
    async delCompany({ commit }, payload) {
      let result = await http.post(`/company/delCompany`, payload);
      return result.data;
    },
    // 编辑公司
    async updateCompany({ commit }, payload) {
      let result = await http.post(`/company/updateCompany`, payload);
      return result.data;
    },
    // 获取公司详情
    async CompanyView({ commit }, payload) {
      let result = await http.get(`/company/CompanyView?id=${payload}`);
      return result.data;
    },
    // 获取邮件有效性
    async getEmailVertify({ commit }, payload) {
      let result = await http.get(`https://api.mail-verifier.xyz/?${qs.stringify(payload)}`);
      return result.data;
    },
    // 批量设置邮箱验证
    async vertifyEmailBatch({ commit }, payload) {
      let result = await http.post(`/company/updateBatch`, payload);
      return result.data;
    },
    // 邮箱是否有效
    async updateSwitch({ commit }, payload) {
      let result = await http.post(`/company/updateSwitch`, payload);
      return result.data;
    },
    // 邮箱是否有效
    async vertifyEmailByDetective({ commit }, payload) {
      let result = await http.post(`/company/vertifyEmailByDetective`, payload);
      return result.data;
    }
  }
});
