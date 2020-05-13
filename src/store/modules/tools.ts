import root from '@/store/root.ts';
import http from '@/services/http.ts';
import qs from 'qs';
export default root.registerModule('tools', {
  actions: {
    //获取工具分类
    async getAllCategory({ commit }, payload) {
      let result = await http.get(`/tools/categoryList?${qs.stringify(payload)}`);
      return result.data;
    },
    //获取所有工具
    async getAllTool({ commit }, payload) {
      let result = await http.get(`/tools/toolList?${qs.stringify(payload)}`);
      return result.data;
    },
    //获取所有工具-前端
    async getAllToolView({ commit }, payload) {
      let result = await http.get(`/tools/getToolList?${qs.stringify(payload)}`);
      return result.data;
    },
    // 添加工具
    async addTool({ commit }, payload) {
      let result = await http.post(`/tools/addTool`, payload);
      return result.data;
    },
    // 删除工具
    async delTool({ commit }, payload) {
      let result = await http.post(`/tools/delTool`, payload);
      return result.data;
    },
    // 编辑工具
    async updateTool({ commit }, payload) {
      let result = await http.post(`/tools/updateTool`, payload);
      return result.data;
    },
    // 获取工具视图
    async toolView({ commit }, payload) {
      let result = await http.get(`/tools/toolView?id=${payload}`);
      return result.data;
    }
  }
});
