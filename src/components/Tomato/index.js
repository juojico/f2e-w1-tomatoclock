import React from 'react';
import styled, { keyframes } from 'styled-components';

const tomatoRoll = keyframes`
  to {
    transform: scale(1.05, 0.95);
  }
`;

const TomatoBody = styled.div`
  position: relative;
  width: ${props => props.size * 12}px;
  height: ${props => props.size * 11}px;
  background-color: ${props => props.theme.primaryColor};
  border: 10px solid ${props => props.theme.primaryColorDark};
  border-width: ${props =>
    props.size < 10 ? '1px 2px 3px 1px' : '4px 8px 10px 4px'};
  border-radius: 90% 100%;
  animation: ${tomatoRoll} 1s alternate infinite;
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

const Leaves = styled.div`
  position: absolute;
  width: 10%;
  height: 40%;
  top: -12%;
  background-color: #50af33;
  left: 45%;
  border-radius: 10% 90%;
  :nth-child(2) {
    top: -6%;
    left: 60%;
    transform: rotate(70deg);
  }

  :nth-child(3) {
    top: 8%;
    left: 65%;
    height: 40%;
    transform: rotate(110deg);
  }

  :nth-child(4) {
    top: 0%;
    left: 35%;
    height: 40%;
    transform: rotate(120deg);
  }

  :nth-child(5) {
    top: 22%;
    left: 60%;
    transform: rotate(150deg);
  }
`;

const TomatoSay = styled.div`
  position: absolute;
  font-size: ${(props => props.text).length > 10 ? '1em' : '1.25em'};
  width: 100%;
  top: -20%;
  left: 100%;
  transform: rotate(-25deg);
`;

const TomatoSayL = styled.div`
  position: absolute;
  font-size: ${(props => props.text).length > 10 ? '1em' : '1.25em'};
  width: 100%;
  top: -20%;
  left: -100%;
  transform: rotate(25deg);
`;

const Tomato = ({ size = '2', text, sayType = false, ...props }) => {
  return (
    <TomatoBody size={size} {...props}>
      <Leaves />
      <Leaves />
      <Leaves />
      <Leaves />
      <Leaves />
      {sayType ? (<TomatoSayL>{text}</TomatoSayL>) : (<TomatoSay>{text}</TomatoSay>)}
    </TomatoBody>
  );
};
export default Tomato;
