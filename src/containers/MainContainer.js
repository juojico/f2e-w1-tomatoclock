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
  background-color: ${props=>props.theme.backgroundColor};
  height: 100vh;
  min-height: 700px;
  min-width: 300px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props=>props.theme.fontColor};
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
  color: ${props=>props.theme.fontColor};
  text-align: center;
`;

const MOCK_DONE = [
  {
    key: 130,
    text: 'Task 1 ContnetText',
    usedTomato: 0,
    isDone: false
  },
  {
    key: 131,
    text: 'Task 2 ContnetText',
    usedTomato: 3,
    isDone: true
  },
  {
    key: 132,
    text: 'Task 3 ContnetText',
    usedTomato: 5,
    isDone: true
  },
  {
    key: 133,
    text: 'Task 4 ContnetText',
    usedTomato: 1,
    isDone: true
  }
];

const data = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : { todo: [...MOCK_DONE] };

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takeBreak: false,
      tomatoSays: `Hi! I'm TOMATO!`,
      todo: [...data.todo],
      currentItem: { text: '', key: '' },
      errorText: '',
      nowTask: {}
    };
  }

  componentDidMount() {
    this.getFirstUndone();
  }

  componentDidUpdate() {
    this.getFirstUndone();
  }

  getFirstUndone() {
    const undoItem = this.state.todo.find(item => (item.isDone ? '' : item));
    if (undoItem) {
      this.setState({
        nowTask: undoItem
      });
    } else {
      this.setState({
        todo: [
          ...this.state.todo,
          { text: '請先新增todo', key: 'default', usedTomato: 0, isDone: false }
        ],
        nowTask: {
          text: '請先新增todo',
          key: 'default',
          usedTomato: 0,
          isDone: false
        }
      });
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now(),
      usedTomato: 0,
      isDone: false
    };
    this.setState(state => ({ ...state, currentItem }));
  };

  deleteItem = key => {
    const filteredItems = this.state.todo.filter(item => {
      return item.key !== key;
    });
    this.setState({
      todo: filteredItems
    });

    data.todo = filteredItems;
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  doneItem = key => {
    const findItem = this.state.todo.find(item => {
      return item.key === key;
    });
    findItem.isDone ? (findItem.isDone = false) : (findItem.isDone = true);
    const filteredItems = this.state.todo.filter(item => {
      return item.key !== key;
    });

    this.setState({
      todo: [findItem, ...filteredItems]
    });

    data.todo = [findItem, ...filteredItems];
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  nowItem = key => {
    const findItem = this.state.todo.find(item => {
      return item.key === key;
    });
    const filteredItems = this.state.todo.filter(item => {
      return item.key !== key;
    });

    this.setState({
      todo: [findItem, ...filteredItems],
      nowTask: findItem
    });

    data.todo = [findItem, ...filteredItems];
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  validContent = text => {
    return this.state.todo.some(item => item.text === text);
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text.trim() === '') {
      this.setState({
        errorText: '* 請輸入內容'
      });
      return;
    }
    if (this.validContent(newItem.text)) {
      this.setState({
        errorText: '* 內容重複'
      });
      return;
    }
    const items = [...this.state.todo, newItem];
    this.setState({
      todo: items,
      currentItem: { text: '', key: '' },
      errorText: ''
    });

    data.todo.push(newItem);
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  onFinish = working => {
    if (working) {
      const newTomatos = this.state.nowTask.usedTomato
        ? this.state.nowTask.usedTomato + 1
        : 1;
      const nowkey = this.state.nowTask.key;
      const findItem = this.state.todo.find(item => {
        return item.key === nowkey;
      });

      findItem.usedTomato = newTomatos;
    }
    this.setState({ takeBreak: working });
  };

  render() {
    return (
      <Container>
        <TodoListContainer
          data={this.state.todo}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          doneItem={this.doneItem}
          nowItem={this.nowItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          errorText={this.state.errorText}
        />
        <MainBox>
          <Tomato
            size={12}
            text={this.state.tomatoSays}
            hidden={this.state.takeBreak}
          />
          <TakeBreak hidden={!this.state.takeBreak} />
          <Timer onFinish={this.onFinish} />
          <TaskNow
            data={this.state.nowTask}
            doneItem={() => this.doneItem(this.state.nowTask.key)}
          />
        </MainBox>
        <ChartContainer />
        <SettingContainer onChangeTheme={this.props.onChangeTheme} />
      </Container>
    );
  }
}

export default MainContainer;
