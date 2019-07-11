import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button'

const Menu = styled.div`
  {
    position: fixed;
   bottom: 0;
   padding: 24px;
   z-index: 20;
  }
`;

const MenuItem = styled(Button)`
{
  width: 200px;
}
`;

class MainMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
      intervalId: '',
      play: false,
      takeBreak: false
    };
  }

  onClick = (target) => {
    const { onClick } = this.props;
    onClick(target)
  }

  render() {
    return (
      <Menu>
        <MenuItem onClick={() => this.onClick('setting')}>setting</MenuItem>
        <MenuItem onClick={() => this.onClick('chart')}>chart</MenuItem>
        <MenuItem onClick={() => this.onClick('todo')}>todoList</MenuItem>
        <MenuItem onClick={() => this.onClick('close')}>close</MenuItem>
      </Menu>
    );
  }
};
export default MainMenu;
