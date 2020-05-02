import React from 'react'

class Time extends React.Component {
  render() {
    return(
      <div id="time-container">
        <h2 id={this.props.id}>{this.props.text}</h2>
        <div className="row">
          <div className="column">
            <h3 id={this.props.lengthLabel}
            className="numbers">{this.props.time}</h3>
          </div>
          <div className="column">
            <button
              id={this.props.inc}
              onClick={this.props.incFunc}
              > + </button>
              <button
              id={this.props.dec}
              onClick={this.props.decFunc}
              > - </button>
            </div>
          </div>
      </div>
    )
  }
}

export default Time
