import React from 'react';
import styled from 'styled-components';

const PanelBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: #282c34;
  padding: 24px;
  overflow: hidden;
`;


const Panel = ({ ...props }) => {
  return (
    <PanelBody {...props}>
    </PanelBody>
  );
};
export default Panel;
