import React from "react";
import styled from "styled-components";

const TimerWrapper = styled.h1`
  position: relative;
  width: 300px;
  color: #f05550;
`;

const minutes = seconds => Math.floor(seconds / 60) + ' : ' + (seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60);

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500
    };
  }

  start = () => {
    setInterval(() => this.setState({ seconds: this.state.seconds - 1 }), 1000)
  }

  render() {
    return (
      <TimerWrapper>
        <button onClick={this.start} >start</button>
        TOMATO {minutes(this.state.seconds)}
      </TimerWrapper>
    );
  }
};
export default Timer;
