import styled from "styled-components";
import React, { Component } from "react";
import theme from "../theme";
import Button from "./Button";

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

class CaseStudyInfo extends Component {
  render() {
    const companyName = this.props.companyName;
    const caseStudyName = this.props.caseStudyName;
    const description = this.props.description;
    return (
      <InfoWrapper>
        <CompanyName>{companyName}</CompanyName>
        <CaseStudyName>{caseStudyName}</CaseStudyName>
        <CaseStudyDescription>{description}</CaseStudyDescription>
        <Button href="http://google.com">View case study</Button>
      </InfoWrapper>
    );
  }
}

export default CaseStudyInfo;
