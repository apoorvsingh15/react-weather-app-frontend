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
      <h1
        onClick={moveToNextSection}
        className="animated infinite bounce"
        style={{
          position: "absolute",
          bottom: 0,
          color: props.appEnvironment === true ? "white" : "#3f51b5",
          zIndex: "99999999",
          right: 20
        }}
      >
        <i className="fas fa-arrow-down" />
      </h1>
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
