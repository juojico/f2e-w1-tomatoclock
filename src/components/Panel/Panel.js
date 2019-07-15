import React from 'react';
import styled from 'styled-components';

const PanelBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #282c34;
  padding: 24px;
`;


const Panel = ({ ...props }) => {
  return (
    <PanelBody {...props}>
    </PanelBody>
  );
};
export default Panel;
