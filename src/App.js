import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import MainContainer from './containers/MainContainer';

const DarkTheme = {
  backgroundColor: '#282c34',
  fontColor: 'white',
  borderColor: 'rgba(255,255,255,0.5)',
  primaryColor: '#f95550',
  primaryColorLight: '#ec6763',
  primaryColorDark: '#dc4641',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad'
};
const LightTheme = {
  backgroundColor: '#f3f1ee',
  fontColor: '#1d1f23',
  borderColor: 'rgba(200,129,0,0.1)',
  primaryColor: '#FFA20F',
  primaryColorLight: '#fbb941',
  primaryColorDark: '#fb910d',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad'
};

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      theme: DarkTheme
    };
  }
  onChangeTheme = item => {
    switch (item) {
      case 'DarkTheme':
        return this.setState({theme: DarkTheme});
      case 'LightTheme':
        return this.setState({theme: LightTheme});
      default:
        return this.setState({theme: DarkTheme});
    }
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <MainContainer onChangeTheme={this.onChangeTheme} />
      </ThemeProvider>
    );
  }
}

export default App;
