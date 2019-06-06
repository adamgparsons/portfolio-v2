import styled from 'styled-components';
import React, {Component} from 'react';
import CaseStudyInfo from './CaseStudyInfo';
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  margin-top: ${theme.space[7]}px;
  margin-bottom: ${theme.space[7]}px;
  @media only screen and (max-width: ${theme.breakpoints[0]}) {
    flex-direction: column-reverse;
  }
`;

const CaseStudyImage = styled.div`
  @media only screen and (max-width: ${theme.breakpoints[0]}) {
    margin-top: ${theme.space[6]}px;
  }
  img {
    transform: translateX(-200px);
    @media only screen and (max-width: ${theme.breakpoints[0]}) {
      transform: translateX(0px);
      margin-left: -${theme.space[2]}px;
      margin-right: -${theme.space[2]}px;
    }
  }
`;

class BRCCaseStudy extends Component {
  render() {
    return (
      <Wrapper>
        <CaseStudyImage>
          <img src="https://placeimg.com/640/480/any" />
        </CaseStudyImage>
        <CaseStudyInfo
          companyName="British Red Cross"
          caseStudyName="Wheelchair service"
          description="Using service design to transform the 100 year old mobility aid service."
          link="/casestudy/wheelchair-service"
        />
      </Wrapper>
    );
  }
}

export default BRCCaseStudy;
