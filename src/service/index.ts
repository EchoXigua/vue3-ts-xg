import XGRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const xgRequest = new XGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //这样做的好处是：每个XGRequest都可以有不同的配置，包括拦截器的配置
  interceptor: {
    requestInterceptor: (config) => {
      // const token = ''
      // if(token){
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return Promise.reject(err)
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return Promise.reject(err)
    }
  }
})
export default xgRequest
