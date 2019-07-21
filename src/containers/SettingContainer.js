import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import RadioInput from '../components/Input/RadioInput';
import { FabButton } from '../components/Buttons';
import { Panel } from '../components/Panel';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 32;
`;

const SettingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

const Setting = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  z-index: 31;
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
    this.setState({
      open: !this.state.open,
      type: this.state.open ? 'setting' : 'delete'
    });
  };
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type} />
        </FabButtonTodo>
        <Setting hidden={!this.state.open}>
          <Panel>
            <h3>提醒方式</h3>
            <RadioInput name='alertType' value='type1' text='type1' checked/>
            <RadioInput name='alertType' value='type2' text='type2'/>
            <h3>主題色彩</h3>
            <RadioInput name='themeType' value='DarkTheme' text='DarkTheme' onClick={() => this.props.onChangeTheme('DarkTheme')} checked={this.props.theme==='DarkTheme'?true:false}/>
            <RadioInput name='themeType' value='LightTheme' text='LightTheme' onClick={() => this.props.onChangeTheme('LightTheme')} checked={this.props.theme==='LightTheme'?true:false}/>
            <RadioInput name='themeType' value='GrassBag' text='GrassBag' onClick={() => this.props.onChangeTheme('GrassBag')} checked={this.props.theme==='GrassBag'?true:false}/>
          </Panel>
        </Setting>
        <SettingWrapper hidden={!this.state.open} onClick={this.onOpanClick} />
      </React.Fragment>
    );
  }
}

export default SettingContainer;
