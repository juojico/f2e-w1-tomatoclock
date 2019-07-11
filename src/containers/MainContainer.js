import React from 'react';
import styled from 'styled-components';
import Timer from '../components/Timer';
import Tomato from '../components/Tomato';
import TakeBreak from '../components/TakeBreak';
import MainMenu from '../components/MainMenu';
import ChartContainer from '../containers/ChartContainer';
import SettingContainer from '../containers/SettingContainer';
import TodoListContainer from '../containers/TodoListContainer';

const Container = styled.div`
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
      chartOpen: false,
      todoOpen: false,
      settingOpen: false
    };
  }
  onFinish = (working) => {
    console.log('Finish');
    this.setState({ takeBreak: working });
  };
  onMainMenuClick = (target) => {
    switch (target) {
      case 'chart':
        return this.setState({
          chartOpen: true,
          todoOpen: false,
          settingOpen: false
        });
      case 'todo':
        return this.setState({
          chartOpen: false,
          todoOpen: true,
          settingOpen: false
        });
      case 'setting':
        return this.setState({
          chartOpen: false,
          todoOpen: false,
          settingOpen: true
        });
      case 'close':
        return this.setState({
          chartOpen: false,
          todoOpen: false,
          settingOpen: false
        });

    }
  }
  render() {
    return (
      <Container>
        <MainMenu onClick={this.onMainMenuClick} />
        <Tomato hidden={this.state.takeBreak} />
        <TakeBreak hidden={!this.state.takeBreak} />
        <Timer onFinish={this.onFinish} />
        <TodoListContainer hidden={!this.state.todoOpen} />
        <ChartContainer hidden={!this.state.chartOpen} />
        <SettingContainer hidden={!this.state.settingOpen} />
      </Container>
    );
  }
}

export default MainContainer;
