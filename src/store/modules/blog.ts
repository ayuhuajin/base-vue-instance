import root from '@/store/root.ts';
import http from '@/services/http.ts';
let ip = 'http://10.70.1.11:12306';
// let ip = 'http://api.wsinghai.com';
export default root.registerModule('blog', {
  actions: {
    //获取所有文章分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get(
        `${ip}/categoryList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}`
      );
      console.log(result);
      return result.data;
    },
    //获取所有博客
    async getAllBlog({ commit }, payload) {
      let result = await http.get(
        `${ip}/blogList?pageSize=${payload.pageSize}&pageNum=${payload.pageNumber}&name=${payload.name}`
      );
      return result.data;
    },
    // 添加博客
    async addBlog({ commit }, payload) {
      let result = await http.post(`${ip}/addBlog`, payload);
      return result.data;
    }
  }
});
