import { createStore } from 'redux'

const INC = "INC"
const DEC = "DEC"

export const incCreator = (length) => {
  return {
    type: INC,
    time: length
  }
}
export const decCreator = (length) => {
  return {
    type: DEC,
    time: length
  }
}

const defaultState = {
  break: 5,
  session: 25,
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INC:
      if (state[action.time] < 60) {
        return Object.assign({}, state, {
          [action.time]: state[action.time] + 1
        })
      } else return state

    case DEC:
    if (state[action.time] > 1) {
      return Object.assign({}, state, {
        [action.time]: state[action.time] - 1
      })
    } else {
      return state
    }
    default:
      return state
  }
}

const store = createStore(reducer)


store.subscribe(() => {
  console.log("Store Updated", store.getState())
})





export default store
