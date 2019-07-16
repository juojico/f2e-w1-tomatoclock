import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  background-color: transparent;
  ${props => props.iconType}
`;

const iconType = (typeName, color) => {
  switch (typeName) {
    case 'play':
      return `
        &::before,&::after {
          ${defaultIconType}
          left: 30%;
          border: .5em solid transparent;
          border-left-width: .6em;
          border-right-width: 0;
          border-left-color: ${color};
        }
      `
    case 'pause':
      return `
        &::before,&::after {
          ${defaultIconType}
          height: 90%;
          width: 30%;
          top: 5%;
          left: 5%;
          background-color: ${color};
        }
        &::after {
          left: 65%;
        }
      `
    case 'up':
      return `
        &::before,&::after {
          ${defaultIconType}
          top: -30%;
          border: .5em solid transparent;
          border-left-width: .6em;
          border-right-width: 0;
          border-left-color: ${color};
          transform: rotate(-90deg);
        }
      `
    case 'down':
      return `
        &::before,&::after {
          ${defaultIconType}
          top: 30%;
          border: .5em solid transparent;
          border-left-width: .6em;
          border-right-width: 0;
          border-left-color: ${color};
          transform: rotate(90deg);
        }
      `
    case 'back':
      return `
        &::before,&::after {
          ${defaultIconType}
          left: -30%;
          border: .5em solid transparent;
          border-left-width: .6em;
          border-right-width: 0;
          border-left-color: ${color};
          transform: rotate(180deg);
        }
      `
    case 'skip':
      return `
        &::before,&::after {
          ${defaultIconType}
          border: 0.1em solid ${color};
          border-bottom-color: transparent;
          border-radius: 100%;
        }
        &::after {
          top: 45%;
          left: 20%;
          border: .5em solid transparent;
          border-left-color: ${color};
          transform: rotate(135deg) scale(0.5);
        }
      `
    case 'restart':
      return `
        &::before,&::after {
          ${defaultIconType}
          border: 0.1em solid ${color};
          border-bottom-color: transparent;
          border-radius: 100%;
        }
        &::after {
          top: 45%;
          left: -15%;
          border: .5em solid transparent;
          border-left-color: ${color};
          transform: rotate(45deg) scale(0.5);
        }
      `
    case 'stop':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          background-color: ${color};
        }
      `
    case 'add':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 15%;
          left: 40%;
          background-color: ${color};
        }
        &::after {
          transform: rotate(90deg);
        }
      `
    case 'delete':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 15%;
          left: 40%;
          transform: rotate(45deg);
          background-color: ${color};
        }
        &::after {
          transform: rotate(-45deg);
        }
      `
    case 'check':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 15%;
          height: 80%;
          top: 10%;
          left: 50%;
          transform: rotate(45deg);
          background-color: ${color};
        }
        &::after {
          height: 40%;
          top: 40%;
          left: 12%;
          transform: rotate(-45deg);
        }
      `
    case 'uncheck':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 100%;
          height: 100%;
          border: .1em solid ${color};
          border-radius: 100%;
        }
      `
    case 'setting':
      return `
        &::before,&::after {
          ${defaultIconType}
          border-radius: 100%;
          border: .15em dashed ${color};
        }
        &::after {
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          border: .25em solid ${color};
        }
      `
    case 'chart':
      return `
        &::before,&::after {
          ${defaultIconType}
          width: 50%;
          height: 50%;
          top: 45%;
          left: 17%;
          border-left: .15em solid ${color};
          border-right: .15em solid ${color};
        }
        &::after {
          width: 100%;
          height: 90%;
          top: 5%;
          left: 0%;
          border-left: none;
          border-bottom: .05em solid ${color};
        }
      `
    default:
      return `
          &::before,&::after {
            ${defaultIconType}
            width: 70%;
            height: 70%;
            top: 15%;
            left: 15%;
            border-radius: 100%;
            background-color: ${color};
          }
        `
  }
  
};

const defaultIconType = `
  content: "";
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: inherit;
  right: inherit;
  background: transparent;
  background-color: transparent;
  border: none;
  border-radius: 0;
  transform: none;
  transition: 0.2s ease-in-out;
`;

const AniIcon = ({ color = 'white', type = 'play', hidden, ...props }) => {
  
  return (
    <Icon color={color} typeName={type} hidden={hidden} iconType={iconType(type, color)} {...props} />
  );
};

export default AniIcon;
