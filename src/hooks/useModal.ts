import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void
export function usePageModal(newFn?: CallbackFn, editFn?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const create = () => {
    //让弹窗显示, 断言了
    pageModalRef.value!.dialogVisible = true
    defaultInfo.value = {} //清空数据
    newFn && newFn()
  }

  const edit = (item: any) => {
    //让弹窗显示
    pageModalRef.value!.dialogVisible = true
    defaultInfo.value = { ...item } //浅拷贝
    editFn && editFn()
  }

  return [pageModalRef, defaultInfo, create, edit]
}
