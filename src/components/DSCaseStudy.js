import styled from "styled-components";
import React, { Component } from "react";
import CaseStudyInfo from "../components/CaseStudyInfo";
import theme from "../theme";

const Wrapper = styled.div`
  display: flex;
  margin-top: ${theme.space[7]}px;
  margin-bottom: ${theme.space[7]}px;
`;

const CaseStudyImage = styled.div`
  img {
    transform: translateX(200px);
  }
`;
class DSCaseStudy extends Component {
  render() {
    return (
      <Wrapper>
        <CaseStudyInfo
          companyName="Citizens Advice"
          caseStudyName="Design system"
          description="Creating a design system to improve consitency, accessibility and
          performance for users."
          link="/casestudy/design-system"
        />
        <CaseStudyImage>
          <img src="https://placeimg.com/640/480/any" />
        </CaseStudyImage>
      </Wrapper>
    );
  }
}

export default DSCaseStudy;
