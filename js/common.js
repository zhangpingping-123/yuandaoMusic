(function(Vue,axios){
    const Axios=axios.create({
        //1.配置域名
        baseURL:'https://apimusic.linweiqin.com',
        //请求时长
        timeout:10000,
    
    });
    //添加请求拦截
        //设置遮罩
    Axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        // console.log(config)
        app.isLoading = true; 
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
      //返回拦截器
      Axios.interceptors.response.use(function (response) {
        //只获取到数据中的data部分
        // console.log(response)
        app.isLoading = false;
        return response.data;
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });
      window.Axios = Axios;
})(Vue,axios)