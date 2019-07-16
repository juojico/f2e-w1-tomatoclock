import React from 'react';
import styled from 'styled-components';
import Tomato from '../Tomato'
import AniIcon from '../Icons';
import { FabButton } from '../Buttons';

const TaskNowWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
`;

const TaskContent = styled.div`
  box-sizing: border-box;  
  width: 100%;
  padding: .25em;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskTitle = styled.div`
  font-size: 2em;
  padding: .25em;
`;

const UsedTomatoBox = styled.div`
  box-sizing: border-box;
  padding: 12px;
  align-text: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tomatos = styled(Tomato)`
  margin: 6px;
  animation: none;
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

const TaskNow = ({ data, doneItem, ...props }) => {

  return (
    <TaskNowWrapper>
      <TaskContent>
        <TaskTitle>
          {data.text}
        </TaskTitle>
        <FabButton outLine onClick={doneItem} small>
          <AniIcon type={'check'} color='darkgrey'></AniIcon>
        </FabButton>
      </TaskContent>
      <UsedTomatoBox>
        {makeTomatos(data.usedTomato)}
      </UsedTomatoBox>
    </TaskNowWrapper>
  );
}

export default TaskNow;