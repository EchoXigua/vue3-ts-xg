import { IBreadcrumb } from '@/base-ui/breadcrumb'
import menu from '@/router/main/system/menu/menu'
import { RouteRecordRaw } from 'vue-router'

//保存第一个菜单，在路由重定向的时候跳转到第一个菜单
let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  //webpack 提供的一个对象，context方法  webpack的环境
  //第一个参数为路径，第二个是否递归查找,第三个查找匹配到的文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //得到一个array 里面装着key
  routeFiles.keys().forEach((key) => {
    //key 为 ./analysis/dashboard/dashboard.ts
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  //2.根据菜单权限加载需要的routes
  //递归查找匹配的路由

  const recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == '2') {
        //二级路由
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          //保存第一个菜单
          firstMenu = menu
        }
      } else {
        recurseGetRoutes(menu.children)
      }
    }
  }
  recurseGetRoutes(userMenus)

  return routes
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: any[]
): any {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      //一级菜单，需要遍历到二级菜单
      //递归调用
      //这里调用 pathMapToMenu(menu.children ?? [], currentPath)
      //会有一个返回值

      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        //面包屑的处理，对地址栏路径
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type == 2 && menu.url == currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permission: string[] = []

  //递归 来处理权限
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 1 || menu.type == 2) {
        // 1 2  第一层 第二层
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type == 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permission
}

export function menuMapLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leafKeys
}

export { firstMenu }
