import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('tools', {
  actions: {
    //获取所有文章分类1
    async getAllCategory({ commit }, payload) {
      let result = await http.get(`/tools/categoryList?${qs.stringify(payload)}`);
      return result.data;
    },
    //获取所有博客
    async getAllBlog({ commit }, payload) {
      let result = await http.get(`/tools/blogList?${qs.stringify(payload)}`);
      return result.data;
    },
    //界面展示获取所有博客
    async getBlogList({ commit }, payload) {
      let result = await http.get(`/tools/getBlogList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加博客
    async addBlog({ commit }, payload) {
      let result = await http.post(`/tools/addBlog`, payload);
      return result.data;
    },
    // 删除博客
    async delBlog({ commit }, payload) {
      let result = await http.post(`/tools/delBlog`, payload);
      return result.data;
    },
    // 编辑博客
    async updateBlog({ commit }, payload) {
      let result = await http.post(`/tools/updateBlog`, payload);
      return result.data;
    },
    // 获取博客视图
    async blogView({ commit }, payload) {
      let result = await http.get(`/tools/blogView?id=${payload}`);
      return result.data;
    },
    // 界面展示获取博客视图
    async getBlogView({ commit }, payload) {
      let result = await http.get(`/tools/getBlogView?id=${payload}`);
      return result.data;
    }
  }
});
