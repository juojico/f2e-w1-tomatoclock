import React from 'react';
import styled from 'styled-components';
import AniIcon from '../Icons';
import { FabButton } from '../Buttons';

const TodoItemsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border-top: 1px solid #666;
`;

const TaskInput = styled.input`
  width: 100%;
  font-size: 1.2em;
  padding: .5em;
  margin: 0;
`;

const TaskBtn = styled(FabButton)`
  font-size: 1.2em;
  padding: 8px;
  margin: .5em;
`;

const onKey = () => {
  console.log('onKey')
}

const onClick = () => {
  console.log('onClick')
}

const AddNewTask = ({ ...props }) => {

  return (
    <TodoItemsWrapper {...props}>
      <TaskInput onClick={()=>onKey()} />
      <TaskBtn outLine>
        <AniIcon type={'add'} onClick={()=>onClick()}></AniIcon>
      </TaskBtn>
    </TodoItemsWrapper>
  );
}

export default AddNewTask;