import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const ExternalLink = styled.a `
  text-decoration: none;
  color: inherit;
  // padding-bottom: 1px;
  transition: background-color 0.25s;
  : hover {
    background-color: ${theme.colors.lightGreen};
    border-bottom: 2px black solid;
  }
`;

export default ExternalLink;
