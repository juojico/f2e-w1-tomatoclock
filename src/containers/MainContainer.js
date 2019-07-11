import React from 'react';
import styled from 'styled-components';
import Tomato from '../components/Tomato';
import TakeBreak from '../components/TakeBreak';
import Timer from '../components/Timer';

const AppHeader = styled.div`
   {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
  }
`;

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takeBreak: false,
    };
  }
  onFinish = () => {
    console.log('Finish');
    this.setState({takeBreak: true});
  };
  render() {
    return (
      <AppHeader>
        <Tomato hidden={this.state.takeBreak}/>
        <TakeBreak hidden={!this.state.takeBreak} />
        <Timer onFinish={this.onFinish} takeBreak={this.state.takeBreak} />
      </AppHeader>
    );
  }
}

export default MainContainer;
