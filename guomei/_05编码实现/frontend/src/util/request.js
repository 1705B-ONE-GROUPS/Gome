import axios from "axios";

// authorization

const request = axios.create({
  timeout: 5000,
  baseURL:"/api"
});
//请求超时 如何撤回请求？

//拦截请求
request.interceptors.request.use(
  config => {
    if (config.headers && !config.headers.authorization) {
      config.headers.authorization = token;
    }
    return config; //没有这个return ts会抛错  神奇不神奇？
  },
  error => {
    return Promise.reject(error);
  }
);

//拦截响应
request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // switch (error.response.status) {
    //     case 401:
    //         "ui库提示框".error(error.response.data.msg, 3, () => {
    //             window.location.href = "/user/login";
    //         });

    //         break;
    //     default:
    //         break;
    // }
    return Promise.reject(error);
  }
);

export default request;