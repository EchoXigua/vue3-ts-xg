import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/loign/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    //不是登录页面的话 查看是否有token
    const token = localCache.getCache('token')
    if (!token) {
      //没有token 跳转去登录
      return '/login'
    }
  }
})

export default router
