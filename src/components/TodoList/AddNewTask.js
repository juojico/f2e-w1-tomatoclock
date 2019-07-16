import React from 'react';
import styled from 'styled-components';
import AniIcon from '../Icons';
import { FabButton } from '../Buttons';

const AddItemsWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
`;

const TaskInput = styled.input`
  width: 100%;
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0;
`;

const TaskBtn = styled(FabButton)`
  font-size: 1.2em;
  padding: 8px;
  margin: 0.5em;
`;

const ErrorText = styled.div`
  width: 100%;
  text-align: left;
  margin-left: 12px;
  margin-top: -12px;
  color: ${props=>props.theme.primaryColor};
`;

class AddNewTask extends React.PureComponent {
  render() {
    return (
      <form onSubmit={this.props.addItem}>
        <AddItemsWrapper>
          <TaskInput
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <TaskBtn outLine type='submit'>
            <AniIcon type={'add'} />
          </TaskBtn>
        </AddItemsWrapper>
        <ErrorText>{this.props.errorText}</ErrorText>
      </form>
    );
  }
}

export default AddNewTask;
