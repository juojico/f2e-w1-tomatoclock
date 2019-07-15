import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import TodoList from '../components/TodoList';
import TodoItems from '../components/TodoList/TodoItems';
import AddNewTask from '../components/TodoList/AddNewTask';
import { breakpoint } from '../themes/mixins';
import { FabButton } from '../components/Buttons';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: ${props => (props.open ? 1 : 0)};
  min-width: ${props => (props.open ? '300px' : '0')};
  height: ${props => (props.open ? '100%' : '0px')};
  width: ${props => (props.open ? '30%' : '0px')};
  max-width: 600px;
  bottom: 0px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: ${props => (props.open ? 1 : 0)};
  z-index: 10;
  transition: 1s;
  ${breakpoint.down('l')`
    position: absolute;
    width: 100%;
  `}
`;

const MOCK_DONE = [
  {
    key: 130,
    text: 'Task 1 ContnetText',
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
  : {
    todo: [...MOCK_DONE]
  };

class TodoListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'add',
      todo: [...data.todo],
      currentItem: { text: '', key: '' },
      errorText: '',
      nowTask: {}
    };
  }

  getTask = () => {
    const { getTaskNow } = this.props;
    this.setState({ nowTask: this.getFirstUndone() });
    getTaskNow(this.getFirstUndone());
  }

  getFirstUndone() {
    const undoItem = this.state.todo.find(item => item.isDone ? '' : item);
    return undoItem ? undoItem : { text: '請點擊左下角按鈕新增任務' };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    console.log('TCL: App -> currentItem', currentItem);
    this.setState(
      state => ({ ...state, currentItem }),
      () =>
        console.log(
          'TCL: App -> this.state.currentItem',
          this.state.currentItem
        )
    );
  };

  validContent = text => {
    return this.state.todo.some(item => item.text === text);
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
      return item.key === key
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
      return item.key === key
    });
    const filteredItems = this.state.todo.filter(item => {
      return item.key !== key;
    });

    this.setState({
      todo: [findItem, ...filteredItems]
    });

    data.todo = [findItem, ...filteredItems];
    localStorage.setItem('todoList', JSON.stringify(data));
    console.log(key, data.todo);
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
    console.log(newItem, this.state.todo, this.state);
    const items = [...this.state.todo, newItem];
    this.setState({
      todo: items,
      currentItem: { text: '', key: '' },
      errorText: ''
    });

    data.todo.push(newItem);
    localStorage.setItem('todoList', JSON.stringify(data));

    console.log(data);
  };

  onOpanClick = () => {
    this.setState({
      open: !this.state.open,
      type: this.state.open ? 'add' : 'delete'
    });
  };

  render() {
    return (
      <React.Fragment >
        <FabButtonTodo outLine onClick={this.onOpanClick} >
          <AniIcon type={this.state.type} />
        </FabButtonTodo>
        <Todo open={this.state.open} >
          <TodoList title={'TodoList'} getTaskNow={this.getTask()} >
            {this.state.todo.map(item => {
              return (
                item.isDone ?
                  '' : <TodoItems
                    title={item.text}
                    tomatos={item.usedTomato}
                    key={item.key}
                    deleteItem={() => this.deleteItem(item.key)}
                    doneItem={() => this.doneItem(item.key)}
                    nowItem={() => this.nowItem(item.key)}
                    checked={false}
                    nowTask={this.state.nowTask.key === item.key ? true : false}
                  />
              );
            })}
            <AddNewTask
              addItem={this.addItem}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              currentItem={this.state.currentItem}
              errorText={this.state.errorText}
            />
          </TodoList>
          <TodoList title={'Done'}>
            {this.state.todo.map(item => {
              return (
                item.isDone ?
                  <TodoItems
                    title={item.text}
                    tomatos={item.usedTomato}
                    key={item.key}
                    deleteItem={() => this.deleteItem(item.key)}
                    doneItem={() => this.doneItem(item.key)}
                    btnType='up'
                    checked={true}
                  /> : ''
              );
            })}
          </TodoList>
        </Todo>
      </React.Fragment>
    );
  }
}

export default TodoListContainer;
