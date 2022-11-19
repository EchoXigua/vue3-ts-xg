import xgRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return xgRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return xgRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return xgRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return xgRequest.patch<IDataType>({
    url,
    data: editData
  })
}
