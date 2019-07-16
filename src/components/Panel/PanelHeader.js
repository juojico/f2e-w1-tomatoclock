import React from 'react';
import styled from 'styled-components';

const PanelHead = styled.h2`
  width: 100%;
  text-align: center;
`;

const PanelHeader = ({ ...props }) => {
  return (
    <PanelHead {...props}>
    </PanelHead>
  );
};

export default PanelHeader;
