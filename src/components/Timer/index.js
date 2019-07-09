import React from "react";
import styled from "styled-components";

const TimerWrapper = styled.h1`
  position: relative;
  width: 300px;
  color: #f05550;
`;


const Timer = ({ ...props }) => {
  return (
    <TimerWrapper {...props}>
        TOMATO 25:00
    </TimerWrapper>
  );
};
export default Timer;
