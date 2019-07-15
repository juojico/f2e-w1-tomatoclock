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
  border-top: 1px solid #666;
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
  ${props => props.nowTask ? `
    font-size: 1.25em;
    padding: 0 6px;
    pointer-events: none;
  ` : ''};
`;

const BtnBox = styled.div`

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
  background-color: #f05550;
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

const TodoItems = ({ children, title, tomatos, deleteItem, doneItem, nowItem, btnType = 'play', checked = false, nowTask = false, ...props }) => {

  return (
    <TodoItemsWrapper {...props}>
      <TaskTitle checked={checked}>{title}</TaskTitle>
      <UsedTomatoBox>
        {makeTomatos(tomatos)}
      </UsedTomatoBox>
      <BtnBox>
        <TaskBtn outLine onClick={deleteItem}>
          <AniIcon type={'delete'} color='darkgrey'></AniIcon>
        </TaskBtn>
        <TaskBtn outLine onClick={doneItem}>
          <AniIcon type={'check'} color={checked ? '#30ff50' : 'darkgrey'}></AniIcon>
        </TaskBtn>
        {checked ? '':
        <TaskBtn outLine nowTask={nowTask} onClick={nowItem}>
          <AniIcon type={btnType} color={nowTask ? '#f05550' : 'darkgrey'}></AniIcon>
        </TaskBtn>
        }
      </BtnBox>
    </TodoItemsWrapper>
  );
}

export default TodoItems;