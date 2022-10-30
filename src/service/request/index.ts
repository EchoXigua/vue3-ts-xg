import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { XGRequestConfig, XGRequestInterceptors } from './type'

export default class XGRequest {
  instance: AxiosInstance
  interceptor?: XGRequestInterceptors
  constructor(config: XGRequestConfig) {
    //这样做可以让每次传入不同的配置  （请求路径前缀）
    this.instance = axios.create(config)
    //传入的拦截器配置
    this.interceptor = config.interceptor

    //配置请求拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor, //可选链
      this.interceptor?.requestInterceptorCatch
    )
    //配置响应拦截器
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )

    //给所有实例添加统一的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //直接将真实数据返回
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
  /*因为在拦截器当中从res取出来data，返回，
    所以this.instance.request(config).then(res) 这里的res就不是AxiosResponse了
    这个类型可以根据我们发请求传入的类型来决定
    request<T> 将传入的类型，给到 this.instance.request，这样then(res)的类型就是T类型了
    this.instance.request<any, T> 接受两个类型，第二个类型才是影响res的类型
  */
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve) => {
      this.instance.request<any, T>(config).then((res) => {
        resolve(res)
      })
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
