import React from 'react';
import styled from 'styled-components';

const ButtonBasic = styled.button`
  position: relative;
  background-color: #f05550;
  border: 2px solid #e04540;
  border-radius: 100%;
  color: white;
  font-size: ${props=>props.small?'.75em':'1em'};
  padding: ${props=>props.small?'.75em':'1em'};
  margin: 0.5em;
  cursor: pointer;
  :hover {
    background-color: #ff6560;
  }
`;

const FabButton = ({ children, onClick, hidden, small, ...props }) => {
  return (
    <ButtonBasic onClick={onClick} hidden={hidden} small={small} {...props}>
      {children}
    </ButtonBasic>
  );
};

export default FabButton;
