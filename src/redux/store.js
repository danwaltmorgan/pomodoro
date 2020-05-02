import { createStore } from 'redux'

const INC = "INC"
const DEC = "DEC"
const RESET = "RESET"
const TOGGLE_PLAY = "TOGGLE_PLAY"
const TICK = "TICK"
const UPDATE_TIME = "UPDATE_TIME"
const CHANGE_TIME_TYPE = "CHANGE_TIME_TYPE"

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
export const resetCreator = () => {
  return {
    type: RESET,
  }
}

export const playCreator = () => {
  return {
    type: TOGGLE_PLAY,
  }
}

export const tickCreator = () => {
  return {
    type: TICK,
  }
}

export const updateCreator = () => {
  return {
    type: UPDATE_TIME
  }
}

export const changeTimeCreator = () => {
  return {
    type: CHANGE_TIME_TYPE
  }
}



let defaultState = {
  break: 5,
  session: 25,
  play: false,
  time: 1500,
  current: "session",
  button: "START",
  changeIndicator: true
}

const reducer = (state = defaultState, action) => {
  // const time = state[state.current]
  switch (action.type) {
    case INC:
      if (state[action.time] < 60 &&
          state.play === false) {
        return Object.assign({}, state, {
          [action.time]: state[action.time] + 1
        })
      } else return state

    case DEC:
      if (state[action.time] > 1 &&
          state.play === false) {
        return Object.assign({}, state, {
          [action.time]: state[action.time] - 1
        })
      } else {
        return state
      }

    case TOGGLE_PLAY:
      let opposite = !state.play
      let button = opposite ? "STOP" : "START"
      return Object.assign({}, state, {play: opposite, button: button})

    case TICK:
      if (state.time < 1) {
        let indicator = !state.changeIndicator
        const change = indicator ? "session" : "break"
        return Object.assign({}, state,
          {current: change, changeIndicator: indicator, time: state[change] * 60})
      }
      let tick = state.time - 1
      return Object.assign({}, state, {time: tick})
      break

    case UPDATE_TIME:
      return Object.assign({}, state, {time: state[state.current] * 60})
      break


    case RESET:
      return defaultState

    default:
      return state
    }
  }



const store = createStore(reducer)


store.subscribe(() => {
  console.log("Store Updated", store.getState())
})

console.log(store.getState())





export default store
