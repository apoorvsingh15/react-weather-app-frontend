import React from "react";
import { object } from "prop-types";

const SectionOne = props => (
  <div>
    <div>Section 1</div>
    <button onClick={() => props.fullpageApi.moveSectionDown()}>
      Click me to move down
    </button>
  </div>
);

SectionOne.propTypes = {
  fullpageApi: object
};

SectionOne.defaultProps = {
  fullpageApi: {}
};

export default SectionOne;
