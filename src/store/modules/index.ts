import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('index', {
  actions: {
    async login({ commit }, payload) {
      let result = await http.post(`/login`, payload);
      return result;
    },
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get(`/categoryList?${qs.stringify(payload)}`);
      return result.data;
    },
    //界面展示获取所有文章分类
    async getCategoryList({ commit }, payload) {
      let result = await http.get(`/getCategoryList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加分类
    async addCategory({ commit }, payload) {
      let result = await http.post(`/addCategory`, payload);
      return result.data;
    },
    // 删除分类
    async delCategory({ commit }, payload) {
      let result = await http.post(`/delCategory`, payload);
      return result.data;
    },
    // 修改分类

    async updateCategory({ commit }, payload) {
      let result = await http.post(`/updateCateGory`, payload);
      return result.data;
    },
    //根据id 获取视图
    async categoryView({ commit }, payload) {
      let result = await http.get(`/categoryView?id=${payload.id}`);
      return result.data;
    },
    async categorySearch({ commit }, payload) {
      let result = await http.get(`/categorySearch?name=${payload.name}`);
      return result.data;
    }
  }
});
