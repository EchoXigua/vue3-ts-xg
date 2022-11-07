import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loign/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [] //根据userMenu来决定
  },
  {
    path: '/:pathMatch(.*)*', //这里不太懂
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导航守卫
//可以在导航守卫里将userMenu添加进去
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
