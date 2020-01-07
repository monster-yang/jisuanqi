import { createStore } from 'redux'
import reducer from './reducers'
let configStore = () => {
  let initialState = JSON.parse(localStorage.getItem('jisuanqi'))
  if (initialState === null) {
    initialState = []
  }

  let store = createStore(reducer, initialState)
  store.subscribe(() => {
    console.log('数据变化了', store.getState())
  })
  return store
}
export default configStore
