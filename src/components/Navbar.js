import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../theme";
import LinkTag from "../components/LinkTag";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.space[5]}px;
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.black90};
  padding-top: ${props => props.theme.space[1]}px;
  ${theme.textStyles.body}
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

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Adam Parsons</Logo>
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
export default Navbar;
