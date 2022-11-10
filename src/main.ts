import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import xgRequest from './service'
import App from './App.vue'

import 'normalize.css'
import './assets/css/base.less'
import router from './router/index'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
app.use(store)
app.use(ElementPlus)
setupStore()

app.use(router)

/**
 * 这里要说一个问题，就是刷新页面之后跳转notFound页面的原因：
 * 
 * 之前的代码是这样执行的
 *  app.use(router)
    app.use(store)
    setupStore()
 * 
 * 在app.use(router)的时候，去执行了install的方法，将router安装到app上面。
 * 这个时候会获取当前path (这是一个同步的操作)，然后再去router.routes里面去匹配
 * 和当前path 对应的组件，。但是这个时候，我们还没有获取到router (动态路由)。
 * 所以是匹配不上，to里面的name 是nouFound
 * 
 * 然后再执行app.use(store)，这个时候去动态获取了路由，可以拿到
 * 
 * 路由守卫是回调函数(to) 里面的to已经再router匹配的时候就处理好了，
 * 
 * 所以代码顺序有问题，应该先注册完store  再去注册router
 */

app.mount('#app')
console.log(process.env.VUE_APP_TEST)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// xgRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
