import React from 'react'


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.session + ":00",
      session: this.props.session,
      break: this.props.break,
      play: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      time: props.session
    }
  }

  handlePlay() {
    if (!this.state.play) {
      
    }
  }


  render() {
    return(
      <div className="container">
        <h3 id="timer-label">Session</h3>
        <h4 id="time-left">{this.state.time}</h4>
        <div className="flex-container">
          <button
            id="start_stop"
            onClick={this.handlePlay}
            >Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    )
  }
}

export default Clock
