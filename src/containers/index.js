import React, { PureComponent, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../components/SectionOne";
import SimpleAppBar from "../components/AppBar";
import { geolocated } from "react-geolocated";
import { object, bool } from "prop-types";
import axios from "axios";
const APPID = "7df65df52a9b0e808273021697f44b36";
class Main extends PureComponent {
  static propTypes = {
    coords: object.isRequired,
    isGeolocationAvailable: bool
  };

  static defaultProps = {
    isGeolocationAvailable: true
  };
  state = {
    appEnvironment: ""
  };

  componentDidMount = () => {
    axios
      .post(
        `api.openweathermap.org/data/2.5/weather?lat=${this.props.coords &&
          this.props.coords.latitude}&lon=${this.props.coords &&
          this.props.coords.longitude}&APPID=${APPID}`
      )
      .then(res => console.log(res).catch(err => console.log(err)));
  };

  componentDidUpdate = prevProps => {
    if (this.props.coords !== null) {
      axios
        .post(
          `api.openweathermap.org/data/2.5/weather?lat=${this.props.coords &&
            this.props.coords.latitude}&lon=${this.props.coords &&
            this.props.coords.longitude}&APPID=${APPID}`
        )
        .then(res => console.log(res).catch(err => console.log(err)));
    }
  };

  getChildData = data => {
    this.setState({ appEnvironment: data });
  };

  render() {
    const { appEnvironment } = this.state;
    const { coords } = this.props;

    return (
      <Fragment>
        <SimpleAppBar getChildData={this.getChildData} />
        <ReactFullpage
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
                  <p>{coords && coords.latitude}</p>
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
