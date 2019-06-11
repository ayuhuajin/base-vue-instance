import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
// let ip = 'http://10.70.1.11:12306';
let ip = 'http://192.168.99.113:12306';
// let ip = 'http://api.wsinghai.com';
export default root.registerModule('index', {
  actions: {
    async login({ commit }, payload) {
      let result = await http.post(`${ip}/login`, payload);
      return result;
    },
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get(
        `${ip}/categoryList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}`
      );
      return result.data;
    },
    // 添加分类
    async addCategory({ commit }, payload) {
      let result = await http.post(`${ip}/addCategory`, payload);
      return result.data;
    },
    // 删除分类
    async delCategory({ commit }, payload) {
      let result = await http.post(`${ip}/delCategory`, payload);
      return result.data;
    },
    // 修改分类

    async updateCategory({ commit }, payload) {
      let result = await http.post(`${ip}/updateCateGory`, payload);
      return result.data;
    },
    //根据id 获取视图
    async categoryView({ commit }, payload) {
      let result = await http.get(`${ip}/categoryView?id=${payload.id}`);
      return result.data;
    },
    async categorySearch({ commit }, payload) {
      let result = await http.get(`${ip}/categorySearch?name=${payload.name}`);
      return result.data;
    }
  }
});
