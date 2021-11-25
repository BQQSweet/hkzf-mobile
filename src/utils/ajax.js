import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 6000,
});

//请求错误处理函数
const err = (error) => {
    if (error.response) {
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }

    return Promise.reject(error);
};
//请求拦截器
request.interceptors.request.use((config) => {
    return config;
}, err);

//接收拦截器
request.interceptors.response.use((response) => {
    const res = response.data;
    if (res.status !== 0 && res.status !== 200) {
        console.log(res.message || res.msg);
        if (res.status === 401 || res.status === 403 || res.status === 999) {
            console.log("请登录");
        }
        return Promise.reject([res, null]);
    } else {
        return [null, res];
    }
}, err);
export default request;
