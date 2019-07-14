import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import { FabButton } from '../components/Buttons';
import { breakpoint } from '../themes/mixins';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
`;

const Setting = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 50%;
  background-color: rgba(255,255,255,0.3);
  z-index: 10;
  ${breakpoint.down('m')`
    height: 100%;
  `}
`;

class SettingContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'setting'
    };
  }
  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open?'setting':'delete' });
  }
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Setting hidden={!this.state.open}>SettingContainer</Setting>
      </React.Fragment>
    );
  }
}

export default SettingContainer;