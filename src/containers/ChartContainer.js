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
  flex-grow: ${props => (props.open ? 1 : 0)};
  min-width: ${props => (props.open ? '300px' : '0')};
  height: ${props => (props.open ? '100%' : '0px')};
  width: ${props => (props.open ? '30%' : '0px')};
  bottom: 0px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: ${props => (props.open ? 1 : 0)};
  z-index: 10;
  transition: 1s;
  ${breakpoint.down('l')`
    position: absolute;
    width: 100%;
  `}
`;

const ChartBox = styled.div`
  display: flex;
  align-items: cneter;
  justify-content: cneter;
  width: 100%;
  padding-bottom: 24px;
`;

const Items = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const Big = styled.div`
  font-size: 4em;
  color: #f05550;
`;

const SwitchWeek = styled.div`
  width: 100%;
  padding: 12px;
  font-size: .75em;
  & span {
    font-size: 2em;
  }
`;

const ChartTable = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  padding: 24px;
`;

const ChartBar = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 6%;
  height: ${props => props.values}0%;
  background-color: #f05550;
  opacity: 0.8;
  transition: .2s;
  &:hover {
    opacity: 1;
  }
  &:last-child {
    background-color: #f0b570;
  }
  & span {
    position: absolute;
    top: -1.25em;
    left: 0;
    font-size: 1.5em;
    width: 100%;
  }
  & div {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 1.5em;
    width: 100%;
  }
`;

const MOCK_DATA = {
  '20190716': 5,
  '20190715': 6,
  '20190714': 8,
  '20190713': 4,
  '20190712': 7,
  '20190711': 1,
  '20190710': 5,
  '20190709': 6,
  '20190708': 8,
  '20190707': 4,
  '20190706': 7,
  '20190705': 1,
  '20190704': 5,
  '20190703': 6,
  '20190702': 8,
  '20190701': 4,
  '20190630': 7,
  '20190629': 1
};

const today = MOCK_DATA[20190716];
const totalList = Object.values(MOCK_DATA);
const weekly = totalList.slice(totalList.length - 7, totalList.length);
const thisWeekly = Object.keys(MOCK_DATA).slice(
  totalList.length - 7,
  totalList.length
);
const weeklySum = weekly.reduce((a, b) => a + b);
const totalSum = totalList.reduce((a, b) => a + b);

class ChartContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'chart'
    };
  }
  onOpanClick = () => {
    this.setState({
      open: !this.state.open,
      type: this.state.open ? 'chart' : 'delete'
    });
  };
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type} />
        </FabButtonTodo>
        <Chart open={this.state.open}>
          <Panel>
            <PanelHeader>統計</PanelHeader>
            <ChartBox>
              <Items>
                <h2>today</h2>
                <Big>{today}</Big>
              </Items>
              <Items>
                <h2>weekly</h2>
                <Big>{weeklySum}</Big>
              </Items>
              <Items>
                <h2>total</h2>
                <Big>{totalSum}</Big>
              </Items>
            </ChartBox>
            <SwitchWeek>
              <FabButton outLine onClick={()=>false} small>
                <AniIcon type='back' />
              </FabButton>
              <span>20190716</span>
              <FabButton outLine onClick={()=>false} small>
                <AniIcon type='play' />
              </FabButton>
            </SwitchWeek>
            <ChartTable>
              {weekly.map((item, index) => {
                return (
                  <ChartBar values={item} key={`weekly${index}`}>
                    <span>{item}</span>
                    <div>{thisWeekly[index].slice(6, 8)}</div>
                  </ChartBar>
                );
              })}
            </ChartTable>
          </Panel>
        </Chart>
      </React.Fragment>
    );
  }
}

export default ChartContainer;
