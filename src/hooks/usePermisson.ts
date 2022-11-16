import { useStore } from '@/store'
/**
 *
 * @param pageName     模块名
 * @param handleName   权限
 */
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === verifyPermission)
}
