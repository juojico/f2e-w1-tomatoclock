import React from 'react';
import styled from 'styled-components';
import { FabButton } from '../Buttons';

const TestToolWrapper = styled.div`
  width: 100％;
  color: white;
  font-size: 1rem;
`;

const TestTool = ({ children, onClick1, onClick2, hidden, ...props }) => {

    return (
      <TestToolWrapper>
        測試
        <FabButton onClick={onClick1} small>3秒</FabButton>
        <FabButton onClick={onClick2} small>25分鐘</FabButton>
      </TestToolWrapper>
    );
}

export default TestTool;
