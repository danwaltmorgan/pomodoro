import React from 'react'
import beep from "./audio/button-2.wav"


class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.togglePlay = this.togglePlay.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  timer = 0;

  componentDidUpdate(prevProps) {
    if (this.props.session !== prevProps.session) {
      this.props.update()
    }
    if (this.props.time === 0){
      this.handleAudio()
    }
  }


  togglePlay() {
    this.props.togglePlay()
    this.handlePlay()
  }


  handlePlay() {
    clearInterval(this.timer)
    if (!this.props.play) {
      this.timer = setInterval(this.props.tick, 1000)
    }
    if (this.props.play) {
      clearInterval(this.timer)
    }
  }

  handleReset() {
    clearInterval(this.timer)
    this.props.reset()
    // this.handleAudio()
    let audio = document.getElementById("beep")
    if (!audio.paused) {
      audio.pause()
      audio.currentTime = 0;
    }
  }

  handleAudio() {
    let audio = document.getElementById("beep")
      audio.play()
  }

  render() {
    let minutes = Math.floor(this.props.time / 60)
    let seconds = Math.floor(this.props.time % 60)

    let label = this.props.current.replace(/^./, this.props.current[0].toUpperCase())

    return(
      <div className="container">
        <h3 id="timer-label">{label}</h3>
        <h4 id="time-left" className="numbers">
          {((minutes < 10) ? ("0" + minutes): minutes)
            + ":" + ((seconds < 10) ? ("0" + seconds) : seconds)}
        </h4>
        <div className="flex-container">
          <button
            id="start_stop"
            onClick={this.togglePlay}
            >{this.props.button}</button>
          <button
            id="reset"
            onClick={this.handleReset}>RESET</button>
        </div>
        <audio id="beep" src={beep}>
        </audio>
      </div>
    )
  }
}

export default Clock
