import xgRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return xgRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
