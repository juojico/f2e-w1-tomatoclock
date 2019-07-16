import React from 'react';
import styled from 'styled-components';

const ButtonBasic = styled.button`
  position: relative;
  background-color: ${props=>props.theme.primaryColor};
  border: 2px solid ${props=>props.theme.primaryColorDark};
  border-radius: 1em;
  color: ${props=>props.theme.fontColor};
  font-size: 1em;
  padding: 0.25em 1em;
  margin-top: 0.5em;
  cursor: pointer;
  :hover {
    background-color: ${props=>props.theme.primaryColorLight};
  }
`;

const Button = ({ children, onClick, hidden, ...props }) => {
  return (
    <ButtonBasic onClick={onClick} hidden={hidden} {...props}>
      {children}
    </ButtonBasic>
  );
};

export default Button;
