import axios from 'axios';
import url from '@/services/url.ts';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = url.baseApi; //定义基础baseURl
// axios.defaults.withCredentials = true; // 是否启用cookie
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response.status == 401) {
      window.location.href = '/login';
      return Promise.reject(error);
    }
  }
);
export default axios;
