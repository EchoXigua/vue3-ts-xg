import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import xgRequest from './service'
import App from './App.vue'

import 'normalize.css'
import './assets/css/base.less'
import router from './router/index'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
console.log(process.env.VUE_APP_TEST)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

xgRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
