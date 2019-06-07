import React, {Component} from 'react';
import styled from 'styled-components';
import theme from '../theme';
import InternalLink from './InternalLink';

const Wrapper = styled.div`
  margin-top: ${theme.space[6]}px;
  margin-bottom: ${theme.space[6]}px;
`;

const TagLine = styled.h2`
  ${theme.textStyles.heading2};
  font-family: 'Custom font bold';
`;

const Description = styled.p`
  ${theme.textStyles.heading2}
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    ${theme.textStyles.heading3}
  }
`;

class Hero extends Component {
  render() {
    const tagline = this.props.intro.tagline;
    return (
      <Wrapper>
        <TagLine>{tagline}</TagLine>
        <Description>
          <p>
            I focus on solving real world problems for users.I help companies do this by
            researching, designing and validating with users.
          </p>
          <p>
            I currently work at Citizens Advice designing a platform that will provide advice to
            over 5 million UK citizens per year.I was previously working at British Red Cross{' '}
            <InternalLink to="/casestudy/wheelchair-service">
              redesigning their wheelchair service.
            </InternalLink>
          </p>
        </Description>
      </Wrapper>
    );
  }
}

export default Hero;
