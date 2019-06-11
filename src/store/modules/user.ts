import root from '@/store/root.ts';
import http from '@/services/http.ts';
export default root.registerModule('user', {
  actions: {
    async login({ commit }, payload) {
      let result = await http.post(`/login`, payload);
      return result;
    },
    //获取所有用户
    async getAllUser({ commit }, payload) {
      let result = await http.get(`/userList`);
      return result.data;
    },
    // 添加用户
    async addUser({ commit }, payload) {
      let result = await http.post(`/addUser`, payload);
      return result.data;
    },
    // 删除用户
    async delUser({ commit }, payload) {
      let result = await http.post(`/delUser`, payload);
      return result.data;
    },
    // 修改账号密码
    async updateUser({ commit }, payload) {
      let result = await http.post(`/updateUser`, payload);
      return result.data;
    },
    //根据id 获取用户视图
    async userView({ commit }, payload) {
      let result = await http.get(`/userView?id=${payload.id}`);
      return result.data;
    },
    async UserSearch({ commit }, payload) {
      let result = await http.get(`/UserSearch?name=${payload.name}`);
      return result.data;
    }
  }
});
