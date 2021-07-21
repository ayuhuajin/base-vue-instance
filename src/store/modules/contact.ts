import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('shop', {
  actions: {
    //获取联系人列表
    async getContactList({ commit }, payload) {
      let result = await http.get(`/contact/contactList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加联系人
    async addContact({ commit }, payload) {
      let result = await http.post(`/contact/addContact`, payload);
      return result.data;
    },
    // 删除联系人
    async delContact({ commit }, payload) {
      let result = await http.post(`/contact/delContact`, payload);
      return result.data;
    },
    // 编辑联系人
    async updateContact({ commit }, payload) {
      let result = await http.post(`/contact/updateContact`, payload);
      return result.data;
    }
  }
});
