import root from '@/store/root.ts';
import http from '@/services/http.ts';
export default root.registerModule('blog', {
  actions: {
    //获取所有文章分类1
    async getAllCategory({ commit }, payload) {
      let result = await http.get(
        `/categoryList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}`
      );
      return result.data;
    },
    //获取所有博客
    async getAllBlog({ commit }, payload) {
      let result = await http.get(
        `/blogList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}&categoryId=${
          payload.categoryId
        }`
      );
      return result.data;
    },
    //界面展示获取所有博客
    async getBlogList({ commit }, payload) {
      let result = await http.get(
        `/getBlogList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}&categoryId=${
          payload.categoryId
        }`
      );
      return result.data;
    },
    // 添加博客
    async addBlog({ commit }, payload) {
      let result = await http.post(`/addBlog`, payload);
      return result.data;
    },
    // 删除博客
    async delBlog({ commit }, payload) {
      let result = await http.post(`/delBlog`, payload);
      return result.data;
    },
    // 编辑博客
    async updateBlog({ commit }, payload) {
      let result = await http.post(`/updateBlog`, payload);
      return result.data;
    },
    // 获取博客视图
    async blogView({ commit }, payload) {
      let result = await http.get(`/blogView?id=${payload}`);
      return result.data;
    },
    // 界面展示获取博客视图
    async getBlogView({ commit }, payload) {
      let result = await http.get(`/getBlogView?id=${payload}`);
      return result.data;
    }
  }
});
