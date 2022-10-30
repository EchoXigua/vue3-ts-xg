import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//这里定义一个拦截器的接口，可以从外部获取拦截器的配置，从而不写死，增强扩展
export interface XGRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
//将AxiosRequestConfig进行扩展，加入拦截器配置
export interface XGRequestConfig extends AxiosRequestConfig {
  interceptor?: XGRequestInterceptors
}
