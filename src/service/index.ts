import XGRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import localeCache from '@/utils/cache'

const xgRequest = new XGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //这样做的好处是：每个XGRequest都可以有不同的配置，包括拦截器的配置
  interceptor: {
    requestInterceptor: (config) => {
      const token = localeCache.getCache('token')
      if (token) {
        config!.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return Promise.reject(err)
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return Promise.reject(err)
    }
  }
})
export default xgRequest
