import React from 'react';
import styled, { keyframes } from 'styled-components';

const TakeBreakRoll = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const TakeBreakBody = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #50f0f0;
  border: 10px solid #40e0e0;
  border-width: 4px 8px 10px 4px;
  border-radius: 90% 100%;
  animation: ${TakeBreakRoll} 10s linear infinite;
  ::before {
    content: '';
    position: absolute;
    width: 8%;
    height: 9%;
    top: 20%;
    left: 12%;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  ::after {
    content: 'TakeBreak...';
    position: absolute;
    top: -20%;
    left: 25%;
  }
`;

const TakeBreak = ({ ...props }) => {
  return (
    <TakeBreakBody {...props}>
    </TakeBreakBody>
  );
};
export default TakeBreak;
