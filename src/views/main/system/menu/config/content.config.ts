const propList = [
  { prop: 'name', label: '菜单名称', minWidth: '100' },
  { prop: 'type', label: '类型', minWidth: '80' },
  { prop: 'url', label: '菜单url', minWidth: '100' },
  { prop: 'icon', label: '菜单icon', minWidth: '100' },
  { prop: 'permission', label: '按钮权限', minWidth: '100' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '236',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '236',
    slotName: 'updateAt'
  },
  { label: '操作', minWidth: '150', slotName: 'action' }
]

export const contentTableConfig = {
  title: '菜单列表',
  propList,
  showIndexColumn: false,
  showSelectionColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
