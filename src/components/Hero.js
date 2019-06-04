import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../theme";
import LinkTag from "../components/LinkTag";

const Wrapper = styled.div`
  margin-top: ${theme.space[7]}px;
  margin-bottom: ${theme.space[6]}px;
`;

const TagLine = styled.h2`
  ${theme.textStyles.heading2};
  font-family: "Custom font bold";
  font-weight: bold;
`;

const Description = styled.p`
  ${theme.textStyles.heading2}
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <TagLine>I'm Adam, a Product designer based in London.</TagLine>
      <Description>
        <p>
          I focus on solving real world problems for users. I help companies do
          this by researching, designing, and validating with users.
        </p>
        <p>
          I currently work at Citizens Advice designing a platform that will
          provide advice to over 30 million UK citizens per year. I was
          previously working at British Red Cross{" "}
          <LinkTag>redesigning their wheelchair service.</LinkTag>
        </p>
      </Description>
    </Wrapper>
  );
};

export default Hero;
