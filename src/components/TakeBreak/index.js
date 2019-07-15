import React from 'react';
import styled, { keyframes } from 'styled-components';

const TakeBreakRoll = keyframes`
  to {
    transform: scale(1.1,0.9);
    margin-top: -30px;
    margin-bottom: 30px;
  }
`;

const TakeBreakBody = styled.div`
  position: relative;
  width: 140px;
  height: 130px;
  background-color: #40bfdf;
  border: 10px solid #40e0e0;
  border-width: 4px 8px 10px 4px;
  border-radius: 100% 100% 87% 87%;
  animation: ${TakeBreakRoll} 1s alternate infinite;
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
`;

const Eyes = styled.div`
  position: absolute;
  width: 30%;
  height: 40%;
  top: 20%;
  left: 15%;
  background-color: white;
  border-radius: 100%;
  ::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    top: 12%;
    left: 16%;
    background-color: #379;
    border-radius: 100%;
  }
`
const EyesRight = styled(Eyes)`
  left: 55%;
  ::before {
    left: 4%;
  }
`

const TomatoSay = styled.div`
  position: absolute;
  font-size: ${(props=>props.text).length>20?'1em':'1.5em'};
  width: 100%;
  top: -20%;
  left: 90%;
  transform: rotate(-30deg);
`;

const TakeBreak = ({ ...props }) => {
  return (
    <TakeBreakBody {...props}>
      <Eyes />
      <EyesRight />
      <TomatoSay>Take a Break...</TomatoSay>
    </TakeBreakBody>
  );
};
export default TakeBreak;
