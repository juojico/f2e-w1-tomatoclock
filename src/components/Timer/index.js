import React from 'react';
import styled from 'styled-components';
import TestTool from '../../components/TestTool';
import { Button } from '../Buttons';

const TimerWrapper = styled.h1`
  position: relative;
  width: 300px;
  color: #f05550;
`;

const minutes = seconds =>
  Math.floor(seconds / 60) +
  ' : ' +
  (seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60);

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
      intervalId: '',
      play: false,
      takeBreak: false
    };
  }

  start = () => {
    this.state.seconds > 0
      ? this.setState({ seconds: this.state.seconds - 1 })
      : this.state.takeBreak ? this.backWork() : this.done();
  };
  done = () => {
    const { onFinish } = this.props;
    this.pause();
    onFinish(true);
    this.takeBreak();
  };

  backWork() {
    this.setState({ seconds: 1500, takeBreak: false })
    this.pause();
    const { onFinish } = this.props;
    onFinish(false);
  }

  play() {
    let intervalId = setInterval(this.start, 1000);
    this.setState({ intervalId: intervalId, play: true });
  }

  pause() {
    clearInterval(this.state.intervalId);
    this.setState({ play: false });
  }
  setSeconds = seconds => () => {
    this.setState({ seconds });
  };

  takeBreak() {
    this.setState({ seconds: 300, takeBreak: true });
    console.log('takeBreak');
    this.play();
  }

  render() {
    return (
      <TimerWrapper>
        <TestTool
          onClick1={this.setSeconds(3)}
          onClick2={this.setSeconds(1500)}
        />
        {minutes(this.state.seconds)}
        <Button
          onClick={() => this.play()}
          hidden={this.state.play ? true : false}
        >
          start
        </Button>
        <Button
          onClick={() => this.pause()}
          hidden={this.state.play ? false : true}
        >
          stop
        </Button>
      </TimerWrapper>
    );
  }
}
export default Timer;
