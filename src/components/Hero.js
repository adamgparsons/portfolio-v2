import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {space} from 'styled-system';

const TagLine = styled.h2`
  ${space}
`;

const Description = styled.p`
  font-size: 36px;
`;

const Hero = () => {
  return (
    <div>
      <TagLine mt={4}>I'm Adam, a Product designer based in London.</TagLine>
      <Description>
        I focus on solving real world problems for users. I help companies do this by researching,
        designing, and validating with users. I currently work at Citizens Advice designing a
        platform that will provide advice to over 30 million UK citizens per year. I was previously
        working at British Red Cross redesigning their lending chair service.
      </Description>
    </div>
  );
};

export default Hero;
