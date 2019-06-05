import React from "react";
import styled from "styled-components";
import theme from "../theme";
import {
  Link
} from "gatsby";

const InternalLink = styled(props => < Link {
      ...props
    }
    />)`
    text - decoration: none; color: inherit; padding - bottom: 1 px; border - bottom: 2 px black solid; transition: background - color 0.25 s;: hover {
      background - color: $ {
        theme.colors.lightGreen
      };
    }
    `;

export default InternalLink;
