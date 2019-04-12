import React from "react";
import { object } from "prop-types";
import Button from "@material-ui/core/Button";
const SectionOne = props => (
  <div className="background-image">
    <div className="center-content">
      <Button
        onClick={() => props.fullpageApi.moveSectionDown()}
        variant="contained"
        color="primary"
      >
        Click
      </Button>
    </div>
  </div>
);

SectionOne.propTypes = {
  fullpageApi: object
};

SectionOne.defaultProps = {
  fullpageApi: {}
};

export default SectionOne;
