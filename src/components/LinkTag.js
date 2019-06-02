import styled from "styled-components";
import theme from "../theme";

const LinkTag = styled.a`
  color: inherit;
  padding-bottom: 2px;
  border-bottom: 2px black solid;
  :hover {
    border-bottom: 2px red solid;
  }
`;

export default LinkTag;
