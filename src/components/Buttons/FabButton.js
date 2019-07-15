import React from 'react';
import styled from 'styled-components';

const ButtonBasic = styled.button`
  position: relative;
  background-color: ${props=>props.disable?'grey':(props=>props.outLine?'transparent':'#f05550')};
  border: none;
  border-radius: 100%;
  color: white;
<<<<<<< HEAD
  font-size: 1rem;
  padding: 0.5em;
  margin-top: 0.5em;
  cursor: pointer;
=======
  font-size: ${props=>props.small?'1.5em':'2em'};
  padding: ${props=>props.small?'.375em':'.5em'};
  margin: 0.5em;
  opacity: ${props=>props.disable?'0.5':'1'};
  cursor: ${props=>props.disable?'normal':'pointer'};
  pointer-events: ${props=>props.disable?'none':'normal'};
  transition: 0.2s ease-in-out;
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
  :hover {
    background-color: ${props=>props.disable?'grey':(props=>props.outLine?'rgba(255,255,255,0.1)':'#ff6560')};
  }
`;

const FabButton = ({ children, ...props }) => {
  return (
    <ButtonBasic {...props}>
      {children}
    </ButtonBasic>
  );
};

export default FabButton;
