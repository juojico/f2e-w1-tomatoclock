import React from 'react';
import styled from 'styled-components';
import AniIcon from '../../components/Icons';
import { FabButton } from '../Buttons';

const TimerWrapper = styled.div`
  position: relative;
  height: 320px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  margin-top: -4em;
  border: 2px solid ${props=>props.takeBreak?'#40bfdf':'#f05550'};
  border-radius: 100%;
`;

const TimerClock = styled.h1`
  position: relative;
  width: 100%;
  font-weight: normal;
  color: ${props=>props.takeBreak?'#40bfdf':'#f05550'};
  font-size: 5em;
  margin: 0;
  div>span.big {
    font-size: 1.5em;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const minutes = seconds => {

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;

  return (<div><span className='big'>{min}</span><span>:{sec}</span></div>)
};

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
      intervalId: '',
      play: false,
      onStart: true,
      takeBreak: false,
      iconTypePlay: 'play',
      iconTypeDelete: 'delete',
      iconTypeStop: 'stop',
    };
  }

  start = () => {
    this.state.seconds > 0
      ? this.setState({ seconds: this.state.seconds - 1, onStart: false })
      : this.state.takeBreak ? this.backWork() : this.done();
  };
  done = () => {
    const { onFinish } = this.props;
    this.pause();
    onFinish(true);
    this.takeBreak();
    alert('done!');
  };

  backWork = () => {
    this.setState({ seconds: 1500, takeBreak: false, onStart: true, iconTypeStop: 'stop' })
    this.pause();
    const { onFinish } = this.props;
    onFinish(false);
  }

  play() {
    let intervalId = setInterval(this.start, 1000);
    this.setState({ intervalId: intervalId, play: true, onStart: false, iconTypePlay: 'pause' });
  }

  pause() {
    clearInterval(this.state.intervalId);
    this.setState({ play: false, iconTypePlay: 'play' });
  }
  setSeconds = seconds => () => {
    this.setState({ seconds });
  };

  takeBreak() {
    this.setState({ seconds: 300, takeBreak: true, iconTypeStop: 'stop', onStart: true });
    console.log('takeBreak');
    this.play();
  }

  onBtnClick() {
    this.state.play ? this.pause() : this.play();
  }

  onRestartBtnClick() {
    this.setState({ seconds: this.state.takeBreak ? 300 : 1500, onStart: true });
    this.pause();
  }
  onSkipBtnClick() {
    this.state.takeBreak ? this.backWork() : this.done();
  }

  render() {
    return (
      <TimerWrapper takeBreak={this.state.takeBreak}>
        <TimerClock takeBreak={this.state.takeBreak}>{minutes(this.state.seconds)}</TimerClock>
        <BtnBox>
          <FabButton takeBreak={this.state.takeBreak} onClick={() => this.onRestartBtnClick()} small disable={this.state.onStart}>
            <AniIcon type={'restart'} />
          </FabButton>
          <FabButton takeBreak={this.state.takeBreak} onClick={() => this.onBtnClick()}>
            <AniIcon type={this.state.iconTypePlay} />
          </FabButton>
          <FabButton takeBreak={this.state.takeBreak} onClick={() => this.onSkipBtnClick()} small >
            <AniIcon type={'skip'} />
          </FabButton>
        </BtnBox>
      </TimerWrapper>
    );
  }
}
export default Timer;
