import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import theme from "../theme";

const MarkdownStyles = styled.div`
  & h1 {
    ${theme.textStyles.heading1}
  }
  & h2 {
    ${theme.textStyles.heading2}
  }

  & h3 {
    ${theme.textStyles.heading3}
  }

  & p {
    ${theme.textStyles.body}
  }
`;

export const CaseStudyTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title">{title}</h1>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CaseStudyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MarkdownStyles>
        <CaseStudyTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </MarkdownStyles>
    </Layout>
  );
};

CaseStudy.propTypes = {
  data: PropTypes.object.isRequired
};

export default CaseStudy;

export const casestudyQuery = graphql`
  query CaseStudyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
