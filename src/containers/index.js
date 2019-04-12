import React, { PureComponent, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../components/SectionOne";
import SimpleAppBar from "../components/AppBar";
import { geolocated } from "react-geolocated";
class Main extends PureComponent {
  state = {
    appEnvironment: ""
  };

  componentDidMount = () => {
    console.log(
      this.props.coords,
      this.props.isGeolocationAvailable,
      "<-=====cords"
    );
  };

  getChildData = data => {
    this.setState({ appEnvironment: data });
  };

  render() {
    const { appEnvironment } = this.state;

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
                    coordinates={this.props.coords}
                  />
                </div>
                <div className="section">
                  <p>{this.props.coords && this.props.coords.latitude}</p>
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
