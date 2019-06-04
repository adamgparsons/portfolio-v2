import React, { Fragment } from "react";
import styled from "styled-components";
import DSCaseStudy from "./DSCaseStudy";
import BRCCaseStudy from "./BRCCaseStudy";

const CaseStudyCollection = () => {
  return (
    <Fragment>
      <DSCaseStudy />
      <BRCCaseStudy />
    </Fragment>
  );
};

export default CaseStudyCollection;
