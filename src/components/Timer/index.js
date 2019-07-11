import React from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons';
import TestTool from '../../components/TestTool';

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
      play: false
    };
  }

  start = () => {
    this.state.seconds > 0
      ? this.setState({ seconds: this.state.seconds - 1 })
      : this.done();
  };
  done = () => {
    const {onFinish} =this.props;
    this.pause();
    onFinish();
    this.takeBreak();
  };

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
    this.setState({ seconds: 300 });
    console.log('takeBreak');
    this.play('takeBreak');
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
