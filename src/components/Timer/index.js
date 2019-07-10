import React from "react";
import styled from "styled-components";

const TimerWrapper = styled.h1`
  position: relative;
  width: 300px;
  color: #f05550;
`;

const Button = styled.button`
  position: relative;
  width: 300px;
  background-color: #f05550;
  border: 2px solid #e04540;
  border-radius: 1em;
  color: white;
  font-size: 1em;
  padding: .25em;
  margin-top: .5em;
  cursor: pointer;
  :hover {
    background-color: #ff6560;
  }
`;

const minutes = seconds => Math.floor(seconds / 60) + ' : ' + (seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60);

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
      intervalId: '',
      play: false
    };
  }

  start = () => this.state.seconds>0?this.setState({ seconds: this.state.seconds - 1 }):this.pause();

  play() {
    let intervalId = setInterval(this.start, 1000)
    this.setState({ intervalId: intervalId, play: true })
  }

  pause() {
    clearInterval(this.state.intervalId)
    this.setState({ play: false })
  }

  render() {
    return (
      <TimerWrapper>
        {minutes(this.state.seconds)}
        <Button onClick={() => this.play()} hidden={this.state.play ? true : false} >start</Button>
        <Button onClick={() => this.pause()} hidden={this.state.play ? false : true} >stop</Button>
      </TimerWrapper>
    );
  }
};
export default Timer;
