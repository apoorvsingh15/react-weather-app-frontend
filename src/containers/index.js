import React, { PureComponent, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../components/SectionOne";
import SimpleAppBar from "../components/AppBar";
import { geolocated } from "react-geolocated";
import { object, bool } from "prop-types";
import axios from "axios";
import SectionTwo from "../components/SectionTwo";
const APPID = "7df65df52a9b0e808273021697f44b36";
class Main extends PureComponent {
  static propTypes = {
    coords: object,
    isGeolocationAvailable: bool
  };

  static defaultProps = {
    isGeolocationAvailable: true,
    coords: null
  };
  state = {
    appEnvironment: true,
    animateSectionTwo: false,
    responseData: {}
  };

  componentDidUpdate = prevProps => {
    let { coords } = this.props;
    if (this.props.coords !== prevProps.coords) {
      axios
        .post(
          `http://api.openweathermap.org/data/2.5/weather?lat=${coords &&
            coords.latitude}&lon=${coords && coords.longitude}&APPID=${APPID}`
        )
        .then(res => this.setState({ responseData: res }))
        .catch(err => console.log(err));
    }
  };

  getChildData = data => {
    this.setState({ appEnvironment: data });
  };

  render() {
    const { appEnvironment, responseData, animateSectionTwo } = this.state;
    const { coords } = this.props;

    return (
      <Fragment>
        <SimpleAppBar getChildData={this.getChildData} />
        <ReactFullpage
          onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
            direction === "down"
              ? this.setState({ animateSectionTwo: true })
              : direction === "up"
              ? this.setState({ animateSectionTwo: false })
              : this.setState({ animateSectionTwo: false });
          }}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <SectionOne
                    fullpageApi={fullpageApi}
                    appEnvironment={appEnvironment}
                    coordinates={coords}
                  />
                </div>
                <div className="section">
                  <SectionTwo
                    animateSectionTwo={animateSectionTwo}
                    responseData={responseData}
                  />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Main);
