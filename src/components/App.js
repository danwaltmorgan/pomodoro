import React from 'react'
import Time from './Time'
import Clock from './Clock'
import '../styles/position.css'
import '../styles/style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleInc = this.handleInc.bind(this)
    this.handleDec = this.handleDec.bind(this)
  }

  handleInc(type) {
    return this.props.increment(type)
  }

  handleDec(type) {
    return this.props.decrement(type)
  }


  render() {
    return (
      <div>
        <div id="wrapper">
          <div className="flex-container">
            <Time
              id={"break-label"}
              text={"Break"}
              inc={"break-increment"}
              dec={"break-decrement"}
              time={this.props.break}
              lengthLabel={"break-length"}
              incFunc={() => this.handleInc("break")}
              decFunc={() => this.handleDec("break")}
            />
            <Time
              id={"session-label"}
              text={"Session"}
              inc={"session-increment"}
              dec={"session-decrement"}
              time={this.props.session}
              lengthLabel={"session-length"}
              incFunc={() => this.handleInc("session")}
              decFunc={() => this.handleDec("session")}
            />
          </div>
          <Clock
          session={this.props.session}
          break={this.props.break}/>
        </div>
      </div>
    )
  }
}

export default App
