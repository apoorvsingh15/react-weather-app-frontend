import React from "react";
import { object, bool } from "prop-types";
import Button from "@material-ui/core/Button";
const SectionOne = props => {
  const moveToNextSection = () => props.fullpageApi.moveSectionDown();

  return (
    <div
      className={
        props.appEnvironment === true
          ? "background-image"
          : "dark-background-image"
      }
    >
      <div className="center-content">
        <Button
          onClick={moveToNextSection}
          variant="contained"
          color={props.appEnvironment === true ? "default" : "primary"}
        >
          Current Weather Info
        </Button>
      </div>
    </div>
  );
};

SectionOne.propTypes = {
  fullpageApi: object,
  appEnvironment: bool.isRequired,
  coordinates: object
};

SectionOne.defaultProps = {
  fullpageApi: {},
  coordinates: null
};

export default SectionOne;
