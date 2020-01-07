import { ADD_LIST, DELETE_LIST, ADD_ITEM, ADD_ALL, SAVE } from './actionTypes'
let reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1

      return [...state, { id, number: 0 }]
    case DELETE_LIST:
      return state.filter(item => item.id !== action.id)
    case ADD_ITEM:
      let list = state.find(item => item.id === action.id)
      list.number = list.number + 1
      return [...state]
    case ADD_ALL:
      state.forEach(item => (item.number = item.number + 1))
      return [...state]
    case SAVE:
      console.log(state)
      localStorage.setItem('jisuanqi', JSON.stringify(state))
      return [...state]
    default:
      return state
  }
}
export default reducer
