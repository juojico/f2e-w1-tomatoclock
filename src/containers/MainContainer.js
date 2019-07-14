import React from 'react';
import styled from 'styled-components';
import Timer from '../components/Timer';
import Tomato from '../components/Tomato';
import TakeBreak from '../components/TakeBreak';
import TaskNow from '../components/TodoList/TaskNow';
import ChartContainer from '../containers/ChartContainer';
import SettingContainer from '../containers/SettingContainer';
import TodoListContainer from '../containers/TodoListContainer';

const MOCK_DATA = {
  nowTask: {
    id: 123,
    title: 'Task Now ContnetText',
    content: '',
    usedTomato: 3,
    isDone: false
  },
  planTask: [
    {
      id: 131,
      title: 'Task 1 ContnetText',
      content: '',
      usedTomato: 3,
      isDone: false
    }, {
      id: 132,
      title: 'Task 2 ContnetText',
      content: '',
      usedTomato: 5,
      isDone: false
    }, {
      id: 133,
      title: 'Task 3 ContnetText',
      content: '',
      usedTomato: 0,
      isDone: false
    }
  ]
}

const Container = styled.div`
  background-color: #282c34;
  height: 100vh;
  min-height: 700px;
  min-width: 300px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  text-align: center;
`;

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takeBreak: false,
      tomatoSays: `Hi! I'm TOMATO!`
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
      default:
        break;
    }
  }
  render() {
    return (
      <Container>
        <Tomato size={24} text={this.state.tomatoSays} hidden={this.state.takeBreak} />
        <TakeBreak hidden={!this.state.takeBreak} />
        <Timer onFinish={this.onFinish} />
        <TaskNow data={MOCK_DATA.nowTask} />
        <TodoListContainer data={MOCK_DATA.planTask} />
        <ChartContainer />
        <SettingContainer />
      </Container>
    );
  }
}

export default MainContainer;
