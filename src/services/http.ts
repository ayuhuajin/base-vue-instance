import axios from 'axios';
import url from '@/services/url.ts';
// import router from 'vue-router';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = url.baseApi; //定义基础baseURl
console.log(url.baseApi);
//设置axios为form-data
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
// axios.defaults.withCredentials = true; // 是否启用cookie
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
});
//http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response.status == 401) {
      window.location.href = '/login';
      // router.replace({
      //   //跳转到登录页面
      //   path: 'login',
      //   query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      // });
      return Promise.reject(error);
    }
  }
);
export default axios;
