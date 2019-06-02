import styled from "styled-components";
import React, { Fragment } from "react";
import theme from "../theme";

const Button = styled.a`
  ${theme.textStyles.body}
  background-color:${theme.colors.gray};
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[1]}px ${theme.space[3]}px;
  margin-top: ${theme.space[5]}px;
  color: ${theme.colors.white};

`;

const Wrapper = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const CompanyName = styled.h2`
  ${theme.textStyles.heading2}
  display:block;
`;

const CaseStudyName = styled.h3`
  ${theme.textStyles.heading1}
  display:block;
`;

const CaseStudyDescription = styled.p`
  ${theme.textStyles.body}
  display:block;
  margin-top: ${theme.space[5]}px;
`;

const CaseStudyImage = styled.div`
  img {
    transform: translateX(200px);
    /* position: absolute; */
  }
`;

const CaseStudyInfo = () => {
  return (
    <InfoWrapper>
      <CompanyName>Citizens Advice</CompanyName>
      <CaseStudyName>Design System</CaseStudyName>
      <CaseStudyDescription>
        Creating a design system to improve consitency, acceesibility and
        performance for users.
      </CaseStudyDescription>
      <Button href="http://google.com">Hello there</Button>
    </InfoWrapper>
  );
};

const DSCaseStudy = () => {
  return (
    <Wrapper>
      <CaseStudyInfo />
      <CaseStudyImage>
        <img src="https://placeimg.com/640/480/any" />
      </CaseStudyImage>
    </Wrapper>
  );
};

export default DSCaseStudy;
