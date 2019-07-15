import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import { breakpoint } from '../themes/mixins';
import { FabButton } from '../components/Buttons';
import { Panel, PanelHeader } from '../components/Panel';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 20;
`;

const Chart = styled.div`
  flex-grow: ${props=>props.open?1:0};
  min-width: ${props=>props.open?'300px':'0'};
  height: ${props=>props.open?'100%':'0px'};
  width: ${props=>props.open?'30%':'0px'};
  bottom: 0px;
  overflow: hidden;
  background-color: rgba(255,255,255,0.3);
  opacity: ${props=>props.open?1:0};
  z-index: 10;
  transition: 1s;
  ${breakpoint.down('l')`
    position: absolute;
    width: 100%;
  `}
`;

class ChartContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'chart'
    };
  }
  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open ? 'chart' : 'delete' });
  }
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Chart open={this.state.open}>
          <Panel>
            <PanelHeader>ChartContainer</PanelHeader>
          </Panel>

        </Chart>
      </React.Fragment>
    );
  }
}

export default ChartContainer;
