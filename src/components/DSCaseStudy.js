import styled from "styled-components";
import React, { Fragment } from "react";
import theme from "../theme";

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
`;

const CaseStudyInfo = () => {
  return (
    <Fragment>
      <CompanyName>Citizens Advice</CompanyName>
      <CaseStudyName>Design System</CaseStudyName>
      <CaseStudyDescription>
        Creating a design system to improve consitency, acceesibility and
        performance for users.
      </CaseStudyDescription>
    </Fragment>
  );
};

const DSCaseStudy = () => {
  return <CaseStudyInfo />;
};

export default DSCaseStudy;
