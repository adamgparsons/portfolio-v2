import React from "react";
import PropTypes from "prop-types";
import { CaseStudyTemplate } from "../../templates/casestudy";

const CaseStudyPreview = ({ entry, widgetFor }) => (
  <CaseStudyTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CaseStudyPreview;
