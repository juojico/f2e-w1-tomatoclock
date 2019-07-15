import React from 'react';
import styled from 'styled-components';
import Timer from '../components/Timer';
import Tomato from '../components/Tomato';
import TakeBreak from '../components/TakeBreak';
import TaskNow from '../components/TodoList/TaskNow';
import ChartContainer from '../containers/ChartContainer';
import SettingContainer from '../containers/SettingContainer';
import TodoListContainer from '../containers/TodoListContainer';

const Container = styled.div`
  background-color: #282c34;
  height: 100vh;
  min-height: 700px;
  min-width: 300px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  text-align: center;
`;

const MainBox = styled.div`
  height: 100vh;
  min-width: 300px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-size: 1rem;
  color: white;
  text-align: center;
`;

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takeBreak: false,
      tomatoSays: `Hi! I'm TOMATO!`,
      taskNow: {},
      taskNowCheck: false
    };
  }
  onFinish = working => {
    console.log('Finish');
    this.setState({ takeBreak: working });
  };
  getTaskNow = taskNow => {
    this.setState({ taskNow: taskNow });
  }

  doneItem = () => {
    this.setState({ taskNowCheck: true });
    console.log('doneItem',this.state);
  };
  
  render() {
    return (
      <Container>
        <TodoListContainer getTaskNow={this.getTaskNow} taskNowCheck={this.state.taskNowCheck}/>
        <MainBox>
          <Tomato
            size={12}
            text={this.state.tomatoSays}
            hidden={this.state.takeBreak}
          />
          <TakeBreak hidden={!this.state.takeBreak} />
          <Timer onFinish={this.onFinish} />
          <TaskNow data={this.state.taskNow} doneItem={this.doneItem}/>
        </MainBox>
        <ChartContainer />
        <SettingContainer />
      </Container>
    );
  }
}

export default MainContainer;