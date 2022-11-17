import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const create = () => {
    //让弹窗显示, 断言了
    pageModalRef.value!.dialogVisible = true
  }

  const edit = (item: any) => {
    //让弹窗显示
    pageModalRef.value!.dialogVisible = true
    console.log(item)
    defaultInfo.value = { ...item } //浅拷贝
  }

  return [pageModalRef, defaultInfo, create, edit]
}
