import React from "react";
import styled, { keyframes } from "styled-components";

const tomatoRoll = keyframes`
  to {
    transform: scale(1.05, 0.95);
  }
`;

const TomatoBody = styled.div`
  position: relative;
  width: 300px;
  height: 270px;
  background-color: #f05550;
  border: 10px solid #e04540;
  border-width: 4px 8px 10px 4px;
  border-radius: 90% 100%;
  animation: ${tomatoRoll} 1s alternate infinite;
  ::before {
    content: "";
    position: absolute;
    width: 8%;
    height: 9%;
    top: 20%;
    left: 12%;
    border-radius: 100%;
    background-color: rgba(255,255,255, 0.5);
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

const Tomato = ({ ...props }) => {
  return (
    <TomatoBody {...props}>
      <Leaves />
      <Leaves />
      <Leaves />
      <Leaves />
      <Leaves />
    </TomatoBody>
  );
};
export default Tomato;
