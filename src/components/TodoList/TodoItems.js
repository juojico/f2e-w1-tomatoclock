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
  font-size: 1.2em;
  padding: 0;
  margin: 0;
`;

const TaskBtn = styled(FabButton)`
  font-size: 1em;
  padding: 8px;
  margin: 0;
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

const TodoItems = ({ children, title, tomatos, ...props }) => {

  return (
    <TodoItemsWrapper {...props}>
      <TaskTitle>{title}</TaskTitle>
      <UsedTomatoBox>
        {makeTomatos(tomatos)}
      </UsedTomatoBox>
      <BtnBox>
      <TaskBtn outLine>
        <AniIcon type={'delete'}></AniIcon>
      </TaskBtn>
      <TaskBtn outLine>
        <AniIcon type={'play'}></AniIcon>
      </TaskBtn>
      </BtnBox>
    </TodoItemsWrapper>
  );
}

export default TodoItems;