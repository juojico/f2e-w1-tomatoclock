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

const TodoListBox= styled(TodoList)`
  height: auto;
  min-height: 40%;
`;

const TodoListContent = styled.div`
  overflow-y: auto;
`;

class TodoListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'add'
    };
  }

  onOpanClick = () => {
    this.setState({
      open: !this.state.open,
      type: this.state.open ? 'add' : 'delete'
    });
  };

  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type} />
        </FabButtonTodo>
        <Todo open={this.state.open}>
          <TodoListBox title={'TodoList'}>
            <TodoListContent>
              {this.props.data.map(item => {
                return item.isDone ? (
                  ''
                ) : (
                  <TodoItems
                    title={item.text}
                    tomatos={item.usedTomato}
                    key={item.key}
                    deleteItem={() => this.props.deleteItem(item.key)}
                    doneItem={() => this.props.doneItem(item.key)}
                    nowItem={() => this.props.nowItem(item.key)}
                    checked={false}
                  />
                );
              })}
            </TodoListContent>
            <AddNewTask
              addItem={this.props.addItem}
              inputElement={this.inputElement}
              handleInput={this.props.handleInput}
              currentItem={this.props.currentItem}
              errorText={this.props.errorText}
            />
          </TodoListBox>
          <TodoListBox title={'Done'}>
            <TodoListContent>
              {this.props.data.map(item => {
                return item.isDone ? (
                  <TodoItems
                    title={item.text}
                    tomatos={item.usedTomato}
                    key={item.key}
                    deleteItem={() => this.props.deleteItem(item.key)}
                    doneItem={() => this.props.doneItem(item.key)}
                    btnType='up'
                    checked={true}
                  />
                ) : (
                  ''
                );
              })}
            </TodoListContent>
          </TodoListBox>
        </Todo>
      </React.Fragment>
    );
  }
}

export default TodoListContainer;
