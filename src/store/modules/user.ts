import root from '@/store/root.ts';
import http from '@/services/http.ts';
let ip = 'http://10.70.1.11:12306';
// let ip = 'http://192.168.99.113:12306';
// let ip = 'http://api.wsinghai.com';
export default root.registerModule('user', {
  actions: {
    async login({ commit }, payload) {
      let result = await http.post(`${ip}/login`, payload);
      return result;
    },
    //获取所有用户
    async getAllUser({ commit }, payload) {
      let result = await http.get(`${ip}/userList`);
      return result.data;
    },
    // 添加用户
    async addUser({ commit }, payload) {
      let result = await http.post(`${ip}/addUser`, payload);
      return result.data;
    },
    // 删除用户
    async delUser({ commit }, payload) {
      let result = await http.post(`${ip}/delUser`, payload);
      return result.data;
    },
    // 修改账号密码
    async updateUser({ commit }, payload) {
      let result = await http.post(`${ip}/updateUser`, payload);
      return result.data;
    },
    //根据id 获取用户视图
    async userView({ commit }, payload) {
      let result = await http.get(`${ip}/userView?id=${payload.id}`);
      return result.data;
    },
    async UserSearch({ commit }, payload) {
      let result = await http.get(`${ip}/UserSearch?name=${payload.name}`);
      return result.data;
    }
  }
});
