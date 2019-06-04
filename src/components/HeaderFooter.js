import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../theme";
import LinkTag from "./LinkTag";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${theme.space[5]}px;
  padding-bottom: ${theme.space[5]}px;
`;

const Logo = styled(props => <Link {...props} />)`
  color: ${theme.colors.black90};
  padding-top: ${theme.space[1]}px;
  text-decoration: none;
  height: 28px;
  ${theme.textStyles.body}
  padding-bottom: 1px;
  border-bottom: 2px white solid;
  transition: border-bottom 0.5s, background-color 0.5s;
  :hover {
    border-bottom: 2px black solid;
    background-color: ${theme.colors.lightGreen};
  }
`;

const ContactDetails = styled.div`
  ${theme.textStyles.body}
`;

const Email = styled.div`
  display: block;
  margin-bottom: ${theme.space[3]}px;
`;

const PhoneNumber = styled.div`
  display: block;
`;

const HeaderFooter = () => {
  return (
    <Wrapper>
      <Logo to="/">Adam Parsons</Logo>
      <ContactDetails>
        <Email>
          <LinkTag>adamgeorgeparsons@gmail.com</LinkTag>
        </Email>

        <PhoneNumber>
          <LinkTag>+44 7498 703 696 </LinkTag>
        </PhoneNumber>
      </ContactDetails>
    </Wrapper>
  );
};
export default HeaderFooter;
