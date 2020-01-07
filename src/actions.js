import { ADD_LIST, DELETE_LIST, ADD_ITEM, ADD_ALL, SAVE } from './actionTypes'
// 添加
const addList = () => ({ type: ADD_LIST })
// 删除
const deleteList = id => ({ type: DELETE_LIST, id })
// item +
const addItem = id => ({ type: ADD_ITEM, id })
// item +
const addAll = id => ({ type: ADD_ALL })
// 保存
const save = () => ({ type: SAVE })
// 导出
export { addList, deleteList, addItem, addAll, save }
