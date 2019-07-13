import React from 'react';
import styled from 'styled-components';
import { FabButton } from '../Buttons';
import AniIcon from '../../components/Icons';

const TimerWrapper = styled.div`
  position: relative;
  width: 300px;
  color: #f05550;
`;

const TimerClock = styled.h1`
  position: relative;
  width: 100%;
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
      takeBreak: false,
      iconTypePlay: 'play',
      iconTypeDelete: 'delete',
      iconTypeStop: 'stop',
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
    this.setState({ seconds: 1500, takeBreak: false, iconTypeStop: 'stop' })
    this.pause();
    const { onFinish } = this.props;
    onFinish(false);
  }

  play() {
    let intervalId = setInterval(this.start, 1000);
    this.setState({ intervalId: intervalId, play: true, iconTypePlay: 'pause' });
  }

  pause() {
    clearInterval(this.state.intervalId);
    this.setState({ play: false, iconTypePlay: 'play' });
  }
  setSeconds = seconds => () => {
    this.setState({ seconds });
  };

  takeBreak() {
    this.setState({ seconds: 300, takeBreak: true, iconTypeStop: 'stop' });
    console.log('takeBreak');
    this.play();
  }

  onBtnClick() {
    this.state.play ? this.pause() : this.play();
  }

  onDeleteBtnClick() {
    console.log('onDeleteBtnClick');
  }

  onStopBtnClick() {
    this.state.iconTypeStop === 'stop' ? this.setState({ seconds: 0, iconTypeStop: 'restart' }) : this.setState({ seconds: this.state.takeBreak ? 300 : 1500, iconTypeStop: 'stop' });
  }

  render() {
    return (
      <TimerWrapper>
        <TimerClock>{minutes(this.state.seconds)}</TimerClock>
        <FabButton onClick={() => this.onStopBtnClick()} small>
          <AniIcon type={this.state.iconTypeStop} />
        </FabButton>
        <FabButton onClick={() => this.onBtnClick()}>
          <AniIcon type={this.state.iconTypePlay} />
        </FabButton>
        <FabButton onClick={() => this.onDeleteBtnClick()} small>
          <AniIcon type={this.state.iconTypeDelete} />
        </FabButton>
      </TimerWrapper>
    );
  }
}
export default Timer;
