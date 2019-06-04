import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { Link } from "gatsby";

const Button = styled(props => <Link {...props} />)`
  ${theme.textStyles.body}
  background-color:${theme.colors.gray};
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[2]}px ${theme.space[4]}px;
  margin-top: ${theme.space[5]}px;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: background-color 0.5s;
  :hover {
    background-color: ${theme.colors.darkGray}
  }

`;

export default Button;
