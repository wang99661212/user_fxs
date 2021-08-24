import axios from 'axios'

// 设置axios的基地址【面试题】
// 每次diaoy个接口时都要写上完整的地址，每个接口的地址前面部分是相同的，on
// 接口地址有相同的部分，我们要把相同的部分提取出设置一下，后面调用接口就不需要写相同的部分

// axios.defaults.baseURL="相同的地址"
axios.defaults.baseURL=""

// 添加请求拦截器----（设置请求头，传递token）
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // let token = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).token:""
    // // console.log(token);
    // // 配置   头(英文意思:头部)   token(英文意思:授权/认可/批准)
    // config.headers.Authorization = token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器---处理共性的错误统一做处理
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



//   导出
export default axios;