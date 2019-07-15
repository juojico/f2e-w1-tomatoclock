import React from 'react';
import styled from 'styled-components';

const ButtonBasic = styled.button`
  position: relative;
  background-color: #f05550;
  border: 2px solid #e04540;
  border-radius: 1em;
  color: white;
  font-size: 1rem;
  padding: 0.5em;
  margin-top: 0.5em;
  cursor: pointer;
  :hover {
    background-color: #ff6560;
  }
`;

const FabButton = ({ children, onClick, hidden, ...props }) => {
  return (
    <ButtonBasic onClick={onClick} hidden={hidden} {...props}>
      {children}
    </ButtonBasic>
  );
};

export default FabButton;
