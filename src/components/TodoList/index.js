import React from 'react';
import{ Panel, PanelHeader} from '../Panel';

const TodoList = ({ children, title, ...props }) => {

  return (
    <Panel {...props}>
      {title?<PanelHeader>{title}</PanelHeader>:''}
      {children}
    </Panel>
  );
}

export default TodoList;