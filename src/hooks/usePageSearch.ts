import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const reset = () => {
    pageContentRef.value?.getList()
  }

  const query = (queryInfo: any) => {
    pageContentRef.value?.getList(queryInfo)
    console.log(queryInfo)
  }
  return [pageContentRef, reset, query]
}
