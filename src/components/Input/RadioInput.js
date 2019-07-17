import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';

const Label = styled.label`
  margin: 0.5em;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  &:checked + div {
    &::before,
    &::after {
      background-color: ${props => props.theme.primaryColor};
    }
  }
`;

const IconsBtn = styled(Icons)`
  display: inline-block;
  margin: 0 0.5em;
`;

const RadioInput = ({ text, name, value, onClick, checked, ...props }) => {
  return (
    <Label onClick={onClick}>
      <Input
        type='radio'
        name={name}
        value={value}
        id={'radio' + value}
        checked={checked}
        hidden
      />
      <IconsBtn type='circle' for={'radio' + value} />
      {text}
    </Label>
  );
};
export default RadioInput;
