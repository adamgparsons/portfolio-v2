import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../theme";

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
`;

const PhoneNumber = styled.div`
  display: block;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Adam Parsons</Logo>
      <ContactDetails>
        <Email>adamgeorgeparsons@gmail.com</Email>
        <PhoneNumber>+44 7498 703 696</PhoneNumber>
      </ContactDetails>
    </Wrapper>
  );
};
export default Navbar;
