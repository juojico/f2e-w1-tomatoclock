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
  position: absolute;
  top: 0;
<<<<<<< HEAD
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 10;
=======
  right: 0;
  width: 30%;
  min-width: 300px;
  height: 100%;
  background-color: rgba(255,255,255,0.3);
  z-index: 10;
  ${breakpoint.down('m')`
    width: 100%;
  `}
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
`;

class ChartContainer extends React.PureComponent {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {};
=======
    this.state = {
      open: false,
      type: 'chart'
    };
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
  }
  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open ? 'chart' : 'delete' });
  }
  render() {
<<<<<<< HEAD
    const { ...props } = this.props;
    return <Chart {...props}>ChartContainer</Chart>;
=======
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Chart hidden={!this.state.open}>
          <Panel>
            <PanelHeader>ChartContainer</PanelHeader>
          </Panel>

        </Chart>
      </React.Fragment>
    );
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
  }
}

export default ChartContainer;
