import { combineReducers } from 'redux'
import {
  INCREMENT,
  DECREMENT
} from './actions'

function breakTime(state = 5, action) {
  switch (action.type) {
    case INCREMENT:
      return state++
    case DECREMENT:
      return state--
    default:
      return state
  }
}

function sessionTime(state = 25, action) {
  switch(action.type) {
    case INCREMENT:
      return state++
    case DECREMENT:
      return state--
    default:
      return state
  }
}

const changeTime = combineReducers({
  breakTime, sessionTime
})

export default changeTime
