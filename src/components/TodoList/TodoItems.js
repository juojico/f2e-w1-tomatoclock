import React from 'react';
import styled from 'styled-components';
import AniIcon from '../Icons';
import { FabButton } from '../Buttons';

const TodoItemsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  border-top: 1px solid ${props=>props.theme.borderColor};
  &:nth-child(1) button:nth-child(3) {
    font-size: 1.25em;
    padding: 0 6px;
    pointer-events: none;
    div {
      &::before, &::after {
        border-left-color: ${props=>props.theme.primaryColor};
      }
    }
  }
`;

const TaskTitle = styled.span`
  font-size: ${props => props.checked ? '1em' : '1.25em'};
  padding: 0;
  margin: 0;
  ${props => props.checked ? 'text-decoration: line-through' : ''};
`;

const TaskBtn = styled(FabButton)`
  font-size: 1em;
  padding: 8px;
  margin: 0;
`;

const TaskBtnPlay = styled(TaskBtn)`
  font-size: 1em;
  padding: 8px;
  margin: 0;
  background-color: transparent;
  &:nth-child(1) {
    color: ${props=>props.theme.primaryColor};
  }
`;

const UsedTomatoBox = styled.div`
  box-sizing: border-box;
  padding: 12px;
  align-text: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tomatos = styled.div`
  width: .5em;
  height: .5em;
  border-radius: 100%;
  margin: 2px;
  background-color: ${props=>props.theme.primaryColor};
`
const makeTomatos = data => {
  let elements = [];
  for (let i = 0; i < data; i++) {
    elements.push(<Tomatos key={'Tomatos' + i} />);
  }
  return (
    <React.Fragment>
      {elements}
    </React.Fragment>
  )
}

const TodoItems = ({ children, title, tomatos, deleteItem, doneItem, nowItem, btnType = 'play', checked = false, ...props }) => {

  return (
    <TodoItemsWrapper {...props}>
      <TaskTitle checked={checked}>{title}</TaskTitle>
      <UsedTomatoBox>
        {makeTomatos(tomatos)}
      </UsedTomatoBox>
      <div>
        <TaskBtn outLine onClick={deleteItem}>
          <AniIcon type={'delete'} color='darkgrey'></AniIcon>
        </TaskBtn>
        <TaskBtn outLine onClick={doneItem}>
          <AniIcon type={'check'} color={checked ? '#50af33' : 'darkgrey'}></AniIcon>
        </TaskBtn>
        {checked ? '':
        <TaskBtnPlay outLine onClick={nowItem}>
          <AniIcon type={btnType}></AniIcon>
        </TaskBtnPlay>
        }
      </div>
    </TodoItemsWrapper>
  );
}

export default TodoItems;