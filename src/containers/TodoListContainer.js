import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
   {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);
    z-index: 10;
  }
`;

class TodoListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { ...props } = this.props;
    return (
      <Todo {...props}>TodoListContainer</Todo>
    );
  }
}

export default TodoListContainer;