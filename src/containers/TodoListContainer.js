import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import { FabButton } from '../components/Buttons';
import { breakpoint } from '../themes/mixins';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
`;

const Todo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  min-width: 300px;
  height: 100%;
  background-color: rgba(255,255,255,0.3);
  z-index: 10;
  ${breakpoint.down('m')`
    width: 100%;
  `}
`;

class TodoListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'add'
    };
  }
  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open?'add':'delete' });
  }
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Todo hidden={!this.state.open}>TodoListContainer</Todo>
      </React.Fragment>
    );
  }
}

export default TodoListContainer;