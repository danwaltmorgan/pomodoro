import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'

import store from './redux/store'
import { incCreator, decCreator, resetCreator, playCreator, tickCreator, updateCreator, changeTimeCreator } from './redux/store'
import App from './components/App'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (length) => {
      dispatch(incCreator(length))
    },
    decrement: (length) => {
      dispatch(decCreator(length))
    },
    reset: () => {
      dispatch(resetCreator())
    },
    togglePlay: () => {
      dispatch(playCreator())
    },
    tick: () => {
      dispatch(tickCreator())
    },
    update: () => {
      dispatch(updateCreator())
    },
    change: () => {
      dispatch(changeTimeCreator())
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
